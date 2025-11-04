import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { jobVacancies } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

// GET /api/jobs/[id] - Get single job vacancy
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) return NextResponse.json({ error: "Invalid or missing ID" }, { status: 400 });
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const jobItem = await db.select().from(jobVacancies).where(eq(jobVacancies.id, parsedId)).limit(1);

    if (jobItem.length === 0) {
      return NextResponse.json({ error: 'Job vacancy not found' }, { status: 404 });
    }

    return NextResponse.json(jobItem[0]);
  } catch (error) {
    console.error('Error fetching job:', error);
    return NextResponse.json({ error: 'Failed to fetch job' }, { status: 500 });
  }
}

// PUT /api/jobs/[id] - Update job vacancy
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) return NextResponse.json({ error: "Invalid or missing ID" }, { status: 400 });
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const body = await request.json();
    const {
      title,
      location,
      type,
      salary,
      duration,
      requirements,
      benefits,
      qualifications,
      featured,
      country
    } = body;

    const updatedItem = await db
      .update(jobVacancies)
      .set({
        title,
        location,
        type,
        salary,
        duration,
        requirements: JSON.stringify(requirements || []),
        benefits: JSON.stringify(benefits || []),
        qualifications: JSON.stringify(qualifications || []),
        featured,
        country,
      })
      .where(eq(jobVacancies.id, parsedId))
      .returning();

    if (updatedItem.length === 0) {
      return NextResponse.json({ error: 'Job vacancy not found' }, { status: 404 });
    }

    return NextResponse.json(updatedItem[0]);
  } catch (error) {
    console.error('Error updating job:', error);
    return NextResponse.json({ error: 'Failed to update job' }, { status: 500 });
  }
}

// DELETE /api/jobs/[id] - Delete job vacancy
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) return NextResponse.json({ error: "Invalid or missing ID" }, { status: 400 });
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const deletedItem = await db
      .delete(jobVacancies)
      .where(eq(jobVacancies.id, parsedId))
      .returning();

    if (deletedItem.length === 0) {
      return NextResponse.json({ error: 'Job vacancy not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Job vacancy deleted successfully' });
  } catch (error) {
    console.error('Error deleting job:', error);
    return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 });
  }
}