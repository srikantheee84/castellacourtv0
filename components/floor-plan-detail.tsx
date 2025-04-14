"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface FloorPlanDetailProps {
  planId: string
  location: string
  bedrooms: number
  bathrooms: string
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
  const pdfPath = `/pdfs/valencia/${planId.toLowerCase()}.pdf`

  const handleDownloadPdf = () => {
    window.open(pdfPath, '_blank')
  }

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
              src={imagePath}
              alt={`${planId} Floor Plan`}
              fill
              className="object-contain"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `/placeholder.svg?height=800&width=600&text=${planId}+Floor+Plan`;
              }}
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
          <button
            onClick={handleDownloadPdf}
            className="bg-[#D35C37] hover:bg-[#B34D2E] text-white px-8 py-4 text-lg font-light tracking-wider transition-colors"
          >
            DOWNLOAD PDF
          </button>
        </div>
      </section>
    </main>
  )
}

