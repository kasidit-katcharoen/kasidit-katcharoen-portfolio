import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.users.findMany();
    return Response.json(users);
  } catch (error) {
    console.error('GET /api/users error:', error);
    return new Response('Internal Server Error', { status: 500 });
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
