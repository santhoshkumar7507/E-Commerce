<h1 align="center">🛍️ Next-Gen E-Commerce Platform</h1>
<p align="center">
  <em>A modern, full-stack e-commerce solution featuring a Mobile App, Admin Dashboard, and a robust REST API.</em>
</p>

---

## 🌟 About The Project

Welcome to my full-stack e-commerce application! I built this platform to provide a seamless, end-to-end shopping experience. It includes a sleek mobile application for customers, a powerful web dashboard for administrators, and a secure, high-performance Node.js backend tying it all together.

Whether you're browsing products on the go or managing inventory from the office, this platform handles it all with real-time updates, secure payments, and dynamic analytics.

## ✨ Key Features

- **📱 Customer Mobile App**: Beautifully crafted with React Native & Expo.
- **🛡️ Secure Authentication**: Powered by Clerk (Google & Apple Sign-in support).
- **💳 Frictionless Payments**: Fully integrated Stripe checkout and order flow.
- **🛍️ Complete Shopping Experience**: Cart, Favorites, dynamic Pricing, and Address management.
- **📈 Admin Dashboard**: Live analytics, order tracking, and customer management.
- **🔐 Role-Based Access**: Protected admin routes and secure REST API.
- **⚡ High Performance**: Data fetching and caching with TanStack Query.
- **🛠️ Background Processing**: Reliable background jobs handled via Inngest.
- **🚨 Error Monitoring**: Integrated Sentry for real-time tracking and debugging.

## 🛠️ Tech Stack

| Mobile App | Admin Dashboard | Backend API |
| :--- | :--- | :--- |
| React Native | React / Vite | Node.js |
| Expo | TailwindCSS | Express.js |
| TanStack Query | TanStack Query | MongoDB |

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### 1. Environment Setup

You will need to configure `.env` files for each part of the application.

**Backend (`/backend/.env`)**
```env
NODE_ENV=development
PORT=3000
DB_URL=<YOUR_DB_URL>
CLERK_PUBLISHABLE_KEY=<YOUR_CLERK_PUBLISHABLE_KEY>
CLERK_SECRET_KEY=<YOUR_CLERK_SECRET_KEY>
INNGEST_SIGNING_KEY=<YOUR_INNGEST_SIGNING_KEY>
CLOUDINARY_API_KEY=<YOUR_CLOUDINARY_API_KEY>
CLOUDINARY_API_SECRET=<YOUR_CLOUDINARY_API_SECRET>
CLOUDINARY_CLOUD_NAME=<YOUR_CLOUDINARY_CLOUD_NAME>
ADMIN_EMAIL=<YOUR_ADMIN_EMAIL>
CLIENT_URL=http://localhost:5173
STRIPE_PUBLISHABLE_KEY=<YOUR_STRIPE_PUBLISHABLE_KEY>
STRIPE_SECRET_KEY=<YOUR_STRIPE_SECRET_KEY>
STRIPE_WEBHOOK_SECRET=<YOUR_STRIPE_WEBHOOK_SECRET>
```

**Admin Dashboard (`/admin/.env`)**
```env
VITE_CLERK_PUBLISHABLE_KEY=<YOUR_CLERK_PUBLISHABLE_KEY>
VITE_API_URL=http://localhost:3000/api
VITE_SENTRY_DSN=<YOUR_SENTRY_DSN>
```

**Mobile App (`/mobile/.env`)**
```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=<YOUR_CLERK_PUBLISHABLE_KEY>
SENTRY_AUTH_TOKEN=<YOUR_SENTRY_DSN>
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=<YOUR_STRIPE_PUBLISHABLE_KEY>
```

---

### 2. Running the Application

You can start each service individually. Open three separate terminal windows:

**🟢 Start the Backend API:**
```bash
cd backend
npm install
npm run dev
```

**🔵 Start the Admin Dashboard:**
```bash
cd admin
npm install
npm run dev
```

**🟣 Start the Mobile App:**
```bash
cd mobile
npm install
npx expo start
```
*Tip: Scan the generated QR Code with your phone to preview the app in the Expo Go app!*

---

<p align="center">
  <i>Developed by Santhosh Kumar S.</i>
</p>
