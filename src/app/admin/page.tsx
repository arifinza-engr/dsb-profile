"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Settings, Plus, Trash2, Edit, LogOut, Menu, X } from "lucide-react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "news" | "gallery" | "profile" | "settings"
  >("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Sample data
  const newsList = [
    {
      id: 1,
      title: "Selamat Datang di PT. Duta Samudera Bahari",
      date: "2024-01-20",
      status: "published",
    },
    {
      id: 2,
      title: "10 Tips Sukses Menghadapi Interview",
      date: "2024-01-18",
      status: "draft",
    },
    {
      id: 3,
      title: "Program Beasiswa 2024 Dibuka",
      date: "2024-01-15",
      status: "published",
    },
  ];

  const galleryList = [
    { id: 1, title: "Pelatihan STCW", category: "Pelatihan", count: 12 },
    { id: 2, title: "Penempatan ABK", category: "Penempatan", count: 8 },
    { id: 3, title: "Workshop Keselamatan", category: "Workshop", count: 15 },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Admin Panel
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Masukkan kredensial Anda untuk melanjutkan
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                placeholder="admin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                placeholder="••••••••"
              />
            </div>
            <button
              type="button"
              onClick={() => setIsAuthenticated(true)}
              className="w-full bg-primary text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 flex">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-gradient-to-b from-blue-900 to-blue-950 text-white transition-all duration-300 fixed md:relative h-screen overflow-y-auto z-40`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-blue-800 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-xl font-bold">Admin CMS</h1>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-white hover:bg-blue-800 p-2 rounded"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {[
            { id: "dashboard", label: "Dashboard", icon: "📊" },
            { id: "news", label: "Berita", icon: "📰" },
            { id: "gallery", label: "Galeri", icon: "🖼️" },
            { id: "profile", label: "Profil Perusahaan", icon: "🏢" },
            { id: "settings", label: "Pengaturan", icon: "⚙️" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id as any);
                if (window.innerWidth < 768) setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                activeTab === item.id
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-800 text-blue-100"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            {sidebarOpen && "Logout"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-6 sticky top-0 z-30">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-foreground">
              {activeTab === "dashboard" && "Dashboard"}
              {activeTab === "news" && "Kelola Berita"}
              {activeTab === "gallery" && "Kelola Galeri"}
              {activeTab === "profile" && "Profil Perusahaan"}
              {activeTab === "settings" && "Pengaturan"}
            </h2>
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: "Total Berita", value: "48", trend: "+5" },
                  { label: "Total Galeri", value: "156", trend: "+12" },
                  {
                    label: "Pengunjung Bulan Ini",
                    value: "2,451",
                    trend: "+23%",
                  },
                  { label: "Pengguna Terdaftar", value: "1,203", trend: "+45" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700"
                  >
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-foreground mt-2">
                      {stat.value}
                    </p>
                    <p className="text-green-600 text-sm mt-2">
                      {stat.trend} dibanding bulan lalu
                    </p>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Aktivitas Terbaru
                </h3>
                <div className="space-y-3">
                  {[
                    '📝 Berita baru dipublikasikan: "Program Beasiswa 2024"',
                    "🖼️ 15 foto baru ditambahkan ke galeri",
                    "👤 5 pengguna baru mendaftar",
                    "📧 20 pesan kontak baru diterima",
                  ].map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 py-2 border-b border-gray-200 dark:border-slate-700 last:border-0"
                    >
                      <span className="text-lg">{activity.split(" ")[0]}</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {activity.slice(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* News Tab */}
          {activeTab === "news" && (
            <div className="space-y-6">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus className="w-5 h-5" /> Tambah Berita
              </button>

              <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Judul
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Tanggal
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {newsList.map((news) => (
                      <tr
                        key={news.id}
                        className="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        <td className="px-6 py-3 text-foreground">
                          {news.title}
                        </td>
                        <td className="px-6 py-3 text-gray-600 dark:text-gray-400">
                          {news.date}
                        </td>
                        <td className="px-6 py-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              news.status === "published"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            }`}
                          >
                            {news.status === "published"
                              ? "Dipublikasikan"
                              : "Draft"}
                          </span>
                        </td>
                        <td className="px-6 py-3 flex gap-2">
                          <button className="text-blue-600 hover:text-blue-700">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === "gallery" && (
            <div className="space-y-6">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus className="w-5 h-5" /> Tambah Album
              </button>

              <div className="grid md:grid-cols-3 gap-6">
                {galleryList.map((album) => (
                  <div
                    key={album.id}
                    className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700"
                  >
                    <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-4xl">🖼️</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {album.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {album.category} • {album.count} Foto
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 py-2 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors font-medium">
                        Edit
                      </button>
                      <button className="flex-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 py-2 rounded hover:bg-red-200 dark:hover:bg-red-800 transition-colors font-medium">
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="max-w-2xl">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    defaultValue="PT. Duta Samudera Bahari"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Deskripsi Singkat
                  </label>
                  <textarea
                    rows={4}
                    defaultValue="Pemberangkatan ABK profesional dengan standar internasional..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Alamat
                  </label>
                  <input
                    type="text"
                    defaultValue="Jl. Pelabuhan No. 123, Jakarta 14120"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>

                <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                  Simpan Perubahan
                </button>
              </div>
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
    </div>
  );
}
