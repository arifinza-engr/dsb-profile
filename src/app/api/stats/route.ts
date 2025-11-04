import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { news, gallery, services, jobVacancies, partners, testimonials } from '@/lib/db/schema';
import { sql } from 'drizzle-orm';

// GET /api/stats - Get dashboard statistics
export async function GET() {
  try {
    // Get counts for all entities
    const [newsCount] = await db.select({ count: sql<number>`count(*)` }).from(news);
    const [galleryCount] = await db.select({ count: sql<number>`count(*)` }).from(gallery);
    const [servicesCount] = await db.select({ count: sql<number>`count(*)` }).from(services);
    const [jobsCount] = await db.select({ count: sql<number>`count(*)` }).from(jobVacancies);
    const [partnersCount] = await db.select({ count: sql<number>`count(*)` }).from(partners);
    const [testimonialsCount] = await db.select({ count: sql<number>`count(*)` }).from(testimonials);

    // Get recent activities (latest 5 news and gallery items)
    const recentNews = await db.select({
      id: news.id,
      title: news.title,
      date: news.date,
      type: sql<string>`'news'`
    }).from(news).orderBy(sql`${news.date} desc`).limit(3);

    const recentGallery = await db.select({
      id: gallery.id,
      title: gallery.title,
      date: gallery.date,
      type: sql<string>`'gallery'`
    }).from(gallery).orderBy(sql`${gallery.date} desc`).limit(2);

    // Combine and sort recent activities
    const recentActivities = [...recentNews, ...recentGallery]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);

    const stats = {
      totalNews: newsCount.count,
      totalGallery: galleryCount.count,
      totalServices: servicesCount.count,
      totalJobs: jobsCount.count,
      totalPartners: partnersCount.count,
      totalTestimonials: testimonialsCount.count,
      recentActivities: recentActivities.map(activity => ({
        id: `${activity.type}-${activity.id}`, // Create unique key combining type and id
        title: activity.title,
        date: activity.date,
        type: activity.type
      }))
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ error: 'Failed to fetch statistics' }, { status: 500 });
  }
}