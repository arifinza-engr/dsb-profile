import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { gallery } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

// GET /api/gallery/[id] - Get single gallery item
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

    const galleryItem = await db.select().from(gallery).where(eq(gallery.id, parsedId)).limit(1);

    if (galleryItem.length === 0) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
    }

    return NextResponse.json(galleryItem[0]);
  } catch (error) {
    console.error('Error fetching gallery item:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery item' }, { status: 500 });
  }
}

// PUT /api/gallery/[id] - Update gallery item
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
    const { title, description, image, category, alt, date } = body;

    const updatedItem = await db
      .update(gallery)
      .set({
        title,
        description,
        image,
        category,
        alt,
        date,
      })
      .where(eq(gallery.id, parsedId))
      .returning();

    if (updatedItem.length === 0) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
    }

    return NextResponse.json(updatedItem[0]);
  } catch (error) {
    console.error('Error updating gallery item:', error);
    return NextResponse.json({ error: 'Failed to update gallery item' }, { status: 500 });
  }
}

// DELETE /api/gallery/[id] - Delete gallery item
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
      .delete(gallery)
      .where(eq(gallery.id, parsedId))
      .returning();

    if (deletedItem.length === 0) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Gallery item deleted successfully' });
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    return NextResponse.json({ error: 'Failed to delete gallery item' }, { status: 500 });
  }
}