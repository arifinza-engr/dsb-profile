import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { services } from '@/lib/db/schema';

// GET /api/services - Get all services
export async function GET() {
  try {
    const servicesList = await db.select().from(services);
    return NextResponse.json(servicesList);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

// POST /api/services - Create new service
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, icon, features } = body;

    if (!title || !description || !icon || !features) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newItem = await db.insert(services).values({
      title,
      description,
      icon,
      features: JSON.stringify(features),
    }).returning();

    return NextResponse.json(newItem[0], { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}