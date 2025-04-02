export default function LifestyleDescriptionSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Martini Glass Icon */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-24 rounded-full bg-[#7a7d3e] flex items-center justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M8 2L12 2L16 2L16 4C16 6.5 14 8.5 12 8.5C10 8.5 8 6.5 8 4L8 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M12 8.5V19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="16" cy="4" r="1" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Description Text */}
        <p
          className="text-center text-lg sm:text-xl md:text-2xl leading-relaxed text-[#333333] mb-16 px-4 sm:px-8 md:px-12 max-w-4xl mx-auto"
          style={{
            fontFamily: "'Futura-Nueva', Futura, 'Trebuchet MS', Arial, sans-serif",
            fontWeight: "300",
            letterSpacing: "0.01em",
            lineHeight: "1.6",
          }}
        >
          Life at Castell Court is, as its name implies, enriched by an abundance of green space just steps away from
          the entrance. And living at Castell Court provides residents with the unique opportunity to be a part of a
          community that celebrates the legacy of old Leander while whisking residents into an exciting new community
          full of life.
        </p>

        {/* Bottom Border Line */}
        <div className="w-full h-px bg-gray-300"></div>
      </div>
    </section>
  )
}

