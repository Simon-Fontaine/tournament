import prisma from '@/app/lib/prisma';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const username = request.nextUrl.searchParams.get('username');

    if (!username) {
      return Response.json(
        { error: 'No user username provided' },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!user) {
      return Response.json({ error: 'No user found' }, { status: 404 });
    }

    return Response.json(user, { status: 200 });
  } catch (error) {
    console.error('Error fetching user:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
