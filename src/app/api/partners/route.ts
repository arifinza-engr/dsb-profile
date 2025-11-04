import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { partners } from '@/lib/db/schema';

// GET /api/partners - Get all partners
export async function GET() {
  try {
    const partnersList = await db.select().from(partners);
    return NextResponse.json(partnersList);
  } catch (error) {
    console.error('Error fetching partners:', error);
    return NextResponse.json({ error: 'Failed to fetch partners' }, { status: 500 });
  }
}

// POST /api/partners - Create new partner
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, logo, website } = body;

    if (!name || !description || !logo || !website) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newItem = await db.insert(partners).values({
      name,
      description,
      logo,
      website,
    }).returning();

    return NextResponse.json(newItem[0], { status: 201 });
  } catch (error) {
    console.error('Error creating partner:', error);
    return NextResponse.json({ error: 'Failed to create partner' }, { status: 500 });
  }
}