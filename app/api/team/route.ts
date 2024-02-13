import prisma from '@/app/lib/prisma';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const teamName = request.nextUrl.searchParams.get('name');

    if (!teamName) {
      return Response.json({ error: 'No team name provided' }, { status: 400 });
    }

    const team = await prisma.team.findUnique({
      where: { name: teamName },
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
