import prisma from '@/lib/prisma';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const teamId = request.nextUrl.searchParams.get('id');

    if (!teamId) {
      return Response.json({ error: 'No team id provided' }, { status: 400 });
    }

    const team = await prisma.team.findUnique({
      where: { id: teamId },
    });

    if (!team) {
      return Response.json({ error: 'No team found' }, { status: 404 });
    }

    return Response.json(team, { status: 200 });
  } catch (error) {
    console.error('Error fetching team:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
