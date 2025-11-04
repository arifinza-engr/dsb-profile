import { NewsPost } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { getOptimizedImageProps, IMAGE_SIZES } from "@/lib/image-utils";

interface NewsCardProps {
  post: NewsPost;
  featured?: boolean;
}

export function NewsCard({ post, featured = false }: NewsCardProps) {
  const formattedDate = format(new Date(post.date), "dd MMMM yyyy", {
    locale: id,
  });

  return (
    <Link href={`/news/${post.slug || post.id}`}>
      <Card
        variant={featured ? "elevated" : "default"}
        className={`h-full overflow-hidden group cursor-pointer ${
          featured ? "md:col-span-2 md:flex" : ""
        }`}
      >
        {/* Image Container */}
        <div
          className={`relative overflow-hidden bg-gray-200 dark:bg-gray-700 ${
            featured ? "md:w-1/2" : "h-48"
          }`}
        >
          <Image
            {...getOptimizedImageProps(post.image, post.title, {
              sizes: IMAGE_SIZES.news,
            })}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`flex flex-col flex-1 ${featured ? "md:w-1/2" : ""}`}>
          <CardHeader>
            <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </CardTitle>
            <CardDescription className="line-clamp-2 mt-2">
              {post.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col justify-between space-y-4">
            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              {post.readingTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime.text}</span>
                </div>
              )}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Read More */}
            <div className="flex items-center gap-2 text-primary dark:text-blue-400 font-semibold group-hover:gap-3 transition-all">
              Baca Selengkapnya
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}
