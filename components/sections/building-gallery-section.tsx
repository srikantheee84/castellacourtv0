import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BuildingGallerySection() {
  const buildingImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Castell Court Exterior Building",
    },
    {
      src: "/placeholder.svg?height=600&width=500",
      alt: "Castell Court Pool Area",
    },
    {
      src: "/placeholder.svg?height=600&width=600",
      alt: "Castell Court Interior Lobby",
    },
  ]

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full mb-8 sm:mb-10 md:mb-12">
        {buildingImages.map((image, index) => (
          <div key={index} className="relative aspect-video md:aspect-auto h-full">
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link href="/gallery">
          <Button className="bg-[#C19A50] hover:bg-[#A17A30] text-white border-none rounded-none px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-light tracking-wider">
            VIEW BUILDING GALLERY
          </Button>
        </Link>
      </div>
    </section>
  )
}

