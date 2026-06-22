import mongoose from "mongoose";
import { ENV } from "./env.js";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongod = null;

export const connectDB = async () => {
  try {
    let dbUrl = ENV.DB_URL;
    if (dbUrl.includes("localhost:27017") || dbUrl.includes("placeholder")) {
      mongod = await MongoMemoryServer.create();
      dbUrl = mongod.getUri();
      console.log(`⚠️ Bypassing real MongoDB. Using local Sandbox DB.`);
    }

    const conn = await mongoose.connect(dbUrl);
    console.log(`✅ Connected to MONGODB: ${conn.connection.host}`);
  } catch (error) {
    console.error("💥 MONGODB connection error", error);
    process.exit(1); // exit code 1 means failure, 0 means success
  }
};
