import Link from "next/link"
import { ShoppingBag, Briefcase, MapPin } from "lucide-react"

export function CategoryShowcase() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow">Explore Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/reviews?category=products" className="group">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 text-center transition-all duration-300 shadow-md hover:shadow-xl hover:bg-white/80 hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <ShoppingBag className="w-8 h-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Products</h3>
            <p className="text-blue-700">
              Discover honest reviews about electronics, home goods, beauty products, and more.
            </p>
          </div>
        </Link>

        <Link href="/reviews?category=services" className="group">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 text-center transition-all duration-300 shadow-md hover:shadow-xl hover:bg-white/80 hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <Briefcase className="w-8 h-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Services</h3>
            <p className="text-blue-700">
              Find reliable service providers from restaurants to plumbers, salons to consultants.
            </p>
          </div>
        </Link>

        <Link href="/reviews?category=places" className="group">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 text-center transition-all duration-300 shadow-md hover:shadow-xl hover:bg-white/80 hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <MapPin className="w-8 h-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Places</h3>
            <p className="text-blue-700">
              Explore destinations, hotels, attractions, and hidden gems around the world.
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}
