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
      href: "/residences",
      sectionId: "residences",
      image: "/images/home/explore/explore1.jpeg",
      color: "from-black/0 to-black/50",
    },
    {
      title: "COMMUNITY",
      href: "/gallery",
      sectionId: "community",
      image: "/images/home/explore/explore2.jpeg",
      color: "from-black/0 to-black/50",
    },
    {
      title: "LIFESTYLE",
      href: "/gallery",
      sectionId: "lifestyle",
      image: "/images/home/explore/explore3.jpeg",
      color: "from-black/0 to-black/50",
    },
  ]

  // Handle section navigation
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
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

