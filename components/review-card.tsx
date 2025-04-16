import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { StarRating } from "@/components/star-rating";
import { ShoppingBag, Briefcase, MapPin } from "lucide-react";

interface ReviewCardProps {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  rating: number;
  image: string;
  excerpt: string;
  author: string;
  date: string;
  delay?: number;
}

export function ReviewCard({
  id,
  title,
  category,
  subcategory,
  rating,
  image,
  excerpt,
  author,
  date,
  delay = 0,
}: ReviewCardProps) {
  const getCategoryIcon = () => {
    switch (category) {
      case "Products":
        return <ShoppingBag className="h-4 w-4 mr-1" />;
      case "Services":
        return <Briefcase className="h-4 w-4 mr-1" />;
      case "Places":
        return <MapPin className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case "Products":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "Services":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "Places":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200";
      default:
        return "bg-teal-100 text-teal-800 hover:bg-teal-200";
    }
  };

  const delayClass = delay ? `animate-delay-${delay * 100}` : "";

  return (
    <Card
      className={`overflow-hidden transition-all hover:shadow-lg group bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-800 animate-fade-in-up ${delayClass}`}
    >
      <Link href={`/reviews/${id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge
            className={`absolute top-3 left-3 flex items-center ${getCategoryColor()}`}
          >
            {getCategoryIcon()}
            {category}
          </Badge>
          {subcategory && (
            <Badge className="absolute top-3 right-3 bg-white/80 dark:bg-slate-800/80 text-teal-800 dark:text-teal-300 backdrop-blur-sm">
              {subcategory}
            </Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <StarRating rating={rating} />
          <span className="text-sm font-medium text-teal-700 dark:text-teal-400">
            {rating.toFixed(1)}
          </span>
        </div>
        <Link href={`/reviews/${id}`} className="block">
          <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100 hover:text-teal-700 dark:hover:text-teal-400 transition-colors line-clamp-1">
            {title}
          </h3>
        </Link>
        <p className="text-slate-700 dark:text-slate-300 text-sm line-clamp-3 mb-2">
          {excerpt}
        </p>
      </CardContent>
      <CardFooter className="px-5 py-3 border-t border-gray-100 dark:border-gray-800 text-xs text-muted-foreground flex justify-between">
        <span className="font-medium">{author}</span>
        <span>{date}</span>
      </CardFooter>
    </Card>
  );
}
