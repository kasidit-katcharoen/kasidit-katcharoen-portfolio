import { MongoClient } from "mongodb";

const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

let client;
let clientPromise;

if (!DATABASE_URL) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // ถ้ามีการเชื่อมต่ออยู่แล้ว ให้ใช้ตัวเก่า (กันการเปิดหลาย connection)
  if (!global._mongoClientPromise) {
    client = new MongoClient(DATABASE_URL, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Production mode, ใช้ connection ปกติ
  client = new MongoClient(DATABASE_URL, options);
  clientPromise = client.connect();
}

export default clientPromise;
