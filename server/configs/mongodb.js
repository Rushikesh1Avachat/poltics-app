// config/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

export async function connectDB() {
  if (db) return db; // reuse existing connection

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
    db = client.db(); // default DB from URI
    return db;
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB", err);
    process.exit(1);
  }
}
