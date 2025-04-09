import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ExperienceUltimateSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Further reduced font size */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-light text-[#C19A50] leading-normal break-words">
            EXPERIENCE THE ULTIMATE LIFESTYLE IN THE HEART OF LEANDER
          </h2>
        </div>

        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 md:mb-10">
          Drop us a line to stay informed on the project as it takes off!
        </p>

        <div className="flex flex-col items-center">
          <Link href="/contact">
            <Button className="bg-[#D35C37] hover:bg-[#B34D2E] text-white border-none rounded-none px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-light tracking-wider">
              CONTACT US
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

