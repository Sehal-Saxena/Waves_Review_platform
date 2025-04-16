"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Upload, Trash2, ShoppingBag, Briefcase, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { StarRatingInput } from "@/components/star-rating-input"
import { VideoBackground } from "@/components/video-background"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { WaveLogo } from "@/components/wave-logo"

export default function SubmitReviewPage() {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [subcategory, setSubcategory] = useState("")
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
  const [pros, setPros] = useState([""])
  const [cons, setCons] = useState([""])
  const [images, setImages] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Subcategories based on selected category
  const getSubcategories = () => {
    switch (category) {
      case "Products":
        return ["Electronics", "Home Appliances", "Beauty", "Fashion", "Food & Drink", "Other"]
      case "Services":
        return ["Wellness", "Home Services", "Food", "Professional", "Entertainment", "Other"]
      case "Places":
        return ["Hotels", "Resorts", "Restaurants", "Attractions", "Outdoors", "Other"]
      default:
        return []
    }
  }

  const handleAddPro = () => {
    setPros([...pros, ""])
  }

  const handleAddCon = () => {
    setCons([...cons, ""])
  }

  const handleProChange = (index: number, value: string) => {
    const newPros = [...pros]
    newPros[index] = value
    setPros(newPros)
  }

  const handleConChange = (index: number, value: string) => {
    const newCons = [...cons]
    newCons[index] = value
    setCons(newCons)
  }

  const handleRemovePro = (index: number) => {
    const newPros = [...pros]
    newPros.splice(index, 1)
    setPros(newPros)
  }

  const handleRemoveCon = (index: number) => {
    const newCons = [...cons]
    newCons.splice(index, 1)
    setCons(newCons)
  }

  const handleAddImage = () => {
    // In a real app, this would handle file uploads
    // For this demo, we'll just add a placeholder
    setImages([...images, `/placeholder.svg?height=200&width=300&text=Image ${images.length + 1}`])
  }

  const handleRemoveImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setTitle("")
        setCategory("")
        setSubcategory("")
        setRating(0)
        setReview("")
        setPros([""])
        setCons([""])
        setImages([])
        setIsSuccess(false)
      }, 3000)
    }, 1500)
  }

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Products":
        return <ShoppingBag className="h-5 w-5" />
      case "Services":
        return <Briefcase className="h-5 w-5" />
      case "Places":
        return <MapPin className="h-5 w-5" />
      default:
        return null
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
              <Link href="/reviews">
                <Button variant="ghost" className="text-blue-100 hover:text-white hover:bg-blue-800">
                  Browse Reviews
                </Button>
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

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6 drop-shadow">Write a Review</h1>

          {isSuccess ? (
            <Card className="bg-green-50/90 border-green-200 mb-8 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      className="text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-green-800 mb-2">Review Submitted Successfully!</h2>
                  <p className="text-green-700 mb-4">Thank you for sharing your experience with the community.</p>
                  <div className="flex justify-center gap-4">
                    <Link href="/reviews">
                      <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-100">
                        Browse Reviews
                      </Button>
                    </Link>
                    <Button className="bg-green-600 hover:bg-green-500" onClick={() => setIsSuccess(false)}>
                      Write Another Review
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <Card className="bg-white/80 backdrop-blur-sm border-transparent shadow-md">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="grid gap-2">
                      <Label htmlFor="title">Review Title</Label>
                      <Input
                        id="title"
                        placeholder="Summarize your experience"
                        className="border-blue-200 focus-visible:ring-blue-500"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid gap-6">
                      <Label>What are you reviewing?</Label>
                      <RadioGroup
                        value={category}
                        onValueChange={setCategory}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        <div>
                          <RadioGroupItem value="Products" id="products" className="peer sr-only" />
                          <Label
                            htmlFor="products"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-blue-200 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-blue-500"
                          >
                            <ShoppingBag className="mb-2 h-6 w-6 text-blue-700" />
                            <span className="font-medium">Products</span>
                          </Label>
                        </div>

                        <div>
                          <RadioGroupItem value="Services" id="services" className="peer sr-only" />
                          <Label
                            htmlFor="services"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-blue-200 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-blue-500"
                          >
                            <Briefcase className="mb-2 h-6 w-6 text-blue-700" />
                            <span className="font-medium">Services</span>
                          </Label>
                        </div>

                        <div>
                          <RadioGroupItem value="Places" id="places" className="peer sr-only" />
                          <Label
                            htmlFor="places"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-blue-200 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-blue-500"
                          >
                            <MapPin className="mb-2 h-6 w-6 text-blue-700" />
                            <span className="font-medium">Places</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {category && (
                      <div className="grid gap-2">
                        <Label htmlFor="subcategory">Subcategory</Label>
                        <Select value={subcategory} onValueChange={setSubcategory} required>
                          <SelectTrigger id="subcategory" className="border-blue-200 focus-visible:ring-blue-500">
                            <SelectValue placeholder="Select a subcategory" />
                          </SelectTrigger>
                          <SelectContent>
                            {getSubcategories().map((sub) => (
                              <SelectItem key={sub} value={sub}>
                                {sub}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div className="grid gap-2">
                      <Label>Your Rating</Label>
                      <StarRatingInput rating={rating} setRating={setRating} />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="review">Review</Label>
                      <Textarea
                        id="review"
                        placeholder="Share your experience in detail..."
                        className="min-h-[200px] border-blue-200 focus-visible:ring-blue-500"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-transparent shadow-md">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-blue-900 mb-4">Pros & Cons</h2>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label>Pros</Label>
                      {pros.map((pro, index) => (
                        <div key={`pro-${index}`} className="flex gap-2">
                          <Input
                            placeholder="What did you like?"
                            className="border-blue-200 focus-visible:ring-blue-500"
                            value={pro}
                            onChange={(e) => handleProChange(index, e.target.value)}
                          />
                          {pros.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => handleRemovePro(index)}
                              className="border-blue-200"
                            >
                              <Trash2 className="h-4 w-4 text-blue-700" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleAddPro}
                        className="border-blue-200 text-blue-700"
                      >
                        Add Another Pro
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <Label>Cons</Label>
                      {cons.map((con, index) => (
                        <div key={`con-${index}`} className="flex gap-2">
                          <Input
                            placeholder="What could be improved?"
                            className="border-blue-200 focus-visible:ring-blue-500"
                            value={con}
                            onChange={(e) => handleConChange(index, e.target.value)}
                          />
                          {cons.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => handleRemoveCon(index)}
                              className="border-blue-200"
                            >
                              <Trash2 className="h-4 w-4 text-blue-700" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleAddCon}
                        className="border-blue-200 text-blue-700"
                      >
                        Add Another Con
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-transparent shadow-md">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-blue-900 mb-4">Add Photos</h2>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {images.map((image, index) => (
                        <div key={`image-${index}`} className="relative group">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Uploaded image ${index + 1}`}
                            className="rounded-lg object-cover w-full h-32 shadow-md"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => handleRemoveImage(index)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}

                      {images.length < 6 && (
                        <Button
                          type="button"
                          variant="outline"
                          className="h-32 border-dashed border-blue-200 flex flex-col items-center justify-center gap-2 hover:bg-blue-50"
                          onClick={handleAddImage}
                        >
                          <Upload className="h-6 w-6 text-blue-600" />
                          <span className="text-sm text-blue-600">Add Photo</span>
                        </Button>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      You can upload up to 6 photos. Images should be relevant to your review.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end gap-4">
                <Link href="/">
                  <Button type="button" variant="outline" className="border-blue-200">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-500" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </main>

      <footer className="bg-blue-900/80 text-blue-100 py-12 mt-12 backdrop-blur-md">
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
