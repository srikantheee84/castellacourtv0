"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

export default function FloorPlansSection() {
  const router = useRouter()

  const floorPlans = [
    {
      title: "THE VALENCIA",
      image: "/placeholder.svg?height=600&width=400&text=Valencia+Floor+Plans",
      color: "#D35C37", // Orange-red
      viewText: "VIEW FLOOR PLANS",
    },
    {
      title: "THE MARBELLA",
      image: "/placeholder.svg?height=600&width=400&text=Marbella+Floor+Plan",
      color: "#3D7A7A", // Teal
      viewText: "VIEW FLOOR PLANS",
    },
  ]

  const handleFloorPlanClick = (planTitle) => {
    if (planTitle === "THE VALENCIA") {
      router.push("/residences/valencia")
      // Allow time for navigation to complete before scrolling
      setTimeout(() => {
        const valenciaSection = document.getElementById("valencia-plans")
        if (valenciaSection) {
          valenciaSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    } else if (planTitle === "THE MARBELLA") {
      router.push("/residences/valencia")
      // Allow time for navigation to complete before scrolling
      setTimeout(() => {
        const marbellaSection = document.getElementById("marbella-plans")
        if (marbellaSection) {
          marbellaSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-12 sm:mb-16 text-center text-[#C19A50]">
          FLOOR PLANS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {floorPlans.map((plan, index) => (
            <div key={index} className="flex flex-col">
              {/* Header */}
              <div
                className="py-4 text-center text-white text-xl sm:text-2xl font-light"
                style={{ backgroundColor: plan.color }}
              >
                {plan.title}
              </div>

              {/* Floor Plan Image */}
              <div className="bg-[#e9e5dc] p-4 flex-grow">
                <div className="relative aspect-[3/4] w-full">
                  <Image src={plan.image || "/placeholder.svg"} alt={`${plan.title}`} fill className="object-contain" />
                </div>
              </div>

              {/* View Floor Plans Link */}
              <div className="mt-4 text-center">
                <button
                  onClick={() => handleFloorPlanClick(plan.title)}
                  className="text-sm sm:text-base font-medium tracking-wider hover:underline"
                  style={{ color: plan.color }}
                >
                  {plan.viewText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

