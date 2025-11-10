import { db } from "../src/lib/db";
import {
  gallery,
  company,
  partners,
  services,
  news,
  jobVacancies,
  testimonials,
  organizationalStructure,
  socialMedia,
  serviceProcessSteps,
  serviceAdditionalServices,
  serviceQualifications,
  serviceFaq,
  homepageHero,
  homepageCompanyProfile,
  homepageWhyChooseUs,
  homepageCta,
} from "../src/lib/db/schema";
import data from "../src/content/data.json";

async function seedDatabase() {
  try {
    console.log("Starting database seeding...");

    // Clear existing data (optional - remove if you want to keep existing data)
    console.log("Clearing existing data...");
    await db.delete(homepageCta);
    await db.delete(homepageWhyChooseUs);
    await db.delete(homepageCompanyProfile);
    await db.delete(homepageHero);
    await db.delete(serviceFaq);
    await db.delete(serviceQualifications);
    await db.delete(serviceAdditionalServices);
    await db.delete(serviceProcessSteps);
    await db.delete(testimonials);
    await db.delete(jobVacancies);
    await db.delete(news);
    await db.delete(services);
    await db.delete(socialMedia);
    await db.delete(organizationalStructure);
    await db.delete(company);
    await db.delete(partners);
    await db.delete(gallery);

    // Seed gallery
    console.log("Seeding gallery...");
    for (const item of data.gallery) {
      await db.insert(gallery).values({
        title: item.title,
        description: item.description,
        image: item.image,
        category: item.category,
        alt: item.alt,
        date: item.date,
      });
    }

    // Seed company
    console.log("Seeding company...");
    await db.insert(company).values({
      name: data.company.name,
      description: data.company.description,
      email: data.company.email,
      phone: data.company.phone,
      address: data.company.address,
      website: data.company.website,
      logo: data.company.logo,
      founded: data.company.founded,
      employees: data.company.employees,
      vision: data.company.visionMission.vision,
      mission: JSON.stringify(data.company.visionMission.mission),
    });

    // Seed organizational structure
    console.log("Seeding organizational structure...");
    for (const member of data.company.organizationalStructure) {
      await db.insert(organizationalStructure).values({
        name: member.name,
        position: member.position,
        photo: member.photo,
        level: member.level,
        icon: member.icon,
      });
    }

    // Seed social media
    console.log("Seeding social media...");
    for (const [platform, url] of Object.entries(data.company.socialMedia)) {
      await db.insert(socialMedia).values({
        platform,
        url: url as string,
      });
    }

    // Seed partners
    console.log("Seeding partners...");
    for (const partner of data.partners) {
      await db.insert(partners).values({
        name: partner.name,
        description: partner.description,
        logo: partner.logo,
        website: partner.website,
      });
    }

    // Seed services
    console.log("Seeding services...");
    for (const service of data.services) {
      await db.insert(services).values({
        title: service.title,
        description: service.description,
        icon: service.icon,
        features: JSON.stringify(service.features),
      });
    }

    // Seed news
    console.log("Seeding news...");
    for (const newsItem of data.news) {
      await db.insert(news).values({
        title: newsItem.title,
        description: newsItem.description,
        author: newsItem.author,
        date: newsItem.date,
        image: newsItem.image,
        category: newsItem.category,
        tags: JSON.stringify(newsItem.tags),
        slug: newsItem.slug,
        readingTimeText: newsItem.readingTime.text,
        readingTimeMinutes: newsItem.readingTime.minutes,
        readingTimeMs: newsItem.readingTime.time,
        readingTimeWords: newsItem.readingTime.words,
      });
    }

    // Seed job vacancies
    console.log("Seeding job vacancies...");
    for (const job of data.jobVacancies.china) {
      await db.insert(jobVacancies).values({
        title: job.title,
        location: job.location,
        type: job.type,
        salary: job.salary,
        duration: job.duration,
        requirements: JSON.stringify(job.requirements),
        benefits: JSON.stringify(job.benefits),
        qualifications: JSON.stringify(job.qualifications),
        featured: job.featured,
        country: "china",
      });
    }

    for (const job of data.jobVacancies.taiwan) {
      await db.insert(jobVacancies).values({
        title: job.title,
        location: job.location,
        type: job.type,
        salary: job.salary,
        duration: job.duration,
        requirements: JSON.stringify(job.requirements),
        benefits: JSON.stringify(job.benefits),
        qualifications: JSON.stringify(job.qualifications),
        featured: job.featured,
        country: "taiwan",
      });
    }

    // Seed testimonials
    console.log("Seeding testimonials...");
    for (const testimonial of data.homepage.testimonials) {
      await db.insert(testimonials).values({
        name: testimonial.name,
        position: testimonial.position,
        company: testimonial.company,
        image: testimonial.image,
        content: testimonial.content,
        rating: testimonial.rating,
        contractDuration: testimonial.contractDuration,
        shipType: testimonial.shipType,
      });
    }

    // Seed service process steps
    console.log("Seeding service process steps...");
    for (const step of data.servicesPage.processSteps) {
      await db.insert(serviceProcessSteps).values({
        number: step.number,
        title: step.title,
        description: step.description,
        icon: step.icon,
      });
    }

    // Seed service additional services
    console.log("Seeding service additional services...");
    for (const service of data.servicesPage.additionalServices) {
      await db.insert(serviceAdditionalServices).values({
        title: service.title,
        description: service.description,
        features: JSON.stringify(service.features),
      });
    }

    // Seed service qualifications
    console.log("Seeding service qualifications...");
    for (const req of data.servicesPage.qualifications.requirements) {
      await db.insert(serviceQualifications).values({
        type: "requirements",
        title: "Requirements",
        description: req,
      });
    }

    for (const doc of data.servicesPage.qualifications.documents) {
      await db.insert(serviceQualifications).values({
        type: "documents",
        title: "Documents",
        description: doc,
      });
    }

    // Seed service FAQ
    console.log("Seeding service FAQ...");
    for (const faq of data.servicesPage.faq) {
      await db.insert(serviceFaq).values({
        question: faq.q,
        answer: faq.a,
      });
    }

    // Seed homepage hero
    console.log("Seeding homepage hero...");
    await db.insert(homepageHero).values({
      title: data.homepage.hero.title,
      description: data.homepage.hero.description,
      ctaText: data.homepage.hero.ctaText,
      ctaHref: data.homepage.hero.ctaHref,
      secondaryCtaText: data.homepage.hero.secondaryCtaText,
      secondaryCtaHref: data.homepage.hero.secondaryCtaHref,
      backgroundVideo: data.homepage.hero.backgroundVideo,
    });

    // Seed homepage company profile
    console.log("Seeding homepage company profile...");
    await db.insert(homepageCompanyProfile).values({
      title: data.homepage.companyProfile.title,
      description: data.homepage.companyProfile.description,
      stats: JSON.stringify(data.homepage.companyProfile.stats),
    });

    // Seed homepage why choose us
    console.log("Seeding homepage why choose us...");
    for (const item of data.homepage.whyChooseUs) {
      await db.insert(homepageWhyChooseUs).values({
        icon: item.icon,
        title: item.title,
        description: item.description,
      });
    }

    // Seed homepage CTA
    console.log("Seeding homepage CTA...");
    await db.insert(homepageCta).values({
      title: data.homepage.cta.title,
      description: data.homepage.cta.description,
      primaryButtonText: data.homepage.cta.primaryButton.text,
      primaryButtonHref: data.homepage.cta.primaryButton.href,
      secondaryButtonText: data.homepage.cta.secondaryButton.text,
      secondaryButtonHref: data.homepage.cta.secondaryButton.href,
    });

    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

seedDatabase();