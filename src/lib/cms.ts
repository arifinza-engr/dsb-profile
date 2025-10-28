import { GalleryItem, NewsPost, CompanyProfile } from "./types";
import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "src/content");
const DATA_FILE = path.join(CONTENT_DIR, "data.json");

// Initialize data file if it doesn't exist
export function initializeDataFile() {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  if (!fs.existsSync(DATA_FILE)) {
    const defaultData = {
      gallery: [],
      company: {
        name: "PT. Duta Samudera Bahari",
        description:
          "Perusahaan terkemuka dalam pemberangkatan Anak Buah Kapal dengan standar internasional tertinggi.",
        email: "info@dutasam.com",
        phone: "+62 (0)21-XXX-XXXX",
        address: "Jakarta, Indonesia",
        website: "https://dutasam.com",
        founded: 2010,
        employees: 150,
        visionMission: {
          vision:
            "Menjadi perusahaan pemberangkatan ABK terpercaya dan profesional dengan standar internasional.",
          mission: [
            "Menyediakan layanan rekrutmen dan penempatan ABK berkualitas tinggi",
            "Memastikan kesejahteraan dan perlindungan ABK sesuai hukum internasional",
            "Bermitra dengan shipping companies terkemuka di seluruh dunia",
            "Mengembangkan SDM maritim yang kompeten dan profesional",
          ],
        },
        socialMedia: {
          facebook: "https://facebook.com/dutasam",
          instagram: "https://instagram.com/dutasam",
          linkedin: "https://linkedin.com/company/dutasam",
        },
      },
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2));
  }
}

// Read all data
export function readAllData() {
  initializeDataFile();
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data);
}

// Gallery functions
export function getGalleryItems(): GalleryItem[] {
  const data = readAllData();
  return data.gallery || [];
}

export function getGalleryItem(id: string): GalleryItem | null {
  const items = getGalleryItems();
  return items.find((item) => item.id === id) || null;
}

export function createGalleryItem(item: Omit<GalleryItem, "id">): GalleryItem {
  const items = getGalleryItems();
  const newItem: GalleryItem = {
    ...item,
    id: Date.now().toString(),
  };
  items.push(newItem);
  saveData({ gallery: items });
  return newItem;
}

export function updateGalleryItem(
  id: string,
  updates: Partial<GalleryItem>
): GalleryItem | null {
  const items = getGalleryItems();
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return null;
  items[index] = { ...items[index], ...updates };
  saveData({ gallery: items });
  return items[index];
}

export function deleteGalleryItem(id: string): boolean {
  const items = getGalleryItems();
  const filtered = items.filter((item) => item.id !== id);
  if (filtered.length === items.length) return false;
  saveData({ gallery: filtered });
  return true;
}

// Company functions
export function getCompanyProfile(): CompanyProfile {
  const data = readAllData();
  return data.company;
}

export function updateCompanyProfile(
  updates: Partial<CompanyProfile>
): CompanyProfile {
  const data = readAllData();
  const updated = { ...data.company, ...updates };
  saveData({ ...data, company: updated });
  return updated;
}

// Navigation functions
export function getNavigation() {
  const data = readAllData();
  return data.navigation || [];
}

// Services functions
export function getServices() {
  const data = readAllData();
  return data.services || [];
}

// News functions
export function getNews() {
  const data = readAllData();
  return data.news || [];
}

export function getNewsPost(id: string) {
  const posts = getNews();
  return posts.find((post: NewsPost) => post.id === id) || null;
}

// SEO functions
export function getSEOData() {
  const data = readAllData();
  return data.seo || {};
}

// News categories
export function getNewsCategories() {
  const data = readAllData();
  return data.newsCategories || [];
}

// Services page data
export function getServicesPageData() {
  const data = readAllData();
  return data.servicesPage || {};
}

// Helper function to save data
function saveData(updates: any) {
  const data = readAllData();
  const merged = { ...data, ...updates };
  fs.writeFileSync(DATA_FILE, JSON.stringify(merged, null, 2));
}
