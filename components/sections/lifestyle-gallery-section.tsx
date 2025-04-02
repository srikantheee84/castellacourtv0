export default function LifestyleGallerySection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-0 bg-[#faf8f3] w-full">
      <div className="max-w-[95%] xl:max-w-[90%] mx-auto">
        {/* 3x3 Image Grid - Larger and Wider */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {/* Row 1 */}
          <div className="aspect-square bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500 text-center p-4">
              <p className="font-medium">Image 1</p>
              <p className="text-sm mt-1">Lifestyle Image</p>
            </div>
          </div>

          <div className="aspect-square bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500 text-center p-4">
              <p className="font-medium">Image 2</p>
              <p className="text-sm mt-1">Lifestyle Image</p>
            </div>
          </div>

          <div className="aspect-square bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500 text-center p-4">
              <p className="font-medium">Image 3</p>
              <p className="text-sm mt-1">Lifestyle Image</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="aspect-square bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500 text-center p-4">
              <p className="font-medium">Image 4</p>
              <p className="text-sm mt-1">Lifestyle Image</p>
            </div>
          </div>

          <div className="aspect-square bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500 text-center p-4">
              <p className="font-medium">Image 5</p>
              <p className="text-sm mt-1">Lifestyle Image</p>
            </div>
          </div>

          <div className="aspect-square bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500 text-center p-4">
              <p className="font-medium">Image 6</p>
              <p className="text-sm mt-1">Lifestyle Image</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="aspect-square bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500 text-center p-4">
              <p className="font-medium">Image 7</p>
              <p className="text-sm mt-1">Lifestyle Image</p>
            </div>
          </div>

          <div className="aspect-square bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500 text-center p-4">
              <p className="font-medium">Image 8</p>
              <p className="text-sm mt-1">Lifestyle Image</p>
            </div>
          </div>

          <div className="aspect-square bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500 text-center p-4">
              <p className="font-medium">Image 9</p>
              <p className="text-sm mt-1">Lifestyle Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

