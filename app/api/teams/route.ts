import prisma from '@/lib/prisma';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const teams = await prisma.team.findMany();

    if (!teams) {
      return NextResponse.json({ error: 'No teams found' }, { status: 404 });
    }

    return NextResponse.json(teams, { status: 200 });
  } catch (error) {
    console.error('Error fetching teams:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
