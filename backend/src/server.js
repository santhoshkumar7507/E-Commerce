import express from "express";
import path from "path";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import cors from "cors";

import { functions, inngest } from "./config/inngest.js";

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

import adminRoutes from "./routes/admin.route.js";
import userRoutes from "./routes/user.route.js";
import orderRoutes from "./routes/order.route.js";
import reviewRoutes from "./routes/review.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import paymentRoutes from "./routes/payment.route.js";

const app = express();

const __dirname = path.resolve();

// special handling: Stripe webhook needs raw body BEFORE any body parsing middleware
// apply raw body parser conditionally only to webhook endpoint
app.use(
  "/api/payment",
  (req, res, next) => {
    if (req.originalUrl === "/api/payment/webhook") {
      express.raw({ type: "application/json" })(req, res, next);
    } else {
      express.json()(req, res, next); // parse json for non-webhook routes
    }
  },
  paymentRoutes
);

app.use(express.json());
// Bypass Clerk Middleware to inject a mock user
app.use((req, res, next) => {
  req.auth = () => ({ userId: "mock_admin_123" });
  next();
});
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true })); // credentials: true allows the browser to send the cookies to the server with the request

app.use("/api/inngest", serve({ client: inngest, functions }));

app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Success" });
});

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../admin/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
  });
}

const startServer = async () => {
  await connectDB();
  
  if (ENV.DB_URL.includes("placeholder") || ENV.DB_URL.includes("localhost:27017")) {
    const { Product } = await import("./models/product.model.js");
    const count = await Product.countDocuments();
    if (count === 0) {
      console.log("Seeding local database...");
      await Product.insertMany([
        {
          name: "Wireless Bluetooth Headphones",
          description: "Premium over-ear headphones.",
          price: 149.99,
          stock: 50,
          category: "Electronics",
          images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"],
          averageRating: 4.5,
          totalReviews: 128,
        },
        {
          name: "Classic Denim Jacket",
          description: "Timeless denim jacket.",
          price: 69.99,
          stock: 40,
          category: "Fashion",
          images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"],
          averageRating: 4.2,
          totalReviews: 95,
        }
      ]);
      console.log("Database seeded successfully.");
    }
  }

  app.listen(ENV.PORT, () => {
    console.log("Server is up and running on port " + ENV.PORT);
  });
};

startServer();
