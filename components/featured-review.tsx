import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "@/components/star-rating"
import { MapPin } from "lucide-react"

export function FeaturedReview() {
  return (
    <Card className="overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg border-transparent hover:border-teal-200 transition-all">
      <div className="grid md:grid-cols-2">
        <div className="relative h-64 md:h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=600&auto=format&fit=crop"
            alt="Featured review"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <Badge className="absolute top-4 left-4 flex items-center bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
            <MapPin className="h-4 w-4 mr-1" />
            Places
          </Badge>
          <Badge className="absolute top-4 right-4 bg-white/80 text-teal-800 backdrop-blur-sm">Resorts</Badge>
        </div>
        <CardContent className="p-6 md:p-8 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <StarRating rating={5} />
            <span className="text-sm font-medium text-teal-700">5.0</span>
          </div>
          <Link href="/reviews/featured">
            <h3 className="font-bold text-2xl mb-3 text-teal-900 hover:text-teal-700 transition-colors">
              Azure Waters Maldives Resort
            </h3>
          </Link>
          <p className="text-teal-700 mb-4 flex-grow">
            This stunning overwater resort exceeded all expectations. From the moment you arrive by seaplane, you're
            greeted with breathtaking turquoise waters and exceptional service. The private villas are spacious and
            beautifully designed with direct access to the crystal-clear lagoon. The marine life is abundant - we saw
            rays, reef sharks, and countless tropical fish right from our deck!
          </p>
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-teal-800">Island Explorer</span> • 3 days ago
            </div>
            <Link href="/reviews/featured">
              <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                Read More
              </Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
