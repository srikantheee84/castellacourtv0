export default function ModernTownhomeSection() {
  return (
    <section className="relative">
      {/* Curved top divider */}
      <div className="h-12 sm:h-16 bg-white relative overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-white"
          style={{ borderRadius: "100% 100% 0 0" }}
        ></div>
      </div>

      {/* Modern Townhome Living with background image */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-white overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0215-mgqYZ1S1QTyVeVZaPgHBhCPi9JVK9O.jpeg"
          alt="Aerial view of Castella Court"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light mb-2 text-center px-4 text-white">
            MODERN TOWNHOME LIVING
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light text-center px-4 text-white">
            in The Heart of Leander
          </p>
        </div>
      </div>
    </section>
  )
}

