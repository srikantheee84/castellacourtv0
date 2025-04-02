import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LiveWorkPlaySection() {
  const lifestyleImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inline-109f24bddf4c67f12846ddbc0b5258ce.jpg-RL3VpBhpk3KxNrmqwnImBmYdeXbdGe.jpeg",
      alt: "Natural swimming area with clear blue water surrounded by greenery",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casa-costa10-640x823.jpg-HSmY9PbRZM9UYRUIFzrqpdGTOOgfXC.jpeg",
      alt: "Cozy cafe interior with wooden ceiling and pastry display",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/73099637_2627985210590811_633003266610823168_n%20%281%29.jpg-4OmFeuCqRVXOuVJmMVCiDmY3TU2RMT.jpeg",
      alt: "Aerial view of soccer fields and community recreational area",
    },
  ]

  return (
    <section>
      <div
        className="py-6 sm:py-8 md:py-10 px-4 text-center"
        style={{
          backgroundImage: "url('/pattern-bg.svg')",
          backgroundRepeat: "repeat",
          backgroundColor: "#f0ebe5",
          marginBottom: 0,
        }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider text-[#333333]">
          LIVE. WORK. PLAY.
        </h2>
      </div>

      {/* Image grid with consistent sizing and spacing */}
      <div className="bg-white pt-4 md:pt-8 px-2 md:px-4">
        <div className="w-[95%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {lifestyleImages.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden shadow-md">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* View Building Gallery Button */}
          <div className="flex justify-center py-10 sm:py-12 md:py-16 w-full">
            <Button
              asChild
              className="bg-[#C19A50] hover:bg-[#A17A30] text-white border-none rounded-none px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-light tracking-wider"
            >
              <Link href="/gallery">VIEW BUILDING GALLERY</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

