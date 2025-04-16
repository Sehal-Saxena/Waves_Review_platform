import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
}

export function StarRating({ rating }: StarRatingProps) {
  // Create an array of 5 stars
  const stars = Array.from({ length: 5 }, (_, i) => {
    const starValue = i + 1;
    const filled = rating >= starValue;
    const halfFilled = !filled && rating > i && rating < starValue;

    return (
      <Star
        key={i}
        size={18}
        strokeWidth={1.5}
        className={`${
          filled
            ? "text-yellow-400 fill-yellow-400"
            : halfFilled
            ? "text-yellow-400 fill-yellow-400 half-star"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    );
  });

  return <div className="flex space-x-0.5">{stars}</div>;
}
