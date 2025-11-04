import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { news } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';

// GET /api/news - Get all news items
export async function GET() {
  try {
    const newsItems = await db.select().from(news).orderBy(desc(news.date));
    return NextResponse.json(newsItems);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}

// POST /api/news - Create new news item
export async function POST(request: NextRequest) {
  try {
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

    if (!title || !description || !author || !date || !image || !category || !slug) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newItem = await db.insert(news).values({
      title,
      description,
      author,
      date,
      image,
      category,
      tags: JSON.stringify(tags || []),
      slug,
      readingTimeText: readingTimeText || '5 min read',
      readingTimeMinutes: readingTimeMinutes || 5,
      readingTimeMs: readingTimeMs || 300000,
      readingTimeWords: readingTimeWords || 850,
    }).returning();

    return NextResponse.json(newItem[0], { status: 201 });
  } catch (error) {
    console.error('Error creating news item:', error);
    return NextResponse.json({ error: 'Failed to create news item' }, { status: 500 });
  }
}