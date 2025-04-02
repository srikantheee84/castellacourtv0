"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

export default function ExploreSection({ showHeading = true }) {
  const router = useRouter()
  const pathname = usePathname()

  const exploreCategories = [
    {
      title: "RESIDENCES",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-16%20at%208.01.00%20PM-NjqdWpZE4tAXQTn8GfndItbmxSkjq5.jpeg",
      href: "/gallery#residences",
      sectionId: "residences",
      color: "from-[#3D7A7A]/30 to-[#3D7A7A]/50",
    },
    {
      title: "COMMUNITY",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-16%20at%208.00.41%20PM-Ah0lZ0nOCjnkooDDUFKuYiMofSGa6v.jpeg",
      href: "/gallery#community",
      sectionId: "community",
      color: "from-[#D35C37]/30 to-[#D35C37]/50",
    },
    {
      title: "LIFESTYLE",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Horizonlake-zCcB1DkEPbXWAOSFQfcjvvMtjnJ7as.jpeg",
      href: "/gallery#lifestyle",
      sectionId: "lifestyle",
      color: "from-[#C19A50]/30 to-[#C19A50]/50",
    },
  ]

  // Handle section navigation
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault()

    // If we're already on the gallery page
    if (pathname === "/gallery") {
      // Find the section and scroll to it
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Navigate to gallery page with the hash
      router.push(`/gallery#${sectionId}`)
    }
  }

  return (
    <div className="bg-white py-10 sm:py-12 md:py-16">
      <div className="w-[95%] mx-auto">
        {showHeading && (
          <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-light text-[#C19A50] mb-8 sm:mb-12 md:mb-16 tracking-wider">
            EXPLORE AND LEARN MORE
          </h3>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {exploreCategories.map((category, index) => (
            <a
              href={category.href}
              key={index}
              className="block group relative overflow-hidden"
              onClick={(e) => handleSectionClick(e, category.sectionId)}
            >
              <div className="aspect-video md:aspect-[16/10] relative">
                {category.image.startsWith("http") ? (
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="object-cover w-full h-full"
                  />
                )}
                <div className={`absolute inset-0 bg-gradient-to-b ${category.color} flex items-center justify-center`}>
                  <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-light tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {category.title}
                  </h4>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

