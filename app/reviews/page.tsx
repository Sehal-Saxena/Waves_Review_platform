"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Search, Filter, ArrowLeft, ShoppingBag, Briefcase, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ReviewCard } from "@/components/review-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VideoBackground } from "@/components/video-background"
import { WaveLogo } from "@/components/wave-logo"

export default function ReviewsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [searchQuery, setSearchQuery] = useState("")
  const [ratingFilter, setRatingFilter] = useState([0])
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [subcategoryFilter, setSubcategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("recent")
  const [activeTab, setActiveTab] = useState("all")

  // Set initial category filter based on URL parameter
  useEffect(() => {
    if (categoryParam) {
      const category = categoryParam.toLowerCase()
      setCategoryFilter(category)
      setActiveTab(category)
    }
  }, [categoryParam])

  // Mock data for reviews
  const reviews = [
    // Products
    {
      id: "1",
      title: "Sony WH-1000XM5 Headphones",
      category: "Products",
      subcategory: "Electronics",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=500&auto=format&fit=crop",
      excerpt: "Incredible noise cancellation and sound quality, perfect for both travel and everyday use...",
      author: "Audio Enthusiast",
      date: "2 days ago",
    },
    {
      id: "2",
      title: "Dyson V15 Detect Vacuum",
      category: "Products",
      subcategory: "Home Appliances",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=500&auto=format&fit=crop",
      excerpt: "Revolutionary cleaning technology with powerful suction and laser dust detection...",
      author: "Clean Home",
      date: "1 week ago",
    },
    {
      id: "3",
      title: "La Mer Moisturizing Cream",
      category: "Products",
      subcategory: "Beauty",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=500&auto=format&fit=crop",
      excerpt: "Luxurious moisturizer that transformed my skin, though the price point is quite high...",
      author: "Beauty Guru",
      date: "2 weeks ago",
    },
    // Services
    {
      id: "4",
      title: "Oceanside Massage Therapy",
      category: "Services",
      subcategory: "Wellness",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=500&auto=format&fit=crop",
      excerpt: "The most relaxing experience I've had in years. The therapist was skilled and attentive...",
      author: "Wellness Seeker",
      date: "3 days ago",
    },
    {
      id: "5",
      title: "Blue Wave Plumbing Services",
      category: "Services",
      subcategory: "Home Services",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=500&auto=format&fit=crop",
      excerpt: "Prompt, professional, and reasonably priced. Fixed our leak without any hassle...",
      author: "Homeowner",
      date: "1 week ago",
    },
    {
      id: "6",
      title: "Coastal Cuisine Catering",
      category: "Services",
      subcategory: "Food",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=500&auto=format&fit=crop",
      excerpt: "Made our event special with delicious seafood and impeccable service...",
      author: "Event Host",
      date: "2 weeks ago",
    },
    // Places
    {
      id: "7",
      title: "Coral Bay Beach Resort",
      category: "Places",
      subcategory: "Hotels",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=500&auto=format&fit=crop",
      excerpt: "Stunning beachfront property with excellent amenities and friendly staff...",
      author: "Travel Explorer",
      date: "4 days ago",
    },
    {
      id: "8",
      title: "Azure Waters Maldives Resort",
      category: "Places",
      subcategory: "Resorts",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=500&auto=format&fit=crop",
      excerpt: "Paradise on Earth with overwater bungalows and incredible marine life...",
      author: "Island Explorer",
      date: "1 week ago",
    },
    {
      id: "9",
      title: "Seaside Cliff Hiking Trail",
      category: "Places",
      subcategory: "Outdoors",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=500&auto=format&fit=crop",
      excerpt: "Breathtaking views along a well-maintained coastal trail. Perfect for all skill levels...",
      author: "Nature Lover",
      date: "2 weeks ago",
    },
  ]

  // Get unique subcategories based on selected category
  const getSubcategories = () => {
    let filteredReviews = reviews
    if (categoryFilter !== "all") {
      filteredReviews = reviews.filter((review) => review.category.toLowerCase() === categoryFilter)
    }

    const subcategories = new Set(filteredReviews.map((review) => review.subcategory))
    return ["all", ...Array.from(subcategories)].filter(Boolean)
  }

  // Filter reviews based on search, category, subcategory, and rating
  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || review.category.toLowerCase() === categoryFilter

    const matchesSubcategory = subcategoryFilter === "all" || review.subcategory === subcategoryFilter

    const matchesRating = review.rating >= ratingFilter[0]

    return matchesSearch && matchesCategory && matchesSubcategory && matchesRating
  })

  // Sort reviews
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === "recent") {
      // Simple sort by date (in a real app, would use actual date objects)
      return a.date.includes("day") && b.date.includes("week") ? -1 : 1
    } else if (sortBy === "rating-high") {
      return b.rating - a.rating
    } else if (sortBy === "rating-low") {
      return a.rating - b.rating
    }
    return 0
  })

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    if (value === "all") {
      setCategoryFilter("all")
    } else {
      setCategoryFilter(value)
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
                <Button className="bg-blue-500 hover:bg-blue-400 text-white font-medium">Write a Review</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="flex items-center text-blue-300 hover:text-blue-100">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <h1 className="text-3xl font-bold text-white drop-shadow">Browse Reviews</h1>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <Input
                type="search"
                placeholder="Search reviews..."
                className="pl-10 bg-white/80 backdrop-blur-sm border-blue-300 focus-visible:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-blue-300 bg-blue-900/50 backdrop-blur-sm text-blue-100 hover:bg-blue-800/50"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filter Reviews</SheetTitle>
                  <SheetDescription>Refine your search with these filters</SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Category</h3>
                    <Select
                      value={categoryFilter}
                      onValueChange={(value) => {
                        setCategoryFilter(value)
                        setSubcategoryFilter("all") // Reset subcategory when category changes
                        setActiveTab(value) // Update active tab
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="products">Products</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                        <SelectItem value="places">Places</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Subcategory</h3>
                    <Select value={subcategoryFilter} onValueChange={setSubcategoryFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subcategory" />
                      </SelectTrigger>
                      <SelectContent>
                        {getSubcategories().map((subcategory) => (
                          <SelectItem key={subcategory} value={subcategory}>
                            {subcategory === "all" ? "All Subcategories" : subcategory}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="text-sm font-medium">Minimum Rating</h3>
                      <span className="text-sm text-blue-600">{ratingFilter[0]} stars</span>
                    </div>
                    <Slider
                      defaultValue={[0]}
                      max={5}
                      step={0.5}
                      value={ratingFilter}
                      onValueChange={setRatingFilter}
                      className="py-4"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Sort By</h3>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recent">Most Recent</SelectItem>
                        <SelectItem value="rating-high">Highest Rating</SelectItem>
                        <SelectItem value="rating-low">Lowest Rating</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-500"
                    onClick={() => {
                      setRatingFilter([0])
                      setCategoryFilter("all")
                      setSubcategoryFilter("all")
                      setSortBy("recent")
                      setActiveTab("all")
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-8">
          <TabsList className="bg-blue-900/70 backdrop-blur-sm text-white">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white font-medium"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="products"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white font-medium flex items-center gap-1"
            >
              <ShoppingBag className="h-4 w-4" />
              Products
            </TabsTrigger>
            <TabsTrigger
              value="services"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white font-medium flex items-center gap-1"
            >
              <Briefcase className="h-4 w-4" />
              Services
            </TabsTrigger>
            <TabsTrigger
              value="places"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white font-medium flex items-center gap-1"
            >
              <MapPin className="h-4 w-4" />
              Places
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {sortedReviews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedReviews.map((review, index) => (
                  <ReviewCard
                    key={review.id}
                    id={review.id}
                    title={review.title}
                    category={review.category}
                    subcategory={review.subcategory}
                    rating={review.rating}
                    image={review.image}
                    excerpt={review.excerpt}
                    author={review.author}
                    date={review.date}
                    delay={(index % 3) + 1}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white/70 backdrop-blur-sm rounded-lg shadow-md">
                <p className="text-lg text-blue-700">No reviews match your search criteria.</p>
                <Button
                  variant="link"
                  className="text-blue-600 mt-2"
                  onClick={() => {
                    setSearchQuery("")
                    setRatingFilter([0])
                    setCategoryFilter("all")
                    setSubcategoryFilter("all")
                    setActiveTab("all")
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </TabsContent>
          <TabsContent value="products">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedReviews
                .filter((review) => review.category.toLowerCase() === "products")
                .map((review, index) => (
                  <ReviewCard
                    key={review.id}
                    id={review.id}
                    title={review.title}
                    category={review.category}
                    subcategory={review.subcategory}
                    rating={review.rating}
                    image={review.image}
                    excerpt={review.excerpt}
                    author={review.author}
                    date={review.date}
                    delay={(index % 3) + 1}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="services">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedReviews
                .filter((review) => review.category.toLowerCase() === "services")
                .map((review, index) => (
                  <ReviewCard
                    key={review.id}
                    id={review.id}
                    title={review.title}
                    category={review.category}
                    subcategory={review.subcategory}
                    rating={review.rating}
                    image={review.image}
                    excerpt={review.excerpt}
                    author={review.author}
                    date={review.date}
                    delay={(index % 3) + 1}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="places">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedReviews
                .filter((review) => review.category.toLowerCase() === "places")
                .map((review, index) => (
                  <ReviewCard
                    key={review.id}
                    id={review.id}
                    title={review.title}
                    category={review.category}
                    subcategory={review.subcategory}
                    rating={review.rating}
                    image={review.image}
                    excerpt={review.excerpt}
                    author={review.author}
                    date={review.date}
                    delay={(index % 3) + 1}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
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
