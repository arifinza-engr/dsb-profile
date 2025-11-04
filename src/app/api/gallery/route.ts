import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { gallery } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

// GET /api/gallery - Get all gallery items
export async function GET() {
  try {
    const galleryItems = await db.select().from(gallery).orderBy(gallery.date);
    return NextResponse.json(galleryItems);
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 });
  }
}

// POST /api/gallery - Create new gallery item
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, image, category, alt, date } = body;

    if (!title || !description || !image || !category || !alt || !date) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newItem = await db.insert(gallery).values({
      title,
      description,
      image,
      category,
      alt,
      date,
    }).returning();

    return NextResponse.json(newItem[0], { status: 201 });
  } catch (error) {
    console.error('Error creating gallery item:', error);
    return NextResponse.json({ error: 'Failed to create gallery item' }, { status: 500 });
  }
}