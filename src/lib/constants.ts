import data from "@/content/data.json";

// Company Information
export const COMPANY_NAME = data.company.name;
export const COMPANY_LOGO = data.company.logo;
export const COMPANY_DESC = data.company.description;
export const COMPANY_EMAIL = data.company.email;
export const COMPANY_PHONE = data.company.phone;
export const COMPANY_ADDRESS = data.company.address;
export const COMPANY_WEBSITE = data.company.website;

// Navigation
export const NAVIGATION = data.navigation.map(item => {
  if (item.name === "Lowongan Kerja") {
    return {
      ...item,
      submenu: data.jobVacancies.countries.map(country => ({
        name: country.name,
        href: country.href
      }))
    };
  }
  return {
    ...item,
    submenu: undefined
  };
});

// Services
export const SERVICES = data.services;

// Partners
export const PARTNERS = data.partners;

// Blog Categories
export const NEWS_CATEGORIES = data.newsCategories;

// SEO
export const SEO_KEYWORDS = data.seo.keywords;
export const SEO_AUTHOR = data.seo.author;
