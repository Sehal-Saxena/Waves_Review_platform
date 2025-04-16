"use client"

import type React from "react"

import { Star } from "lucide-react"

interface StarRatingInputProps {
  rating: number
  setRating: (rating: number) => void
}

export function StarRatingInput({ rating, setRating }: StarRatingInputProps) {
  const handleStarClick = (value: number) => {
    setRating(value)
  }

  const handleStarHover = (e: React.MouseEvent<HTMLDivElement>, value: number) => {
    const stars = e.currentTarget.parentElement?.querySelectorAll(".star-input") as NodeListOf<HTMLDivElement>

    stars?.forEach((star, index) => {
      if (index < value) {
        star.classList.add("text-yellow-400", "fill-yellow-400")
        star.classList.remove("text-gray-300")
      } else {
        star.classList.remove("text-yellow-400", "fill-yellow-400")
        star.classList.add("text-gray-300")
      }
    })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const stars = e.currentTarget.querySelectorAll(".star-input") as NodeListOf<HTMLDivElement>

    stars?.forEach((star, index) => {
      if (index < rating) {
        star.classList.add("text-yellow-400", "fill-yellow-400")
        star.classList.remove("text-gray-300")
      } else {
        star.classList.remove("text-yellow-400", "fill-yellow-400")
        star.classList.add("text-gray-300")
      }
    })
  }

  return (
    <div className="flex items-center gap-2" onMouseLeave={handleMouseLeave}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((value) => (
          <div
            key={value}
            className={`star-input h-6 w-6 cursor-pointer ${
              value <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
            onClick={() => handleStarClick(value)}
            onMouseOver={(e) => handleStarHover(e, value)}
          >
            <Star />
          </div>
        ))}
      </div>
      <span className="text-sm text-cyan-700 font-medium">{rating > 0 ? rating : "Select rating"}</span>
    </div>
  )
}
