import clientPromise from "@/src/database/mongodb";

export async function GET() {
  try {
    const MONGODB_DB = process.env.MONGODB_DB;
    const client = await clientPromise;
    const db = client.db(MONGODB_DB);
    const users = await db.collection("users").find().limit(20).toArray();
    return Response.json(users);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
