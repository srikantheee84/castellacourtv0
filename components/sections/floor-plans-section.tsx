"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

export default function FloorPlansSection() {
  const router = useRouter()

  const floorPlans = [
    {
      title: "THE VALENCIA",
      units: [
        {
          name: "V1",
          pdfPath: "/pdfs/valencia/v1.pdf",
          image: "/images/residences/floorplans/valencia/v1-thumb.jpg",
          specs: "3 Bed | 2.5 Bath | Balcony | 1448 SqFt"
        },
        {
          name: "V2",
          pdfPath: "/pdfs/valencia/v2.pdf",
          image: "/images/residences/floorplans/valencia/v2-thumb.jpg",
          specs: "3 Bed | 2.5 Bath | Balcony | 1448 SqFt"
        }
      ],
      color: "#D35C37", // Orange-red
      viewText: "VIEW FLOOR PLANS",
    },
    {
      title: "THE MARBELLA",
      units: [
        {
          name: "M1",
          pdfPath: "/pdfs/marbella/m1.pdf",
          image: "/images/residences/floorplans/marbella/m1-thumb.jpg",
          specs: "3 Bed | 2.5 Bath | Balcony | 1850 SqFt"
        },
        {
          name: "M2",
          pdfPath: "/pdfs/marbella/m2.pdf",
          image: "/images/residences/floorplans/marbella/m2-thumb.jpg",
          specs: "3 Bed | 3 Bath | Balcony | 1950 SqFt"
        }
      ],
      color: "#3D7A7A", // Teal
      viewText: "VIEW FLOOR PLANS",
    },
  ]

  const handlePdfView = (pdfPath: string) => {
    // Open PDF in a new tab
    window.open(pdfPath, '_blank')
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

              {/* Floor Plan Units */}
              <div className="bg-[#e9e5dc] p-4 flex-grow">
                <div className="grid grid-cols-1 gap-8">
                  {plan.units.map((unit, unitIndex) => (
                    <div key={unitIndex} className="flex flex-col items-center">
                      <div className="relative aspect-[3/4] w-full max-w-sm mx-auto mb-4">
                        <Image 
                          src={unit.image} 
                          alt={`${plan.title} ${unit.name} Floor Plan`} 
                          fill 
                          className="object-contain"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.svg?height=600&width=400&text=" + unit.name + "+Floor+Plan";
                          }}
                        />
                      </div>
                      <h3 className="text-3xl font-light mb-2">{unit.name}</h3>
                      <p className="text-sm text-center mb-4">{unit.specs}</p>
                      <button
                        onClick={() => handlePdfView(unit.pdfPath)}
                        className="text-sm font-medium tracking-wider hover:underline"
                        style={{ color: plan.color }}
                      >
                        VIEW FLOOR PLAN PDF
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

