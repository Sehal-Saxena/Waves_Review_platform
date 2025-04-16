"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, MessageSquare, ThumbsUp, Share2, Flag } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { StarRating } from "@/components/star-rating"
import { WaveLogo } from "@/components/wave-logo"
import { VideoBackground } from "@/components/video-background"

export default function ReviewDetailPage({ params }: { params: { id: string } }) {
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([
    {
      id: "1",
      author: "Ocean Lover",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "I completely agree with this review! Had a similar experience last month.",
      date: "3 days ago",
      likes: 5,
    },
    {
      id: "2",
      author: "Coastal Explorer",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Thanks for the detailed review. I was considering trying this place out, and now I definitely will!",
      date: "1 day ago",
      likes: 2,
    },
  ])

  // Mock review data - in a real app, this would be fetched from an API
  const review = {
    id: params.id,
    title: "Amazing Coastal Restaurant",
    category: "Dining",
    rating: 4.5,
    author: "Marina Waters",
    authorAvatar: "/placeholder.svg?height=50&width=50",
    date: "April 10, 2023",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
    content: `
      <p>I recently had the pleasure of dining at this coastal gem, and I must say it exceeded all my expectations. Located right on the waterfront, the restaurant offers breathtaking views of the ocean that immediately set the mood for a memorable dining experience.</p>
      
      <p>The seafood was incredibly fresh and flavorful. I started with the oysters, which were some of the best I've ever had - plump, juicy, and perfectly briny. For my main course, I opted for the grilled sea bass with lemon herb butter. The fish was cooked to perfection, flaky and moist with a beautiful char on the outside.</p>
      
      <p>What really sets this place apart is their commitment to sustainability. The staff was knowledgeable about where each seafood item was sourced from, and they pride themselves on working with local fishermen who use responsible fishing practices.</p>
      
      <p>The service was attentive without being intrusive, and the ambiance was relaxed yet sophisticated. While it's not the cheapest dining option in the area, the quality of the food and the overall experience make it well worth the price.</p>
      
      <p>Whether you're a local or just visiting the area, I highly recommend making a reservation at this restaurant for a truly special dining experience. Just make sure to request a table by the window to fully appreciate those stunning ocean views!</p>
    `,
    pros: ["Incredibly fresh seafood", "Stunning ocean views", "Knowledgeable staff", "Sustainable sourcing"],
    cons: ["Somewhat pricey", "Reservations needed well in advance for weekend dining"],
    helpfulCount: 24,
    photos: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=300&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=300&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=300&auto=format&fit=crop",
    ],
  }

  const handleSubmitComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: `${comments.length + 1}`,
        author: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        content: comment,
        date: "Just now",
        likes: 0,
      }
      setComments([newComment, ...comments])
      setComment("")
    }
  }

  return (
    <div className="min-h-screen">
      <VideoBackground />
      <header className="bg-blue-900/80 text-white backdrop-blur-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <WaveLogo size={36} className="text-blue-300" />
                <h1 className="text-2xl font-bold">WaveReviews</h1>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/submit">
                <Button className="bg-blue-500 hover:bg-blue-400 text-white">Write a Review</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/reviews" className="flex items-center text-blue-300 hover:text-blue-100">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Reviews
          </Link>
        </div>

        <article className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <Badge className="mb-2 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">{review.category}</Badge>
                <h1 className="text-2xl md:text-3xl font-bold text-cyan-900">{review.title}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <StarRating rating={review.rating} />
                  <span className="text-cyan-700 font-medium">{review.rating}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-cyan-600 border-cyan-200">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="text-cyan-600 border-cyan-200">
                  <Flag className="h-4 w-4 mr-2" />
                  Report
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Avatar>
                <AvatarImage src={review.authorAvatar || "/placeholder.svg"} alt={review.author} />
                <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{review.author}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </div>

            <div className="mb-8">
              <img
                src={review.image || "/placeholder.svg"}
                alt={review.title}
                className="w-full h-auto rounded-lg mb-6 object-cover"
              />
              <div className="prose max-w-none text-cyan-800" dangerouslySetInnerHTML={{ __html: review.content }} />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h3 className="font-semibold text-cyan-900 mb-2 flex items-center">
                  <ThumbsUp className="h-4 w-4 mr-2 text-cyan-600" />
                  Pros
                </h3>
                <ul className="space-y-2">
                  {review.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h3 className="font-semibold text-cyan-900 mb-2 flex items-center">
                  <ThumbsUp className="h-4 w-4 mr-2 text-cyan-600 rotate-180" />
                  Cons
                </h3>
                <ul className="space-y-2">
                  {review.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-cyan-900 mb-4">Photos</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {review.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo || "/placeholder.svg"}
                    alt={`Photo ${index + 1}`}
                    className="rounded-lg object-cover w-full h-32"
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button variant="outline" className="text-cyan-600 border-cyan-200">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Helpful ({review.helpfulCount})
              </Button>
              <div className="text-sm text-muted-foreground">Reviewed on {review.date}</div>
            </div>
          </div>
        </article>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-bold text-cyan-900 mb-6 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-cyan-600" />
              Comments ({comments.length})
            </h2>

            <div className="mb-6">
              <Textarea
                placeholder="Add your comment..."
                className="mb-3 border-cyan-200 focus-visible:ring-cyan-500"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button className="bg-cyan-600 hover:bg-cyan-500" onClick={handleSubmitComment}>
                Post Comment
              </Button>
            </div>

            <Separator className="my-6" />

            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-4">
                  <Avatar>
                    <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.author} />
                    <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium">{comment.author}</h4>
                      <span className="text-xs text-muted-foreground">{comment.date}</span>
                    </div>
                    <p className="text-cyan-800 mb-2">{comment.content}</p>
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground">
                        <ThumbsUp className="h-3.5 w-3.5 mr-1" />
                        {comment.likes > 0 ? comment.likes : "Like"}
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground">
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-900/80 text-blue-100 py-12 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <WaveLogo size={32} className="text-blue-300" />
                <h3 className="text-xl font-bold text-white">WaveReviews</h3>
              </div>
              <p className="mb-4">
                Discover and share authentic experiences about products, services, and places that matter to you.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="hover:text-white">
                    Browse Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/submit" className="hover:text-white">
                    Write a Review
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-blue-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-blue-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
              <p className="text-sm">© {new Date().getFullYear()} WaveReviews. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
