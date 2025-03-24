import clientPromise from "@/src/database/mongodb";


export async function GET(req, res) {
  try {
    const db = await clientPromise();
    const posts = await db.collection('users').find({}).toArray();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}
