export default function MuellerAttractionsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white -mt-1">
      <div className="w-full max-w-[1600px] mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-light mb-12 sm:mb-16 text-[#C19A50]">
          LEANDER ATTRACTIONS
        </h2>

        {/* Cross-shaped layout with one in the middle and two on each side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Left column */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            {/* Top Left Image Placeholder */}
            <div className="relative aspect-[4/3] bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500 text-center p-4">
                <p className="font-medium">Top Left Image</p>
                <p className="text-sm mt-1">Leander Lake Park</p>
              </div>
            </div>

            {/* Bottom Left Image Placeholder */}
            <div className="relative aspect-[4/3] bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500 text-center p-4">
                <p className="font-medium">Bottom Left Image</p>
                <p className="text-sm mt-1">Local Dining</p>
              </div>
            </div>
          </div>

          {/* Center column */}
          <div className="flex items-center">
            {/* Center Image Placeholder */}
            <div className="relative aspect-[3/4] w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500 text-center p-4">
                <p className="font-medium">Center Image</p>
                <p className="text-sm mt-1">Iconic Architecture</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            {/* Top Right Image Placeholder */}
            <div className="relative aspect-[4/3] bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500 text-center p-4">
                <p className="font-medium">Top Right Image</p>
                <p className="text-sm mt-1">Farmers Market</p>
              </div>
            </div>

            {/* Bottom Right Image Placeholder */}
            <div className="relative aspect-[4/3] bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500 text-center p-4">
                <p className="font-medium">Bottom Right Image</p>
                <p className="text-sm mt-1">Retail Shopping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

