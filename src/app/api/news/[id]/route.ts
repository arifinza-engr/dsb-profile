import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { news } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

// GET /api/news/[id] - Get single news item
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: paramId } = await params;
    const id = parseInt(paramId);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const newsItem = await db.select().from(news).where(eq(news.id, id)).limit(1);

    if (newsItem.length === 0) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 });
    }

    return NextResponse.json(newsItem[0]);
  } catch (error) {
    console.error('Error fetching news item:', error);
    return NextResponse.json({ error: 'Failed to fetch news item' }, { status: 500 });
  }
}

// PUT /api/news/[id] - Update news item
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: paramId } = await params;
    const id = parseInt(paramId);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const body = await request.json();
    const {
      title,
      description,
      author,
      date,
      image,
      category,
      tags,
      slug,
      readingTimeText,
      readingTimeMinutes,
      readingTimeMs,
      readingTimeWords
    } = body;

    const updatedItem = await db
      .update(news)
      .set({
        title,
        description,
        author,
        date,
        image,
        category,
        tags: JSON.stringify(tags || []),
        slug,
        readingTimeText,
        readingTimeMinutes,
        readingTimeMs,
        readingTimeWords,
      })
      .where(eq(news.id, id))
      .returning();

    if (updatedItem.length === 0) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 });
    }

    return NextResponse.json(updatedItem[0]);
  } catch (error) {
    console.error('Error updating news item:', error);
    return NextResponse.json({ error: 'Failed to update news item' }, { status: 500 });
  }
}

// DELETE /api/news/[id] - Delete news item
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: paramId } = await params;
    const id = parseInt(paramId);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const deletedItem = await db
      .delete(news)
      .where(eq(news.id, id))
      .returning();

    if (deletedItem.length === 0) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'News item deleted successfully' });
  } catch (error) {
    console.error('Error deleting news item:', error);
    return NextResponse.json({ error: 'Failed to delete news item' }, { status: 500 });
  }
}