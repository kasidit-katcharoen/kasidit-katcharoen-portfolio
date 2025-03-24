export async function GET(req) {
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()
    return Response.json(posts)
  }