import Link from "next/link"
import { Button } from "@/components/ui/button"
import FloorPlansSection from "@/components/sections/floor-plans-section"

export default function BuildingInspiredSection() {
  return (
    <section className="bg-white">
      <div className="py-16 sm:py-20 md:py-24 px-4 max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#3D7A7A] flex items-center justify-center">
            <svg
              width="50"
              height="30"
              viewBox="0 0 50 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <rect x="2" y="5" width="46" height="20" stroke="white" strokeWidth="2" fill="none" />
              <rect x="10" y="8" width="8" height="14" stroke="white" strokeWidth="2" fill="none" />
              <rect x="21" y="8" width="8" height="14" stroke="white" strokeWidth="2" fill="none" />
              <rect x="32" y="8" width="8" height="14" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-10 sm:mb-12 md:mb-16 text-[#C19A50]">
          A BUILDING INSPIRED BY <span className="italic font-normal">PURPOSE</span>
        </h2>

        {/* Description */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
            Castella Court residences share the inspiration of both modern and timeless appeal. A sense of an active yet
            relaxed life begins from the lobby through the amenity spaces and into each residence. The living areas then
            seamlessly connect with coveted views of the Leander landscape. Inside, a sense of innovative space design
            and craftsmanship rings true with a distinct and stylish selection of features and finishes.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
            Ready to see Castella Court for yourself? Schedule a tour below to view our available units and amenity
            spaces.
          </p>
        </div>

        {/* CTA Button */}
        <Link href="/contact">
          <Button className="bg-[#D35C37] hover:bg-[#B34D2E] text-white border-none rounded-none px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-light tracking-wider uppercase">
            Schedule a Private Tour
          </Button>
        </Link>
      </div>

      {/* Floor Plans Section */}
      <FloorPlansSection />
    </section>
  )
}

