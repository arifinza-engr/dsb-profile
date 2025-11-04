import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { testimonials } from '@/lib/db/schema';

// GET /api/testimonials - Get all testimonials
export async function GET() {
  try {
    const testimonialsList = await db.select().from(testimonials);
    return NextResponse.json(testimonialsList);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

// POST /api/testimonials - Create new testimonial
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      position,
      company,
      image,
      content,
      rating,
      contractDuration,
      shipType
    } = body;

    if (!name || !position || !company || !image || !content || !rating) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newItem = await db.insert(testimonials).values({
      name,
      position,
      company,
      image,
      content,
      rating,
      contractDuration,
      shipType,
    }).returning();

    return NextResponse.json(newItem[0], { status: 201 });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
  }
}