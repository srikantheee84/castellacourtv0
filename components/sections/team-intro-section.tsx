export default function TeamIntroSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Briefcase/Portfolio Icon */}
        <div className="flex justify-center mb-10">
          <div className="w-24 h-24 rounded-full bg-[#D35C37] flex items-center justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path
                d="M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M12 12L16 8M12 12L8 8M12 12V18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* TEAM Heading */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-light mb-8 text-[#C19A50]">TEAM</h1>

        {/* Experience Meets Innovation Subheading */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-light mb-10 text-[#333333]">
          Experience Meets Innovation
        </h2>

        {/* Description Text */}
        <p
          className="text-center text-lg sm:text-xl leading-relaxed text-[#333333] mb-16 px-4 sm:px-8 md:px-12 max-w-4xl mx-auto"
          style={{
            fontFamily: "'Futura-Nueva', Futura, 'Trebuchet MS', Arial, sans-serif",
            fontWeight: "300",
            letterSpacing: "0.01em",
            lineHeight: "1.6",
          }}
        >
          The vision and plan for Castell Court is the culmination of a team of a proven Real Estate Development and
          Sales Team bringing together vast experience with pioneering spirit and a mission to create a truly unique,
          lifestyle-driven condominium living experience like no other.
        </p>

        {/* Bottom Border Line */}
        <div className="w-full h-px bg-gray-300"></div>
      </div>
    </section>
  )
}

