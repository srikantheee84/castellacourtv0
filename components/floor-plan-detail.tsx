import Image from "next/image"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import ExperienceUltimateSection from "@/components/sections/experience-ultimate-section"

interface FloorPlanDetailProps {
  planId: string
  location: string
  bedrooms: number
  bathrooms: number | string
  squareFeet: number
  accentColor: string
  imagePath: string
}

export default function FloorPlanDetail({
  planId,
  location,
  bedrooms,
  bathrooms,
  squareFeet,
  accentColor,
  imagePath,
}: FloorPlanDetailProps) {
  const hoverColor = accentColor === "#D35C37" ? "#B34D2E" : accentColor === "#3D7A7A" ? "#2D5A5A" : "#A17A30"

  return (
    <main className="pt-24 sm:pt-28 md:pt-32 min-h-screen bg-white">
      {/* Header Section */}
      <section className="w-full bg-[#e9e5dc]">
        <div className="max-w-6xl mx-auto px-4 py-8 flex justify-between items-center">
          <div style={{ backgroundColor: accentColor }} className="px-8 py-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white">{planId}</h1>
          </div>
          <div style={{ color: accentColor }} className="text-xl sm:text-2xl md:text-3xl font-light">
            Located on {location} facing
          </div>
        </div>
      </section>

      {/* Floor Plan Image */}
      <section className="py-16 sm:py-20 md:py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={imagePath || "/placeholder.svg"}
              alt={`${planId} Floor Plan`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Floor Plan Details */}
      <section className="pb-16 sm:pb-20 md:pb-24 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl font-light text-[#333333]">{bedrooms} Bedroom</h2>
          </div>

          <div className="text-center mb-6 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl font-light text-[#333333]">{bathrooms} Bathroom</h2>
          </div>

          <div className="text-center sm:text-right">
            <h2 className="text-2xl sm:text-3xl font-light text-[#333333]">{squareFeet} SqFt</h2>
          </div>
        </div>

        <div className="flex justify-center mt-12 sm:mt-16">
          <Button
            className="text-white border-none rounded-none px-8 py-4 text-lg font-light tracking-wider"
            style={{ backgroundColor: accentColor, hover: { backgroundColor: hoverColor } }}
          >
            DOWNLOAD PDF
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#f2ece3] py-16 sm:py-20 md:py-24 px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 md:p-12 shadow-sm">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
              Found a floor plan that looks right for you?
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Let us know you're interested in receiving more information about Castella Court at Leander.
            </p>
          </div>

          <ContactForm accentColor={accentColor} />
        </div>
      </section>

      {/* Experience Ultimate Lifestyle Section */}
      <ExperienceUltimateSection />
    </main>
  )
}

