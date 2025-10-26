import { Service } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { ArrowRight, Users, Ship, Globe } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  // Map icon names to Lucide components
  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-12 h-12" />,
    Ship: <Ship className="w-12 h-12" />,
    Globe: <Globe className="w-12 h-12" />,
  };

  return (
    <Card
      variant={featured ? "elevated" : "default"}
      className={`h-full overflow-hidden group ${
        featured ? "md:scale-105 shadow-2xl" : "hover:border-primary"
      }`}
    >
      {/* Icon Background */}
      <div className="h-40 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center relative overflow-hidden group-hover:from-blue-100 group-hover:to-blue-200 dark:group-hover:from-blue-800 dark:group-hover:to-blue-700 transition-all duration-300">
        {/* Decorative circles */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="absolute w-32 h-32 bg-blue-200 rounded-full group-hover:scale-125 transition-transform duration-300" />
          <div className="absolute w-24 h-24 bg-blue-300 rounded-full group-hover:scale-125 transition-transform duration-300 animation-delay-200" />
        </div>

        {/* Icon */}
        <div className="relative text-primary dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
          {iconMap[service.icon] || <Globe className="w-12 h-12" />}
        </div>
      </div>

      {/* Content */}
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">
          {service.title}
        </CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Features List */}
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-primary dark:text-blue-400 font-bold">
                ✓
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-primary dark:text-blue-400 font-semibold hover:gap-3 transition-all mt-4 group/link"
        >
          Pelajari Lebih Lanjut
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  );
}
