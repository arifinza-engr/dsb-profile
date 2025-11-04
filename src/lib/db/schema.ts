import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

// Gallery table
export const gallery = sqliteTable("gallery", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(),
  alt: text("alt").notNull(),
  date: text("date").notNull(),
});

// Company table
export const company = sqliteTable("company", {
  id: integer("id").primaryKey({ autoIncrement: true }),
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
export const partners = sqliteTable("partners", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  logo: text("logo").notNull(),
  website: text("website").notNull(),
});

// Services table
export const services = sqliteTable("services", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  features: text("features").notNull(), // JSON string
});

// News table
export const news = sqliteTable("news", {
  id: integer("id").primaryKey({ autoIncrement: true }),
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
export const jobVacancies = sqliteTable("job_vacancies", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  location: text("location").notNull(),
  type: text("type").notNull(),
  salary: text("salary").notNull(),
  duration: text("duration").notNull(),
  requirements: text("requirements").notNull(), // JSON string
  benefits: text("benefits").notNull(), // JSON string
  qualifications: text("qualifications").notNull(), // JSON string
  featured: integer("featured", { mode: "boolean" }).notNull(),
  country: text("country").notNull(), // 'china' or 'taiwan'
});

// Testimonials table
export const testimonials = sqliteTable("testimonials", {
  id: integer("id").primaryKey({ autoIncrement: true }),
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
export const organizationalStructure = sqliteTable("organizational_structure", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  position: text("position").notNull(),
  photo: text("photo").notNull(),
  level: integer("level").notNull(),
  icon: text("icon").notNull(),
});

// Social media table
export const socialMedia = sqliteTable("social_media", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  platform: text("platform").notNull(), // 'facebook', 'instagram', 'linkedin'
  url: text("url").notNull(),
});

// Service process steps table
export const serviceProcessSteps = sqliteTable("service_process_steps", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  number: text("number").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
});

// Service additional services table
export const serviceAdditionalServices = sqliteTable(
  "service_additional_services",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    title: text("title").notNull(),
    description: text("description").notNull(),
    features: text("features").notNull(), // JSON string
  }
);

// Service qualifications table
export const serviceQualifications = sqliteTable("service_qualifications", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  type: text("type").notNull(), // 'requirements' or 'documents'
  title: text("title").notNull(),
  description: text("description").notNull(),
});

// Service FAQ table
export const serviceFaq = sqliteTable("service_faq", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
});

// Homepage hero table
export const homepageHero = sqliteTable("homepage_hero", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  ctaText: text("cta_text").notNull(),
  ctaHref: text("cta_href").notNull(),
  secondaryCtaText: text("secondary_cta_text").notNull(),
  secondaryCtaHref: text("secondary_cta_href").notNull(),
  backgroundVideo: text("background_video").notNull(),
});

// Homepage company profile table
export const homepageCompanyProfile = sqliteTable("homepage_company_profile", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  stats: text("stats").notNull(), // JSON string
});

// Homepage why choose us table
export const homepageWhyChooseUs = sqliteTable("homepage_why_choose_us", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  icon: text("icon").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
});

// Homepage CTA table
export const homepageCta = sqliteTable("homepage_cta", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  primaryButtonText: text("primary_button_text").notNull(),
  primaryButtonHref: text("primary_button_href").notNull(),
  secondaryButtonText: text("secondary_button_text").notNull(),
  secondaryButtonHref: text("secondary_button_href").notNull(),
});
