import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ReviewCard } from "@/components/review-card"
import { FeaturedReview } from "@/components/featured-review"
import { CategoryFilter } from "@/components/category-filter"
import { VideoBackground } from "@/components/video-background"
import { CategoryShowcase } from "@/components/category-showcase"
import { WaveLogo } from "@/components/wave-logo"
import { ShoppingBag, Briefcase, MapPin } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen">
      <VideoBackground />
      <header className="bg-blue-900/80 text-white backdrop-blur-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <WaveLogo size={40} className="text-blue-300" />
                <h1 className="text-2xl font-bold">WaveReviews</h1>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/reviews">
                <Button variant="ghost" className="text-blue-100 hover:text-white hover:bg-blue-800">
                  Browse
                </Button>
              </Link>
              <Link href="/submit">
                <Button className="bg-blue-500 hover:bg-blue-400 text-white font-medium">Write a Review</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <section className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-md">Discover Honest Reviews</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 drop-shadow">
            Find and share authentic experiences about products, services, and places that matter to you.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
            <Input
              type="search"
              placeholder="Search for reviews..."
              className="pl-10 bg-white/80 backdrop-blur-sm border-blue-300 focus-visible:ring-blue-500 h-12 text-lg"
            />
          </div>
        </section>

        <CategoryShowcase />

        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-white drop-shadow">Featured Review</h2>
            <Link href="/reviews" className="text-blue-300 hover:text-blue-100 font-medium">
              View all
            </Link>
          </div>
          <FeaturedReview />
        </section>

        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-white drop-shadow">Recent Reviews</h2>
            <CategoryFilter />
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-blue-900/70 backdrop-blur-sm mb-6 text-white">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ReviewCard
                  id="1"
                  title="Sony WH-1000XM5 Headphones"
                  category="Products"
                  subcategory="Electronics"
                  rating={4.8}
                  image="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=500&auto=format&fit=crop"
                  excerpt="Incredible noise cancellation and sound quality, perfect for both travel and everyday use..."
                  author="Audio Enthusiast"
                  date="2 days ago"
                  delay={1}
                />
                <ReviewCard
                  id="2"
                  title="Oceanside Massage Therapy"
                  category="Services"
                  subcategory="Wellness"
                  rating={5}
                  image="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=500&auto=format&fit=crop"
                  excerpt="The most relaxing experience I've had in years. The therapist was skilled and attentive..."
                  author="Wellness Seeker"
                  date="1 week ago"
                  delay={2}
                />
                <ReviewCard
                  id="3"
                  title="Coral Bay Beach Resort"
                  category="Places"
                  subcategory="Hotels"
                  rating={4.5}
                  image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=500&auto=format&fit=crop"
                  excerpt="Stunning beachfront property with excellent amenities and friendly staff..."
                  author="Travel Explorer"
                  date="2 weeks ago"
                  delay={3}
                />
              </div>
            </TabsContent>

            <TabsContent value="products">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ReviewCard
                  id="1"
                  title="Sony WH-1000XM5 Headphones"
                  category="Products"
                  subcategory="Electronics"
                  rating={4.8}
                  image="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=500&auto=format&fit=crop"
                  excerpt="Incredible noise cancellation and sound quality, perfect for both travel and everyday use..."
                  author="Audio Enthusiast"
                  date="2 days ago"
                  delay={1}
                />
                <ReviewCard
                  id="4"
                  title="Dyson V15 Detect Vacuum"
                  category="Products"
                  subcategory="Home Appliances"
                  rating={4.5}
                  image="https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=500&auto=format&fit=crop"
                  excerpt="Revolutionary cleaning technology with powerful suction and laser dust detection..."
                  author="Clean Home"
                  date="1 week ago"
                  delay={2}
                />
                <ReviewCard
                  id="5"
                  title="La Mer Moisturizing Cream"
                  category="Products"
                  subcategory="Beauty"
                  rating={4.2}
                  image="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=500&auto=format&fit=crop"
                  excerpt="Luxurious moisturizer that transformed my skin, though the price point is quite high..."
                  author="Beauty Guru"
                  date="2 weeks ago"
                  delay={3}
                />
              </div>
            </TabsContent>

            <TabsContent value="services">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ReviewCard
                  id="2"
                  title="Oceanside Massage Therapy"
                  category="Services"
                  subcategory="Wellness"
                  rating={5}
                  image="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=500&auto=format&fit=crop"
                  excerpt="The most relaxing experience I've had in years. The therapist was skilled and attentive..."
                  author="Wellness Seeker"
                  date="1 week ago"
                  delay={1}
                />
                <ReviewCard
                  id="6"
                  title="Blue Wave Plumbing Services"
                  category="Services"
                  subcategory="Home Services"
                  rating={4.7}
                  image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=500&auto=format&fit=crop"
                  excerpt="Prompt, professional, and reasonably priced. Fixed our leak without any hassle..."
                  author="Homeowner"
                  date="1 week ago"
                  delay={2}
                />
                <ReviewCard
                  id="7"
                  title="Coastal Cuisine Catering"
                  category="Services"
                  subcategory="Food"
                  rating={4.9}
                  image="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=500&auto=format&fit=crop"
                  excerpt="Made our event special with delicious seafood and impeccable service..."
                  author="Event Host"
                  date="2 weeks ago"
                  delay={3}
                />
              </div>
            </TabsContent>

            <TabsContent value="places">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ReviewCard
                  id="3"
                  title="Coral Bay Beach Resort"
                  category="Places"
                  subcategory="Hotels"
                  rating={4.5}
                  image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=500&auto=format&fit=crop"
                  excerpt="Stunning beachfront property with excellent amenities and friendly staff..."
                  author="Travel Explorer"
                  date="2 weeks ago"
                  delay={1}
                />
                <ReviewCard
                  id="8"
                  title="Azure Waters Maldives Resort"
                  category="Places"
                  subcategory="Resorts"
                  rating={5.0}
                  image="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=500&auto=format&fit=crop"
                  excerpt="Paradise on Earth with overwater bungalows and incredible marine life..."
                  author="Island Explorer"
                  date="1 week ago"
                  delay={2}
                />
                <ReviewCard
                  id="9"
                  title="Seaside Cliff Hiking Trail"
                  category="Places"
                  subcategory="Outdoors"
                  rating={4.6}
                  image="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=500&auto=format&fit=crop"
                  excerpt="Breathtaking views along a well-maintained coastal trail. Perfect for all skill levels..."
                  author="Nature Lover"
                  date="2 weeks ago"
                  delay={3}
                />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="bg-blue-900/60 backdrop-blur-sm rounded-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <h2 className="text-2xl font-bold text-white mb-4">Share Your Experience</h2>
              <p className="text-blue-100 mb-6">
                Your honest reviews help others make better decisions. Join our community and make your voice heard.
              </p>
              <Link href="/submit">
                <Button className="bg-blue-500 hover:bg-blue-400 text-white">Write a Review</Button>
              </Link>
            </div>
            <div className="w-full max-w-sm">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=250&auto=format&fit=crop"
                alt="Write a review illustration"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
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
