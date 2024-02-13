import prisma from '@/lib/prisma';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const teams = await prisma.team.findMany();

    if (!teams) {
      return Response.json({ error: 'No teams found' }, { status: 404 });
    }

    return Response.json(teams, { status: 200 });
  } catch (error) {
    console.error('Error fetching teams:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
