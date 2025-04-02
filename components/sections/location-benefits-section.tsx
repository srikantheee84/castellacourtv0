export default function LocationBenefitsSection() {
  return (
    <section className="relative bg-[#e9e5dc] pt-16 sm:pt-20 md:pt-24 pb-32 sm:pb-40 md:pb-48 px-4">
      {/* Circular Icon */}
      <div className="flex justify-center mb-8">
        <div className="w-16 h-16 rounded-full bg-[#C15037] flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="white"
            />
            <path d="M12 17L17 12L12 7L7 12L12 17Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-light mb-8 sm:mb-10 md:mb-12 text-[#C19A50]">
        YOUR GATEWAY TO ALL THINGS LEANDER
      </h2>

      {/* Description Text */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-base sm:text-lg leading-relaxed text-[#555555]">
          Looking for the ideal location? Look no further. Leander is strategically located just 3 miles from Downtown
          Austin and 5 minutes from The University of Texas at Austin. Immerse yourself in Leander's Town Center mecca
          at bustling Aldrich Street rich with an inspiring retail area and unique, innovative options for food,
          beverages, and entertainment that residents can enjoy just steps away from home.
        </p>
      </div>

      {/* Curved Bottom Edge - Adjusted to match Mueller Attractions background */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 overflow-hidden">
        <div
          className="absolute bottom-0 left-[-10%] right-[-10%] h-[200%]"
          style={{
            borderRadius: "50%/100px 100px 0 0",
            backgroundColor: "white", // Changed to white to match Mueller Attractions section
          }}
        ></div>
      </div>
    </section>
  )
}

