// News/Blog Types
export interface NewsPost {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
  content?: string;
  slug?: string;
  readingTime?: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}

// Gallery Types
export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  alt: string;
}

// Company Profile Types
export interface CompanyProfile {
  name: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  logo?: string;
  founded: number;
  employees: number;
  visionMission: {
    vision: string;
    mission: string[];
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Service Types
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Admin Types
export interface NewsFormData {
  id?: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
  content: string;
}

export interface GalleryFormData {
  id?: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  alt: string;
}

// Activity Types
export interface Activity {
  id: number;
  type: string;
  title: string;
}

// Job Types
export interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  salary: string;
  duration: string;
  requirements: string[];
  benefits: string[];
  qualifications: string[];
  featured: boolean;
  country: string;
}

// Partner Types
export interface Partner {
  id: number;
  name: string;
  description: string;
  logo: string;
  website: string;
}
