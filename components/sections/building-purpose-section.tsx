export default function BuildingPurposeSection() {
  const amenities = [
    { name: "Contemporary Architectural Design", color: "#C17A50" },
    { name: "Spacious Open-Concept Layouts", color: "#8A8B4B" },
    { name: "Sleek European-Style Cabinetry", color: "#3D7A7A" },
    { name: "Elegant Quartz Countertops", color: "#C19A50" },
    { name: "Premium Stainless Steel Appliances", color: "#D35C37" },
    { name: "Durable Luxury Vinyl Plank (LVP) Flooring Throughout", color: "#8A8B4B" },
    { name: "Private Courtyard for Outdoor Living", color: "#3D7A7A" },
    { name: "Walkable and Convenient Location", color: "#C17A50" },
    { name: "Low-Maintenance Living for Effortless Enjoyment", color: "#C19A50" },
  ]

  return (
    <section className="relative">
      {/* Curved top background */}
      <div className="absolute top-0 left-0 right-0 h-[100px] sm:h-[120px] md:h-[150px] bg-[#faf8f3]">
        <div className="absolute bottom-0 left-0 right-0 h-[100px] sm:h-[120px] md:h-[150px] bg-[#D35C37] rounded-t-[100%/80px]"></div>
      </div>

      <div className="relative bg-[#D35C37] pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white text-center mb-8 sm:mb-12 md:mb-16 px-4">
          A BUILDING DESIGNED WITH <span className="underline font-medium">PURPOSE</span>
        </h2>

        {/* Full width grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          {/* Left image */}
          <div className="aspect-video md:aspect-auto relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0211-ZdIKN6O8OHaGCwI1KbTKv6qoBaFvyf.jpeg"
              alt="Castella Court Interior"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Amenities list */}
          <div className="bg-[#f5f0e8] p-4 sm:p-6 md:p-8 flex flex-col justify-center">
            <ul className="space-y-4 sm:space-y-5 md:space-y-6 max-w-xs mx-auto">
              {amenities.slice(0, 6).map((amenity, index) => (
                <li key={index} className="flex items-center">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-l-full flex-shrink-0 mr-4"
                    style={{ backgroundColor: amenity.color }}
                  ></div>
                  <span
                    className="text-[#333333] text-lg sm:text-xl"
                    style={{
                      fontFamily: "'Futura-Nueva', Futura, 'Trebuchet MS', Arial, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {amenity.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right image */}
          <div className="aspect-video md:aspect-auto relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0215-mgqYZ1S1QTyVeVZaPgHBhCPi9JVK9O.jpeg"
              alt="Castella Court Common Area"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* No curved bottom here since LiveWorkPlaySection now has its own curved top */}
    </section>
  )
}

