import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { jobVacancies } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// GET /api/jobs - Get all job vacancies
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get("country");

    // Eksekusi query langsung sesuai kondisi, hindari reassign builder
    const jobs = country
      ? await db
          .select()
          .from(jobVacancies)
          .where(eq(jobVacancies.country, country))
      : await db.select().from(jobVacancies);

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}

// POST /api/jobs - Create new job vacancy
export async function POST(request: NextRequest) {
  try {
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
      country,
    } = body;

    if (!title || !location || !type || !salary || !duration || !country) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newItem = await db
      .insert(jobVacancies)
      .values({
        title,
        location,
        type,
        salary,
        duration,
        requirements: JSON.stringify(requirements || []),
        benefits: JSON.stringify(benefits || []),
        qualifications: JSON.stringify(qualifications || []),
        featured: featured || false,
        country,
      })
      .returning();

    return NextResponse.json(newItem[0], { status: 201 });
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      { error: "Failed to create job" },
      { status: 500 }
    );
  }
}
