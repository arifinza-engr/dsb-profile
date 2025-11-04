import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { company } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// GET /api/company - Get company information
export async function GET() {
  try {
    const companyInfo = await db.select().from(company).limit(1);

    if (companyInfo.length === 0) {
      return NextResponse.json(
        { error: "Company information not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(companyInfo[0]);
  } catch (error) {
    console.error("Error fetching company:", error);
    return NextResponse.json(
      { error: "Failed to fetch company information" },
      { status: 500 }
    );
  }
}

// PUT /api/company - Update company information
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      description,
      email,
      phone,
      address,
      website,
      logo,
      founded,
      employees,
      vision,
      mission,
    } = body;

    // Get existing company record
    const existingCompany = await db.select().from(company).limit(1);

    if (existingCompany.length === 0) {
      // Create new company record
      const newCompany = await db
        .insert(company)
        .values({
          name,
          description,
          email,
          phone,
          address,
          website,
          logo,
          founded,
          employees,
          vision,
          mission: JSON.stringify(mission),
        })
        .returning();

      return NextResponse.json(newCompany[0]);
    } else {
      // Update existing company record
      const updatedCompany = await db
        .update(company)
        .set({
          name,
          description,
          email,
          phone,
          address,
          website,
          logo,
          founded,
          employees,
          vision,
          mission: JSON.stringify(mission),
        })
        .where(eq(company.id, existingCompany[0].id))
        .returning();

      return NextResponse.json(updatedCompany[0]);
    }
  } catch (error) {
    console.error("Error updating company:", error);
    return NextResponse.json(
      { error: "Failed to update company information" },
      { status: 500 }
    );
  }
}
