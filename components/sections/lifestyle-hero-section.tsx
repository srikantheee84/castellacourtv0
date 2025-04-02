export default function LifestyleHeroSection() {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* Image placeholder */}
      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <div className="text-center p-6 bg-black/30 w-full h-full flex flex-col items-center justify-center">
          <div className="mb-4 text-white/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 8h.01"></path>
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="9" cy="9" r="2"></circle>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wider text-center px-4 drop-shadow-lg">
            LIFESTYLE
          </h1>
          <p className="text-white/80 mt-4 max-w-md">Add your lifestyle hero image here</p>
        </div>
      </div>
    </section>
  )
}

