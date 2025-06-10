import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  const url = new URL(request.url);
  const email = url.searchParams.get('email');
  if (email) {
    try {
      const user = await prisma.users.findUnique({
        where: { email },
      });
      if (!user) {
        return new Response('User not found', { status: 404 });
      }
      return Response.json(user);
    } catch (error) {
      console.error('GET /api/users error:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const user = await prisma.users.create({
      data: {
        name: body.name,
        email: body.email,
      },
    });
    return Response.json(user);
  } catch (error) {
    console.error('POST /api/users error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
