import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin CMS - PT. Duta Samudera Bahari",
  description: "Panel administrasi untuk mengelola konten website",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 dark:bg-slate-900 min-h-screen">{children}</div>
  );
}
