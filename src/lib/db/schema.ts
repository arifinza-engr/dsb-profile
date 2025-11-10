import {
  pgTable,
  text,
  integer,
  boolean,
  serial,
  uuid,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// Gallery table
export const gallery = pgTable("gallery", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(),
  alt: text("alt").notNull(),
  date: text("date").notNull(),
});

// Company table
export const company = pgTable("company", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  website: text("website").notNull(),
  logo: text("logo").notNull(),
  founded: integer("founded").notNull(),
  employees: integer("employees").notNull(),
  vision: text("vision").notNull(),
  mission: text("mission").notNull(), // JSON string
});

// Partners table
export const partners = pgTable("partners", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  logo: text("logo").notNull(),
  website: text("website").notNull(),
});

// Services table
export const services = pgTable("services", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  features: text("features").notNull(), // JSON string
});

// News table
export const news = pgTable("news", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  author: text("author").notNull(),
  date: text("date").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(),
  tags: text("tags").notNull(), // JSON string
  slug: text("slug").notNull(),
  readingTimeText: text("reading_time_text").notNull(),
  readingTimeMinutes: integer("reading_time_minutes").notNull(),
  readingTimeMs: integer("reading_time_ms").notNull(),
  readingTimeWords: integer("reading_time_words").notNull(),
});

// Job vacancies table
export const jobVacancies = pgTable("job_vacancies", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  title: text("title").notNull(),
  location: text("location").notNull(),
  type: text("type").notNull(),
  salary: text("salary").notNull(),
  duration: text("duration").notNull(),
  requirements: text("requirements").notNull(), // JSON string
  benefits: text("benefits").notNull(), // JSON string
  qualifications: text("qualifications").notNull(), // JSON string
  featured: boolean("featured").notNull(),
  country: text("country").notNull(), // 'china' or 'taiwan'
});

// Testimonials table
export const testimonials = pgTable("testimonials", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  company: text("company").notNull(),
  image: text("image").notNull(),
  content: text("content").notNull(),
  rating: integer("rating").notNull(),
  contractDuration: text("contract_duration").notNull(),
  shipType: text("ship_type").notNull(),
});

// Organizational structure table
export const organizationalStructure = pgTable("organizational_structure", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  photo: text("photo").notNull(),
  level: integer("level").notNull(),
  icon: text("icon").notNull(),
});

// Social media table
export const socialMedia = pgTable("social_media", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  platform: text("platform").notNull(), // 'facebook', 'instagram', 'linkedin'
  url: text("url").notNull(),
});

// Service process steps table
export const serviceProcessSteps = pgTable("service_process_steps", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  number: text("number").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
});

// Service additional services table
export const serviceAdditionalServices = pgTable(
  "service_additional_services",
  {
    id: uuid("id")
      .default(sql`gen_random_uuid()`)
      .primaryKey(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    features: text("features").notNull(), // JSON string
  }
);

// Service qualifications table
export const serviceQualifications = pgTable("service_qualifications", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  type: text("type").notNull(), // 'requirements' or 'documents'
  title: text("title").notNull(),
  description: text("description").notNull(),
});

// Service FAQ table
export const serviceFaq = pgTable("service_faq", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
});

// Homepage hero table
export const homepageHero = pgTable("homepage_hero", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  ctaText: text("cta_text").notNull(),
  ctaHref: text("cta_href").notNull(),
  secondaryCtaText: text("secondary_cta_text").notNull(),
  secondaryCtaHref: text("secondary_cta_href").notNull(),
  backgroundVideo: text("background_video").notNull(),
});

// Homepage company profile table
export const homepageCompanyProfile = pgTable("homepage_company_profile", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  stats: text("stats").notNull(), // JSON string
});

// Homepage why choose us table
export const homepageWhyChooseUs = pgTable("homepage_why_choose_us", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  icon: text("icon").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
});

// Homepage CTA table
export const homepageCta = pgTable("homepage_cta", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  primaryButtonText: text("primary_button_text").notNull(),
  primaryButtonHref: text("primary_button_href").notNull(),
  secondaryButtonText: text("secondary_button_text").notNull(),
  secondaryButtonHref: text("secondary_button_href").notNull(),
});
