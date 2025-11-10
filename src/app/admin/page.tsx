"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Settings,
  Plus,
  Trash2,
  Edit,
  LogOut,
  Menu,
  X,
  Save,
  X as CloseIcon,
  BarChart3,
  Users,
  FileText,
  Image,
  Briefcase,
  Handshake,
  MessageSquare,
  Building2,
  Home,
  Search,
  Bell,
  User,
} from "lucide-react";
import { Job, Activity } from "@/lib/types";
import { FileUpload } from "@/components/ui/FileUpload";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<
    | "dashboard"
    | "news"
    | "gallery"
    | "services"
    | "jobs"
    | "partners"
    | "testimonials"
    | "profile"
    | "settings"
  >("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // News state
  const [newsList, setNewsList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [editingNews, setEditingNews] = useState<any>(null);
  const [newsForm, setNewsForm] = useState({
    title: "",
    description: "",
    author: "",
    date: "",
    image: "",
    category: "",
    tags: [] as string[],
    slug: "",
  });

  // Gallery state
  const [galleryList, setGalleryList] = useState<any[]>([]);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [editingGallery, setEditingGallery] = useState<any>(null);
  const [galleryForm, setGalleryForm] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    alt: "",
    date: "",
  });

  // Company state
  const [companyData, setCompanyData] = useState<any>(null);
  const [companyLoading, setCompanyLoading] = useState(false);
  const [companyForm, setCompanyForm] = useState({
    name: "",
    description: "",
    email: "",
    phone: "",
    address: "",
    website: "",
    logo: "",
    founded: "",
    employees: "",
    vision: "",
    mission: [] as string[],
  });

  // Services state
  const [servicesList, setServicesList] = useState<any[]>([]);
  const [servicesLoading, setServicesLoading] = useState(false);
  const [showServicesModal, setShowServicesModal] = useState(false);
  const [editingService, setEditingService] = useState<any>(null);
  const [servicesForm, setServicesForm] = useState({
    title: "",
    description: "",
    icon: "",
    features: [] as string[],
  });

  // Jobs state
  const [jobsList, setJobsList] = useState<Job[]>([]);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [showJobsModal, setShowJobsModal] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [jobsForm, setJobsForm] = useState({
    title: "",
    location: "",
    type: "",
    salary: "",
    duration: "",
    requirements: [] as string[],
    benefits: [] as string[],
    qualifications: [] as string[],
    featured: false,
    country: "",
  });

  // Partners state
  const [partnersList, setPartnersList] = useState<any[]>([]);
  const [partnersLoading, setPartnersLoading] = useState(false);
  const [showPartnersModal, setShowPartnersModal] = useState(false);
  const [editingPartner, setEditingPartner] = useState<any>(null);
  const [partnersForm, setPartnersForm] = useState({
    name: "",
    description: "",
    logo: "",
    website: "",
  });

  // Testimonials state
  const [testimonialsList, setTestimonialsList] = useState<any[]>([]);
  const [testimonialsLoading, setTestimonialsLoading] = useState(false);
  const [showTestimonialsModal, setShowTestimonialsModal] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<any>(null);
  const [testimonialsForm, setTestimonialsForm] = useState({
    name: "",
    position: "",
    company: "",
    image: "",
    content: "",
    rating: 5,
    contractDuration: "",
    shipType: "",
  });

  // Dashboard stats state
  const [dashboardStats, setDashboardStats] = useState({
    totalNews: 0,
    totalGallery: 0,
    totalServices: 0,
    totalJobs: 0,
    totalPartners: 0,
    totalTestimonials: 0,
    recentActivities: [] as Activity[],
  });
  const [statsLoading, setStatsLoading] = useState(false);

  // Load dashboard stats
  const loadDashboardStats = async () => {
    setStatsLoading(true);
    try {
      const response = await fetch("/api/stats");
      if (response.ok) {
        const data = await response.json();
        setDashboardStats(data);
      }
    } catch (error) {
      console.error("Error loading dashboard stats:", error);
    }
    setStatsLoading(false);
  };

  // Load news data
  const loadNews = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/news");
      if (response.ok) {
        const data = await response.json();
        setNewsList(data);
      }
    } catch (error) {
      console.error("Error loading news:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (activeTab === "news") {
      loadNews();
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === "dashboard") {
      loadDashboardStats();
    }
  }, [activeTab]);

  // News CRUD functions
  const handleCreateNews = async () => {
    try {
      const response = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newsForm),
      });
      if (response.ok) {
        setShowNewsModal(false);
        setNewsForm({
          title: "",
          description: "",
          author: "",
          date: "",
          image: "",
          category: "",
          tags: [],
          slug: "",
        });
        loadNews();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Berita berhasil ditambahkan",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal menambahkan berita",
        });
      }
    } catch (error) {
      console.error("Error creating news:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat menambahkan berita",
      });
    }
  };

  const handleUpdateNews = async () => {
    if (!editingNews) return;
    try {
      const response = await fetch(`/api/news/${editingNews.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newsForm),
      });
      if (response.ok) {
        setShowNewsModal(false);
        setEditingNews(null);
        setNewsForm({
          title: "",
          description: "",
          author: "",
          date: "",
          image: "",
          category: "",
          tags: [],
          slug: "",
        });
        loadNews();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Berita berhasil diperbarui",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal memperbarui berita",
        });
      }
    } catch (error) {
      console.error("Error updating news:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat memperbarui berita",
      });
    }
  };

  const handleDeleteNews = async (id: number) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data berita yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });

    if (!result.isConfirmed) return;

    try {
      const response = await fetch(`/api/news/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        loadNews();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Berita berhasil dihapus",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal menghapus berita",
        });
      }
    } catch (error) {
      console.error("Error deleting news:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat menghapus berita",
      });
    }
  };

  const openNewsModal = (news?: any) => {
    if (news) {
      setEditingNews(news);
      setNewsForm({
        title: news.title,
        description: news.description,
        author: news.author,
        date: news.date,
        image: news.image,
        category: news.category,
        tags: JSON.parse(news.tags || "[]"),
        slug: news.slug,
      });
    } else {
      setEditingNews(null);
      setNewsForm({
        title: "",
        description: "",
        author: "",
        date: "",
        image: "",
        category: "",
        tags: [],
        slug: "",
      });
    }
    setShowNewsModal(true);
  };

  // Load gallery data
  const loadGallery = async () => {
    setGalleryLoading(true);
    try {
      const response = await fetch("/api/gallery");
      if (response.ok) {
        const data = await response.json();
        setGalleryList(data);
      }
    } catch (error) {
      console.error("Error loading gallery:", error);
    }
    setGalleryLoading(false);
  };

  useEffect(() => {
    if (activeTab === "gallery") {
      loadGallery();
    }
  }, [activeTab]);

  // Gallery CRUD functions
  const handleCreateGallery = async () => {
    try {
      const response = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(galleryForm),
      });
      if (response.ok) {
        setShowGalleryModal(false);
        setGalleryForm({
          title: "",
          description: "",
          image: "",
          category: "",
          alt: "",
          date: "",
        });
        loadGallery();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Item galeri berhasil ditambahkan",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal menambahkan item galeri",
        });
      }
    } catch (error) {
      console.error("Error creating gallery item:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat menambahkan item galeri",
      });
    }
  };

  const handleUpdateGallery = async () => {
    if (!editingGallery) return;
    try {
      const response = await fetch(`/api/gallery/${editingGallery.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(galleryForm),
      });
      if (response.ok) {
        setShowGalleryModal(false);
        setEditingGallery(null);
        setGalleryForm({
          title: "",
          description: "",
          image: "",
          category: "",
          alt: "",
          date: "",
        });
        loadGallery();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Item galeri berhasil diperbarui",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal memperbarui item galeri",
        });
      }
    } catch (error) {
      console.error("Error updating gallery item:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat memperbarui item galeri",
      });
    }
  };

  const handleDeleteGallery = async (id: number) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data galeri yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });

    if (!result.isConfirmed) return;

    try {
      const response = await fetch(`/api/gallery/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        loadGallery();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Item galeri berhasil dihapus",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal menghapus item galeri",
        });
      }
    } catch (error) {
      console.error("Error deleting gallery item:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat menghapus item galeri",
      });
    }
  };

  const openGalleryModal = (gallery?: any) => {
    if (gallery) {
      setEditingGallery(gallery);
      setGalleryForm({
        title: gallery.title,
        description: gallery.description,
        image: gallery.image,
        category: gallery.category,
        alt: gallery.alt,
        date: gallery.date,
      });
    } else {
      setEditingGallery(null);
      setGalleryForm({
        title: "",
        description: "",
        image: "",
        category: "",
        alt: "",
        date: "",
      });
    }
    setShowGalleryModal(true);
  };

  // Load company data
  const loadCompany = async () => {
    setCompanyLoading(true);
    try {
      const response = await fetch("/api/company");
      if (response.ok) {
        const data = await response.json();
        setCompanyData(data);
        setCompanyForm({
          name: data.name || "",
          description: data.description || "",
          email: data.email || "",
          phone: data.phone || "",
          address: data.address || "",
          website: data.website || "",
          logo: data.logo || "",
          founded: data.founded?.toString() || "",
          employees: data.employees?.toString() || "",
          vision: data.vision || "",
          mission: JSON.parse(data.mission || "[]"),
        });
      }
    } catch (error) {
      console.error("Error loading company:", error);
    }
    setCompanyLoading(false);
  };

  useEffect(() => {
    if (activeTab === "profile") {
      loadCompany();
    }
  }, [activeTab]);

  // Company CRUD functions
  const handleUpdateCompany = async () => {
    try {
      const response = await fetch("/api/company", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(companyForm),
      });
      if (response.ok) {
        loadCompany();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Informasi perusahaan berhasil diperbarui",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal memperbarui informasi perusahaan",
        });
      }
    } catch (error) {
      console.error("Error updating company:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat memperbarui informasi perusahaan",
      });
    }
  };

  // Load services data
  const loadServices = async () => {
    setServicesLoading(true);
    try {
      const response = await fetch("/api/services");
      if (response.ok) {
        const data = await response.json();
        setServicesList(data);
      }
    } catch (error) {
      console.error("Error loading services:", error);
    }
    setServicesLoading(false);
  };

  useEffect(() => {
    if (activeTab === "services") {
      loadServices();
    }
  }, [activeTab]);

  // Services CRUD functions
  const handleCreateService = async () => {
    try {
      const response = await fetch("/api/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(servicesForm),
      });
      if (response.ok) {
        setShowServicesModal(false);
        setServicesForm({
          title: "",
          description: "",
          icon: "",
          features: [],
        });
        loadServices();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Layanan berhasil ditambahkan",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal menambahkan layanan",
        });
      }
    } catch (error) {
      console.error("Error creating service:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat menambahkan layanan",
      });
    }
  };

  const handleUpdateService = async () => {
    if (!editingService) return;
    try {
      const response = await fetch(`/api/services/${editingService.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(servicesForm),
      });
      if (response.ok) {
        setShowServicesModal(false);
        setEditingService(null);
        setServicesForm({
          title: "",
          description: "",
          icon: "",
          features: [],
        });
        loadServices();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Layanan berhasil diperbarui",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal memperbarui layanan",
        });
      }
    } catch (error) {
      console.error("Error updating service:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat memperbarui layanan",
      });
    }
  };

  const handleDeleteService = async (id: number) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data layanan yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });

    if (!result.isConfirmed) return;

    try {
      const response = await fetch(`/api/services/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        loadServices();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Layanan berhasil dihapus",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal menghapus layanan",
        });
      }
    } catch (error) {
      console.error("Error deleting service:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat menghapus layanan",
      });
    }
  };

  const openServicesModal = (service?: any) => {
    if (service) {
      setEditingService(service);
      setServicesForm({
        title: service.title,
        description: service.description,
        icon: service.icon,
        features: JSON.parse(service.features || "[]"),
      });
    } else {
      setEditingService(null);
      setServicesForm({
        title: "",
        description: "",
        icon: "",
        features: [],
      });
    }
    setShowServicesModal(true);
  };

  // Load jobs data
  const loadJobs = async () => {
    setJobsLoading(true);
    try {
      const response = await fetch("/api/jobs");
      if (response.ok) {
        const data = await response.json();
        setJobsList(data);
      }
    } catch (error) {
      console.error("Error loading jobs:", error);
    }
    setJobsLoading(false);
  };

  useEffect(() => {
    if (activeTab === "jobs") {
      loadJobs();
    }
  }, [activeTab]);

  // Jobs CRUD functions
  const handleCreateJob = async () => {
    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobsForm),
      });
      if (response.ok) {
        setShowJobsModal(false);
        setJobsForm({
          title: "",
          location: "",
          type: "",
          salary: "",
          duration: "",
          requirements: [],
          benefits: [],
          qualifications: [],
          featured: false,
          country: "",
        });
        loadJobs();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Lowongan kerja berhasil ditambahkan",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal menambahkan lowongan kerja",
        });
      }
    } catch (error) {
      console.error("Error creating job:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat menambahkan lowongan kerja",
      });
    }
  };

  const handleUpdateJob = async () => {
    if (!editingJob) return;
    try {
      const response = await fetch(`/api/jobs/${editingJob.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobsForm),
      });
      if (response.ok) {
        setShowJobsModal(false);
        setEditingJob(null);
        setJobsForm({
          title: "",
          location: "",
          type: "",
          salary: "",
          duration: "",
          requirements: [],
          benefits: [],
          qualifications: [],
          featured: false,
          country: "",
        });
        loadJobs();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Lowongan kerja berhasil diperbarui",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal memperbarui lowongan kerja",
        });
      }
    } catch (error) {
      console.error("Error updating job:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat memperbarui lowongan kerja",
      });
    }
  };

  const handleDeleteJob = async (id: number) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data lowongan kerja yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });

    if (!result.isConfirmed) return;

    try {
      const response = await fetch(`/api/jobs/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        loadJobs();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Lowongan kerja berhasil dihapus",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal menghapus lowongan kerja",
        });
      }
    } catch (error) {
      console.error("Error deleting job:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat menghapus lowongan kerja",
      });
    }
  };

  const openJobsModal = (job?: any) => {
    if (job) {
      setEditingJob(job);
      setJobsForm({
        title: job.title,
        location: job.location,
        type: job.type,
        salary: job.salary,
        duration: job.duration,
        requirements: JSON.parse(job.requirements || "[]"),
        benefits: JSON.parse(job.benefits || "[]"),
        qualifications: JSON.parse(job.qualifications || "[]"),
        featured: job.featured,
        country: job.country,
      });
    } else {
      setEditingJob(null);
      setJobsForm({
        title: "",
        location: "",
        type: "",
        salary: "",
        duration: "",
        requirements: [],
        benefits: [],
        qualifications: [],
        featured: false,
        country: "",
      });
    }
    setShowJobsModal(true);
  };

  // Load partners data
  const loadPartners = async () => {
    setPartnersLoading(true);
    try {
      const response = await fetch("/api/partners");
      if (response.ok) {
        const data = await response.json();
        setPartnersList(data);
      }
    } catch (error) {
      console.error("Error loading partners:", error);
    }
    setPartnersLoading(false);
  };

  useEffect(() => {
    if (activeTab === "partners") {
      loadPartners();
    }
  }, [activeTab]);

  // Partners CRUD functions
  const handleCreatePartner = async () => {
    try {
      const response = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(partnersForm),
      });
      if (response.ok) {
        setShowPartnersModal(false);
        setPartnersForm({
          name: "",
          description: "",
          logo: "",
          website: "",
        });
        loadPartners();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Mitra berhasil ditambahkan",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal menambahkan mitra",
        });
      }
    } catch (error) {
      console.error("Error creating partner:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat menambahkan mitra",
      });
    }
  };

  const handleUpdatePartner = async () => {
    if (!editingPartner) return;
    try {
      const response = await fetch(`/api/partners/${editingPartner.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(partnersForm),
      });
      if (response.ok) {
        setShowPartnersModal(false);
        setEditingPartner(null);
        setPartnersForm({
          name: "",
          description: "",
          logo: "",
          website: "",
        });
        loadPartners();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Mitra berhasil diperbarui",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal memperbarui mitra",
        });
      }
    } catch (error) {
      console.error("Error updating partner:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat memperbarui mitra",
      });
    }
  };

  const handleDeletePartner = async (id: number) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data mitra yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });

    if (!result.isConfirmed) return;

    try {
      const response = await fetch(`/api/partners/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        loadPartners();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Mitra berhasil dihapus",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal menghapus mitra",
        });
      }
    } catch (error) {
      console.error("Error deleting partner:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat menghapus mitra",
      });
    }
  };

  const openPartnersModal = (partner?: any) => {
    if (partner) {
      setEditingPartner(partner);
      setPartnersForm({
        name: partner.name,
        description: partner.description,
        logo: partner.logo,
        website: partner.website,
      });
    } else {
      setEditingPartner(null);
      setPartnersForm({
        name: "",
        description: "",
        logo: "",
        website: "",
      });
    }
    setShowPartnersModal(true);
  };

  // Load testimonials data
  const loadTestimonials = async () => {
    setTestimonialsLoading(true);
    try {
      const response = await fetch("/api/testimonials");
      if (response.ok) {
        const data = await response.json();
        setTestimonialsList(data);
      }
    } catch (error) {
      console.error("Error loading testimonials:", error);
    }
    setTestimonialsLoading(false);
  };

  useEffect(() => {
    if (activeTab === "testimonials") {
      loadTestimonials();
    }
  }, [activeTab]);

  // Testimonials CRUD functions
  const handleCreateTestimonial = async () => {
    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testimonialsForm),
      });
      if (response.ok) {
        setShowTestimonialsModal(false);
        setTestimonialsForm({
          name: "",
          position: "",
          company: "",
          image: "",
          content: "",
          rating: 5,
          contractDuration: "",
          shipType: "",
        });
        loadTestimonials();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Testimonial berhasil ditambahkan",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal menambahkan testimonial",
        });
      }
    } catch (error) {
      console.error("Error creating testimonial:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat menambahkan testimonial",
      });
    }
  };

  const handleUpdateTestimonial = async () => {
    if (!editingTestimonial) return;
    try {
      const response = await fetch(
        `/api/testimonials/${editingTestimonial.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(testimonialsForm),
        }
      );
      if (response.ok) {
        setShowTestimonialsModal(false);
        setEditingTestimonial(null);
        setTestimonialsForm({
          name: "",
          position: "",
          company: "",
          image: "",
          content: "",
          rating: 5,
          contractDuration: "",
          shipType: "",
        });
        loadTestimonials();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Testimonial berhasil diperbarui",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal memperbarui testimonial",
        });
      }
    } catch (error) {
      console.error("Error updating testimonial:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat memperbarui testimonial",
      });
    }
  };

  const handleDeleteTestimonial = async (id: number) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data testimonial yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });

    if (!result.isConfirmed) return;

    try {
      const response = await fetch(`/api/testimonials/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        loadTestimonials();
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Testimonial berhasil dihapus",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal menghapus testimonial",
        });
      }
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan saat menghapus testimonial",
      });
    }
  };

  const openTestimonialsModal = (testimonial?: any) => {
    if (testimonial) {
      setEditingTestimonial(testimonial);
      setTestimonialsForm({
        name: testimonial.name,
        position: testimonial.position,
        company: testimonial.company,
        image: testimonial.image,
        content: testimonial.content,
        rating: testimonial.rating,
        contractDuration: testimonial.contractDuration,
        shipType: testimonial.shipType,
      });
    } else {
      setEditingTestimonial(null);
      setTestimonialsForm({
        name: "",
        position: "",
        company: "",
        image: "",
        content: "",
        rating: 5,
        contractDuration: "",
        shipType: "",
      });
    }
    setShowTestimonialsModal(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="relative bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-2">
              Admin Panel
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Masukkan kredensial Anda untuk melanjutkan
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                placeholder="admin"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                placeholder="••••••••"
              />
            </div>

            <button
              type="button"
              onClick={() => setIsAuthenticated(true)}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-72" : "w-20"
        } bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 transition-all duration-300 fixed md:relative h-screen overflow-y-auto z-40 shadow-xl pt-17`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          {sidebarOpen && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900 dark:text-white">
                  Admin CMS
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  PT. Duta Samudera Bahari
                </p>
              </div>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 p-2 rounded-lg transition-colors"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {[
            {
              id: "dashboard",
              label: "Dashboard",
              icon: BarChart3,
              color: "text-blue-600",
            },
            {
              id: "news",
              label: "Berita",
              icon: FileText,
              color: "text-green-600",
            },
            {
              id: "gallery",
              label: "Galeri",
              icon: Image,
              color: "text-purple-600",
            },
            {
              id: "services",
              label: "Layanan",
              icon: Settings,
              color: "text-orange-600",
            },
            {
              id: "jobs",
              label: "Lowongan Kerja",
              icon: Briefcase,
              color: "text-indigo-600",
            },
            {
              id: "partners",
              label: "Mitra",
              icon: Handshake,
              color: "text-teal-600",
            },
            {
              id: "testimonials",
              label: "Testimonial",
              icon: MessageSquare,
              color: "text-pink-600",
            },
            {
              id: "profile",
              label: "Profil Perusahaan",
              icon: Building2,
              color: "text-slate-600",
            },
            {
              id: "settings",
              label: "Pengaturan",
              icon: Settings,
              color: "text-gray-600",
            },
          ].map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id as any);
                  if (window.innerWidth < 768) setSidebarOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 group ${
                  activeTab === item.id
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-800"
                    : "hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                <IconComponent
                  className={`w-5 h-5 ${
                    activeTab === item.id
                      ? "text-blue-600 dark:text-blue-400"
                      : item.color
                  } transition-colors`}
                />
                {sidebarOpen && (
                  <span className="font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Profile & Logout */}
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          {sidebarOpen && (
            <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Admin
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Administrator
                  </p>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsAuthenticated(false)}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <LogOut className="w-5 h-5" />
            {sidebarOpen && "Logout"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto pt-14">
        {/* Header */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-700 p-6 sticky top-0 z-30">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {activeTab === "dashboard" && "Dashboard"}
                {activeTab === "news" && "Kelola Berita"}
                {activeTab === "gallery" && "Kelola Galeri"}
                {activeTab === "services" && "Kelola Layanan"}
                {activeTab === "jobs" && "Kelola Lowongan Kerja"}
                {activeTab === "partners" && "Kelola Mitra"}
                {activeTab === "testimonials" && "Kelola Testimonial"}
                {activeTab === "profile" && "Profil Perusahaan"}
                {activeTab === "settings" && "Pengaturan"}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {activeTab === "dashboard" &&
                  "Ringkasan aktivitas dan statistik sistem"}
                {activeTab === "news" && "Kelola artikel dan berita perusahaan"}
                {activeTab === "gallery" && "Kelola foto dan media galeri"}
                {activeTab === "services" && "Kelola layanan yang ditawarkan"}
                {activeTab === "jobs" && "Kelola lowongan pekerjaan"}
                {activeTab === "partners" && "Kelola mitra dan partner bisnis"}
                {activeTab === "testimonials" && "Kelola testimoni pelanggan"}
                {activeTab === "profile" &&
                  "Kelola informasi profil perusahaan"}
                {activeTab === "settings" && "Pengaturan sistem dan preferensi"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button
                className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    label: "Total Berita",
                    value: dashboardStats.totalNews.toString(),
                    icon: FileText,
                    color: "from-blue-500 to-blue-600",
                    bgColor: "bg-blue-50 dark:bg-blue-900/20",
                    change: "+12%",
                    changeType: "increase",
                  },
                  {
                    label: "Total Galeri",
                    value: dashboardStats.totalGallery.toString(),
                    icon: Image,
                    color: "from-purple-500 to-purple-600",
                    bgColor: "bg-purple-50 dark:bg-purple-900/20",
                    change: "+8%",
                    changeType: "increase",
                  },
                  {
                    label: "Total Layanan",
                    value: dashboardStats.totalServices.toString(),
                    icon: Settings,
                    color: "from-green-500 to-green-600",
                    bgColor: "bg-green-50 dark:bg-green-900/20",
                    change: "+3%",
                    changeType: "increase",
                  },
                  {
                    label: "Total Lowongan",
                    value: dashboardStats.totalJobs.toString(),
                    icon: Briefcase,
                    color: "from-orange-500 to-orange-600",
                    bgColor: "bg-orange-50 dark:bg-orange-900/20",
                    change: "+15%",
                    changeType: "increase",
                  },
                ].map((stat, idx) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-200 group"
                    >
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">
                          {stat.label}
                        </p>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Charts and Activity Section */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Aktivitas Terbaru
                    </h3>
                    <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                      Lihat Semua
                    </button>
                  </div>
                  <div className="space-y-4">
                    {dashboardStats.recentActivities.length > 0 ? (
                      dashboardStats.recentActivities.map((activity, idx) => (
                        <div
                          key={activity.id}
                          className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              activity.type === "news"
                                ? "bg-blue-100 dark:bg-blue-900/30"
                                : "bg-purple-100 dark:bg-purple-900/30"
                            }`}
                          >
                            {activity.type === "news" ? (
                              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            ) : (
                              <Image className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-slate-900 dark:text-white font-medium">
                              {activity.type === "news"
                                ? `Berita baru: "${activity.title}"`
                                : `Galeri baru: "${activity.title}"`}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              2 jam yang lalu
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                          <BarChart3 className="w-8 h-8 text-slate-400" />
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">
                          Belum ada aktivitas terbaru
                        </p>
                        <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
                          Aktivitas akan muncul di sini setelah Anda menambahkan
                          konten
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    Aksi Cepat
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        label: "Tambah Berita",
                        icon: FileText,
                        tab: "news",
                        color: "text-blue-600",
                      },
                      {
                        label: "Upload Galeri",
                        icon: Image,
                        tab: "gallery",
                        color: "text-purple-600",
                      },
                      {
                        label: "Posting Lowongan",
                        icon: Briefcase,
                        tab: "jobs",
                        color: "text-orange-600",
                      },
                      {
                        label: "Tambah Mitra",
                        icon: Handshake,
                        tab: "partners",
                        color: "text-teal-600",
                      },
                    ].map((action, idx) => {
                      const IconComponent = action.icon;
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveTab(action.tab as any)}
                          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-left group"
                        >
                          <IconComponent
                            className={`w-5 h-5 ${action.color} group-hover:scale-110 transition-transform`}
                          />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">
                            {action.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* News Tab */}
          {activeTab === "news" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Daftar Berita
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Kelola artikel dan berita perusahaan
                  </p>
                </div>
                <button
                  onClick={() => openNewsModal()}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" /> Tambah Berita
                </button>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <span className="ml-3 text-slate-600 dark:text-slate-400">
                    Memuat data...
                  </span>
                </div>
              ) : (
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-600">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">
                            Judul
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">
                            Tanggal
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">
                            Kategori
                          </th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900 dark:text-white">
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                        {newsList.map((news) => (
                          <tr
                            key={news.id}
                            className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                          >
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                  <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <p className="font-medium text-slate-900 dark:text-white line-clamp-1">
                                    {news.title}
                                  </p>
                                  <p className="text-sm text-slate-500 dark:text-slate-400">
                                    {news.author}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                              {news.date}
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                                {news.category}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-center gap-2">
                                <button
                                  onClick={() => openNewsModal(news)}
                                  className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                                  title="Edit berita"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteNews(news.id)}
                                  className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                  title="Hapus berita"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {newsList.length === 0 && (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-8 h-8 text-slate-400" />
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 font-medium">
                        Belum ada berita
                      </p>
                      <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
                        Klik tombol "Tambah Berita" untuk membuat berita pertama
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === "gallery" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Galeri Media
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Kelola foto dan media galeri perusahaan
                  </p>
                </div>
                <button
                  onClick={() => openGalleryModal()}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" /> Tambah Galeri
                </button>
              </div>

              {galleryLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                  <span className="ml-3 text-slate-600 dark:text-slate-400">
                    Memuat galeri...
                  </span>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {galleryList.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 group"
                    >
                      <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center overflow-hidden relative">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center text-slate-400">
                            <Image className="w-12 h-12 mb-2" />
                            <span className="text-sm">No Image</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200"></div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 line-clamp-1">
                          {item.title}
                        </h3>
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                            {item.category}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {item.date}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => openGalleryModal(item)}
                            className="flex-1 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-2 px-3 rounded-lg transition-colors font-medium text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteGallery(item.id)}
                            className="flex-1 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 py-2 px-3 rounded-lg transition-colors font-medium text-sm"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {galleryList.length === 0 && (
                    <div className="col-span-full text-center py-12">
                      <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Image className="w-8 h-8 text-slate-400" />
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 font-medium">
                        Belum ada item galeri
                      </p>
                      <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
                        Klik tombol "Tambah Galeri" untuk mengunggah foto
                        pertama
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Services Tab */}
          {activeTab === "services" && (
            <div className="space-y-6">
              <button
                onClick={() => openServicesModal()}
                className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" /> Tambah Layanan
              </button>

              {servicesLoading ? (
                <div className="text-center py-8">Loading services...</div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {servicesList.map((service) => (
                    <div
                      key={service.id}
                      className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700"
                    >
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => openServicesModal(service)}
                          className="flex-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 py-2 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteService(service.id)}
                          className="flex-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 py-2 rounded hover:bg-red-200 dark:hover:bg-red-800 transition-colors font-medium"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Jobs Tab */}
          {activeTab === "jobs" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Lowongan Kerja
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Kelola lowongan pekerjaan dan karir
                  </p>
                </div>
                <button
                  onClick={() => openJobsModal()}
                  className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" /> Tambah Lowongan Kerja
                </button>
              </div>

              {jobsLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
                  <span className="ml-3 text-slate-600 dark:text-slate-400">
                    Memuat lowongan...
                  </span>
                </div>
              ) : (
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-600">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">
                            Posisi
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">
                            Lokasi
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">
                            Negara
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">
                            Gaji
                          </th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900 dark:text-white">
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                        {jobsList.map((job: Job) => (
                          <tr
                            key={job.id}
                            className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                          >
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                                  <Briefcase className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <p className="font-medium text-slate-900 dark:text-white">
                                      {job.title}
                                    </p>
                                    {job.featured && (
                                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-sm text-slate-500 dark:text-slate-400">
                                    {job.type}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                              {job.location}
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 capitalize">
                                {job.country}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">
                              {job.salary}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-center gap-2">
                                <button
                                  onClick={() => openJobsModal(job)}
                                  className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                                  title="Edit lowongan"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteJob(job.id)}
                                  className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                  title="Hapus lowongan"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {jobsList.length === 0 && (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Briefcase className="w-8 h-8 text-slate-400" />
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 font-medium">
                        Belum ada lowongan kerja
                      </p>
                      <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
                        Klik tombol "Tambah Lowongan Kerja" untuk membuat
                        lowongan pertama
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Partners Tab */}
          {activeTab === "partners" && (
            <div className="space-y-6">
              <button
                onClick={() => openPartnersModal()}
                className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" /> Tambah Mitra
              </button>

              {partnersLoading ? (
                <div className="text-center py-8">Loading partners...</div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {partnersList.map((partner) => (
                    <div
                      key={partner.id}
                      className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700"
                    >
                      <div className="flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4">
                        {partner.logo ? (
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-2xl">🏢</span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                        {partner.description}
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => openPartnersModal(partner)}
                          className="flex-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 py-2 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeletePartner(partner.id)}
                          className="flex-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 py-2 rounded hover:bg-red-200 dark:hover:bg-red-800 transition-colors font-medium"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Testimonials Tab */}
          {activeTab === "testimonials" && (
            <div className="space-y-6">
              <button
                onClick={() => openTestimonialsModal()}
                className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" /> Tambah Testimonial
              </button>

              {testimonialsLoading ? (
                <div className="text-center py-8">Loading testimonials...</div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testimonialsList.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          {testimonial.image ? (
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-500">
                              👤
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.position} • {testimonial.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                        "{testimonial.content}"
                      </p>

                      <div className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                        {testimonial.contractDuration} • {testimonial.shipType}
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => openTestimonialsModal(testimonial)}
                          className="flex-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 py-2 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            handleDeleteTestimonial(testimonial.id)
                          }
                          className="flex-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 py-2 rounded hover:bg-red-200 dark:hover:bg-red-800 transition-colors font-medium"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="max-w-4xl space-y-6">
              {companyLoading ? (
                <div className="text-center py-8">Loading company data...</div>
              ) : (
                <>
                  {/* Basic Information */}
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
                    <h3 className="text-lg font-bold text-foreground mb-6">
                      Informasi Dasar Perusahaan
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nama Perusahaan
                        </label>
                        <input
                          type="text"
                          value={companyForm.name}
                          onChange={(e) =>
                            setCompanyForm({
                              ...companyForm,
                              name: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={companyForm.email}
                          onChange={(e) =>
                            setCompanyForm({
                              ...companyForm,
                              email: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Telepon
                        </label>
                        <input
                          type="text"
                          value={companyForm.phone}
                          onChange={(e) =>
                            setCompanyForm({
                              ...companyForm,
                              phone: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Website
                        </label>
                        <input
                          type="url"
                          value={companyForm.website}
                          onChange={(e) =>
                            setCompanyForm({
                              ...companyForm,
                              website: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Tahun Berdiri
                        </label>
                        <input
                          type="number"
                          value={companyForm.founded}
                          onChange={(e) =>
                            setCompanyForm({
                              ...companyForm,
                              founded: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Jumlah Karyawan
                        </label>
                        <input
                          type="number"
                          value={companyForm.employees}
                          onChange={(e) =>
                            setCompanyForm({
                              ...companyForm,
                              employees: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Alamat Lengkap
                      </label>
                      <textarea
                        rows={3}
                        value={companyForm.address}
                        onChange={(e) =>
                          setCompanyForm({
                            ...companyForm,
                            address: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                      />
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Deskripsi Perusahaan
                      </label>
                      <textarea
                        rows={4}
                        value={companyForm.description}
                        onChange={(e) =>
                          setCompanyForm({
                            ...companyForm,
                            description: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                      />
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Logo Perusahaan
                      </label>
                      <div className="space-y-4">
                        <FileUpload
                          onUpload={(url) =>
                            setCompanyForm({ ...companyForm, logo: url })
                          }
                          currentImage={companyForm.logo}
                          className="mb-4"
                        />
                        <div>
                          <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                            Atau masukkan URL logo
                          </label>
                          <input
                            type="url"
                            value={companyForm.logo}
                            onChange={(e) =>
                              setCompanyForm({
                                ...companyForm,
                                logo: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                            placeholder="https://example.com/logo.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vision & Mission */}
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
                    <h3 className="text-lg font-bold text-foreground mb-6">
                      Visi & Misi
                    </h3>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Visi Perusahaan
                      </label>
                      <textarea
                        rows={3}
                        value={companyForm.vision}
                        onChange={(e) =>
                          setCompanyForm({
                            ...companyForm,
                            vision: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                        placeholder="Masukkan visi perusahaan"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Misi Perusahaan (satu per baris)
                      </label>
                      <textarea
                        rows={6}
                        value={companyForm.mission.join("\n")}
                        onChange={(e) =>
                          setCompanyForm({
                            ...companyForm,
                            mission: e.target.value
                              .split("\n")
                              .filter((m) => m.trim()),
                          })
                        }
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                        placeholder="Misi 1&#10;Misi 2&#10;Misi 3"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleUpdateCompany}
                      className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                    >
                      Simpan Perubahan
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="max-w-2xl space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Pengaturan Umum
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Mode Gelap</span>
                    <input type="checkbox" className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Izinkan Komentar</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Notifikasi Email</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Keamanan
                </h3>
                <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                  Ubah Password
                </button>
              </div>

              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Simpan Pengaturan
              </button>
            </div>
          )}
        </div>
      </div>

      {/* News Modal */}
      {showNewsModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 max-w-2xl w-full max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {editingNews ? "Edit Berita" : "Tambah Berita Baru"}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {editingNews
                      ? "Perbarui informasi berita"
                      : "Buat artikel berita baru"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowNewsModal(false)}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Judul Berita
                  </label>
                  <input
                    type="text"
                    value={newsForm.title}
                    onChange={(e) =>
                      setNewsForm({ ...newsForm, title: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Masukkan judul berita yang menarik"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Deskripsi
                  </label>
                  <textarea
                    rows={4}
                    value={newsForm.description}
                    onChange={(e) =>
                      setNewsForm({ ...newsForm, description: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all duration-200"
                    placeholder="Tulis deskripsi berita yang informatif"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Penulis
                    </label>
                    <input
                      type="text"
                      value={newsForm.author}
                      onChange={(e) =>
                        setNewsForm({ ...newsForm, author: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Nama penulis"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Tanggal Publikasi
                    </label>
                    <input
                      type="date"
                      value={newsForm.date}
                      onChange={(e) =>
                        setNewsForm({ ...newsForm, date: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Kategori
                    </label>
                    <select
                      value={newsForm.category}
                      onChange={(e) =>
                        setNewsForm({ ...newsForm, category: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                    >
                      <option value="">Pilih kategori</option>
                      <option value="Berita">Berita</option>
                      <option value="Tips & Panduan">Tips & Panduan</option>
                      <option value="Pelatihan">Pelatihan</option>
                      <option value="Peluang Karir">Peluang Karir</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Slug URL
                    </label>
                    <input
                      type="text"
                      value={newsForm.slug}
                      onChange={(e) =>
                        setNewsForm({ ...newsForm, slug: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="url-friendly-slug"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Gambar Berita
                  </label>
                  <div className="space-y-4">
                    <FileUpload
                      onUpload={(url) =>
                        setNewsForm({ ...newsForm, image: url })
                      }
                      currentImage={newsForm.image}
                      className="mb-4"
                    />
                    <div>
                      <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                        Atau masukkan URL gambar
                      </label>
                      <input
                        type="url"
                        value={newsForm.image}
                        onChange={(e) =>
                          setNewsForm({ ...newsForm, image: e.target.value })
                        }
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Tag (pisahkan dengan koma)
                  </label>
                  <input
                    type="text"
                    value={newsForm.tags.join(", ")}
                    onChange={(e) =>
                      setNewsForm({
                        ...newsForm,
                        tags: e.target.value
                          .split(",")
                          .map((tag) => tag.trim())
                          .filter((tag) => tag),
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="tag1, tag2, tag3"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 p-6 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 flex-shrink-0">
              <button
                onClick={() => setShowNewsModal(false)}
                className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors font-medium"
              >
                Batal
              </button>
              <button
                onClick={editingNews ? handleUpdateNews : handleCreateNews}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                {editingNews ? "Update Berita" : "Simpan Berita"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Modal */}
      {showGalleryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-foreground">
                {editingGallery ? "Edit Galeri" : "Tambah Galeri Baru"}
              </h3>
              <button
                onClick={() => setShowGalleryModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Judul
                </label>
                <input
                  type="text"
                  value={galleryForm.title}
                  onChange={(e) =>
                    setGalleryForm({ ...galleryForm, title: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Masukkan judul galeri"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Deskripsi
                </label>
                <textarea
                  rows={3}
                  value={galleryForm.description}
                  onChange={(e) =>
                    setGalleryForm({
                      ...galleryForm,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                  placeholder="Masukkan deskripsi galeri"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Kategori
                  </label>
                  <select
                    value={galleryForm.category}
                    onChange={(e) =>
                      setGalleryForm({
                        ...galleryForm,
                        category: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option value="">Pilih kategori</option>
                    <option value="Pelatihan">Pelatihan</option>
                    <option value="Penempatan">Penempatan</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Sertifikasi">Sertifikasi</option>
                    <option value="Event">Event</option>
                    <option value="Fasilitas">Fasilitas</option>
                    <option value="Mentoring">Mentoring</option>
                    <option value="Study Tour">Study Tour</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Tanggal
                  </label>
                  <input
                    type="date"
                    value={galleryForm.date}
                    onChange={(e) =>
                      setGalleryForm({ ...galleryForm, date: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Gambar Galeri
                </label>
                <div className="space-y-4">
                  <FileUpload
                    onUpload={(url) =>
                      setGalleryForm({ ...galleryForm, image: url })
                    }
                    currentImage={galleryForm.image}
                    className="mb-4"
                  />
                  <div>
                    <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                      Atau masukkan URL gambar
                    </label>
                    <input
                      type="url"
                      value={galleryForm.image}
                      onChange={(e) =>
                        setGalleryForm({
                          ...galleryForm,
                          image: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Alt Text
                </label>
                <input
                  type="text"
                  value={galleryForm.alt}
                  onChange={(e) =>
                    setGalleryForm({ ...galleryForm, alt: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Deskripsi gambar untuk accessibility"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setShowGalleryModal(false)}
                className="px-6 py-2 rounded-lg border border-gray-300 dark:border-slate-600 text-foreground hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={
                  editingGallery ? handleUpdateGallery : handleCreateGallery
                }
                className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                {editingGallery ? "Update" : "Simpan"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Services Modal */}
      {showServicesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-foreground">
                {editingService ? "Edit Layanan" : "Tambah Layanan Baru"}
              </h3>
              <button
                onClick={() => setShowServicesModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Judul Layanan
                </label>
                <input
                  type="text"
                  value={servicesForm.title}
                  onChange={(e) =>
                    setServicesForm({ ...servicesForm, title: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Masukkan judul layanan"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Deskripsi
                </label>
                <textarea
                  rows={4}
                  value={servicesForm.description}
                  onChange={(e) =>
                    setServicesForm({
                      ...servicesForm,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                  placeholder="Masukkan deskripsi layanan"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Icon (emoji atau nama icon)
                </label>
                <input
                  type="text"
                  value={servicesForm.icon}
                  onChange={(e) =>
                    setServicesForm({ ...servicesForm, icon: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Users, Ship, Globe, dll."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Fitur (satu per baris)
                </label>
                <textarea
                  rows={6}
                  value={servicesForm.features.join("\n")}
                  onChange={(e) =>
                    setServicesForm({
                      ...servicesForm,
                      features: e.target.value
                        .split("\n")
                        .filter((f) => f.trim()),
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                  placeholder="Fitur 1&#10;Fitur 2&#10;Fitur 3"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setShowServicesModal(false)}
                className="px-6 py-2 rounded-lg border border-gray-300 dark:border-slate-600 text-foreground hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={
                  editingService ? handleUpdateService : handleCreateService
                }
                className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                {editingService ? "Update" : "Simpan"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Jobs Modal */}
      {showJobsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-foreground">
                {editingJob
                  ? "Edit Lowongan Kerja"
                  : "Tambah Lowongan Kerja Baru"}
              </h3>
              <button
                onClick={() => setShowJobsModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Posisi
                  </label>
                  <input
                    type="text"
                    value={jobsForm.title}
                    onChange={(e) =>
                      setJobsForm({ ...jobsForm, title: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Masukkan posisi pekerjaan"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Lokasi
                  </label>
                  <input
                    type="text"
                    value={jobsForm.location}
                    onChange={(e) =>
                      setJobsForm({ ...jobsForm, location: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Internasional"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Tipe Pekerjaan
                  </label>
                  <select
                    value={jobsForm.type}
                    onChange={(e) =>
                      setJobsForm({ ...jobsForm, type: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option value="">Pilih tipe</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Negara
                  </label>
                  <select
                    value={jobsForm.country}
                    onChange={(e) =>
                      setJobsForm({ ...jobsForm, country: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option value="">Pilih negara</option>
                    <option value="china">China</option>
                    <option value="taiwan">Taiwan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Gaji
                  </label>
                  <input
                    type="text"
                    value={jobsForm.salary}
                    onChange={(e) =>
                      setJobsForm({ ...jobsForm, salary: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Rp 10.000.000 - Rp 15.000.000/bulan"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Durasi Kontrak
                  </label>
                  <input
                    type="text"
                    value={jobsForm.duration}
                    onChange={(e) =>
                      setJobsForm({ ...jobsForm, duration: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                    placeholder="6-12 bulan"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={jobsForm.featured}
                    onChange={(e) =>
                      setJobsForm({ ...jobsForm, featured: e.target.checked })
                    }
                    className="w-4 h-4"
                  />
                  <label className="text-sm font-medium text-foreground">
                    Lowongan Unggulan
                  </label>
                </div>
              </div>

              {/* Requirements, Benefits, Qualifications */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Persyaratan (satu per baris)
                  </label>
                  <textarea
                    rows={4}
                    value={jobsForm.requirements.join("\n")}
                    onChange={(e) =>
                      setJobsForm({
                        ...jobsForm,
                        requirements: e.target.value
                          .split("\n")
                          .filter((r) => r.trim()),
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                    placeholder="Sertifikat STCW&#10;Pengalaman minimal 1 tahun&#10;Bahasa Inggris lancar"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Benefit (satu per baris)
                  </label>
                  <textarea
                    rows={4}
                    value={jobsForm.benefits.join("\n")}
                    onChange={(e) =>
                      setJobsForm({
                        ...jobsForm,
                        benefits: e.target.value
                          .split("\n")
                          .filter((b) => b.trim()),
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                    placeholder="Asuransi kesehatan&#10;Tunjangan keluarga&#10;Bonus performance"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Kualifikasi (satu per baris)
                  </label>
                  <textarea
                    rows={4}
                    value={jobsForm.qualifications.join("\n")}
                    onChange={(e) =>
                      setJobsForm({
                        ...jobsForm,
                        qualifications: e.target.value
                          .split("\n")
                          .filter((q) => q.trim()),
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                    placeholder="Bahasa Mandarin&#10;Pengalaman di kapal perikanan&#10;Sertifikat keselamatan"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setShowJobsModal(false)}
                className="px-6 py-2 rounded-lg border border-gray-300 dark:border-slate-600 text-foreground hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={editingJob ? handleUpdateJob : handleCreateJob}
                className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                {editingJob ? "Update" : "Simpan"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Partners Modal */}
      {showPartnersModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-foreground">
                {editingPartner ? "Edit Mitra" : "Tambah Mitra Baru"}
              </h3>
              <button
                onClick={() => setShowPartnersModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Nama Mitra
                </label>
                <input
                  type="text"
                  value={partnersForm.name}
                  onChange={(e) =>
                    setPartnersForm({ ...partnersForm, name: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Masukkan nama mitra"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Deskripsi
                </label>
                <textarea
                  rows={4}
                  value={partnersForm.description}
                  onChange={(e) =>
                    setPartnersForm({
                      ...partnersForm,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                  placeholder="Masukkan deskripsi mitra"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Logo Mitra
                </label>
                <div className="space-y-4">
                  <FileUpload
                    onUpload={(url) =>
                      setPartnersForm({ ...partnersForm, logo: url })
                    }
                    currentImage={partnersForm.logo}
                    className="mb-4"
                  />
                  <div>
                    <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                      Atau masukkan URL logo
                    </label>
                    <input
                      type="url"
                      value={partnersForm.logo}
                      onChange={(e) =>
                        setPartnersForm({
                          ...partnersForm,
                          logo: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                      placeholder="https://example.com/logo.png"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Website
                </label>
                <input
                  type="url"
                  value={partnersForm.website}
                  onChange={(e) =>
                    setPartnersForm({
                      ...partnersForm,
                      website: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                  placeholder="https://example.com"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setShowPartnersModal(false)}
                className="px-6 py-2 rounded-lg border border-gray-300 dark:border-slate-600 text-foreground hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={
                  editingPartner ? handleUpdatePartner : handleCreatePartner
                }
                className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                {editingPartner ? "Update" : "Simpan"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Modal */}
      {showTestimonialsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-foreground">
                {editingTestimonial
                  ? "Edit Testimonial"
                  : "Tambah Testimonial Baru"}
              </h3>
              <button
                onClick={() => setShowTestimonialsModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Nama
                  </label>
                  <input
                    type="text"
                    value={testimonialsForm.name}
                    onChange={(e) =>
                      setTestimonialsForm({
                        ...testimonialsForm,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Nama lengkap"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Posisi
                  </label>
                  <input
                    type="text"
                    value={testimonialsForm.position}
                    onChange={(e) =>
                      setTestimonialsForm({
                        ...testimonialsForm,
                        position: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Chief Officer, Able Seaman, dll."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Perusahaan
                  </label>
                  <input
                    type="text"
                    value={testimonialsForm.company}
                    onChange={(e) =>
                      setTestimonialsForm({
                        ...testimonialsForm,
                        company: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Maersk Line, COSCO, dll."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Rating
                  </label>
                  <select
                    value={testimonialsForm.rating}
                    onChange={(e) =>
                      setTestimonialsForm({
                        ...testimonialsForm,
                        rating: parseInt(e.target.value),
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
                    <option value={4}>⭐⭐⭐⭐ (4)</option>
                    <option value={3}>⭐⭐⭐ (3)</option>
                    <option value={2}>⭐⭐ (2)</option>
                    <option value={1}>⭐ (1)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Foto Profil
                </label>
                <div className="space-y-4">
                  <FileUpload
                    onUpload={(url) =>
                      setTestimonialsForm({ ...testimonialsForm, image: url })
                    }
                    currentImage={testimonialsForm.image}
                    className="mb-4"
                  />
                  <div>
                    <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                      Atau masukkan URL foto
                    </label>
                    <input
                      type="url"
                      value={testimonialsForm.image}
                      onChange={(e) =>
                        setTestimonialsForm({
                          ...testimonialsForm,
                          image: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                      placeholder="https://example.com/photo.jpg"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Testimonial
                </label>
                <textarea
                  rows={4}
                  value={testimonialsForm.content}
                  onChange={(e) =>
                    setTestimonialsForm({
                      ...testimonialsForm,
                      content: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                  placeholder="Isi testimonial..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Durasi Kontrak
                  </label>
                  <input
                    type="text"
                    value={testimonialsForm.contractDuration}
                    onChange={(e) =>
                      setTestimonialsForm({
                        ...testimonialsForm,
                        contractDuration: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                    placeholder="24 bulan"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Tipe Kapal
                  </label>
                  <input
                    type="text"
                    value={testimonialsForm.shipType}
                    onChange={(e) =>
                      setTestimonialsForm({
                        ...testimonialsForm,
                        shipType: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Container Ship, Bulk Carrier, dll."
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setShowTestimonialsModal(false)}
                className="px-6 py-2 rounded-lg border border-gray-300 dark:border-slate-600 text-foreground hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={
                  editingTestimonial
                    ? handleUpdateTestimonial
                    : handleCreateTestimonial
                }
                className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                {editingTestimonial ? "Update" : "Simpan"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
