import prisma from '@/app/lib/prisma';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const users = await prisma.user.findMany();

    if (!users) {
      return Response.json({ error: 'No users found' }, { status: 404 });
    }

    return Response.json(users, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
