import Link from "next/link"

export default function TeamPartnersSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dreamcraft */}
          <div className="bg-white p-8 flex flex-col">
            <div className="h-24 flex items-center justify-center mb-8">
              <div className="flex justify-center w-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yXfFy1mC6t1Vyij2Dl1ZZs9wkR6ySu.png"
                  alt="Dreamcraft Logo"
                  className="h-20 object-contain"
                />
              </div>
            </div>

            <h3 className="text-center text-lg text-gray-700 mb-1">Dreamcraft</h3>
            <h4 className="text-center text-xl font-medium text-[#333333] mb-6">Developer</h4>

            <p className="text-[#333333] text-sm leading-relaxed mb-6">
              Dreamcraft Developers is a premier Austin-based real estate development firm recognized for its strategic
              vision and expertise in identifying high-potential land opportunities. Specializing in innovative
              residential projects, the firm blends thoughtful planning with forward-thinking solutions to create
              sustainable, vibrant communities that enhance the urban landscape and foster long-term growth.
            </p>

            <div className="mt-auto">
              <p className="text-[#333333] text-sm">Visit:</p>
              <Link
                href="https://www.dreamcraftdevelopers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D35C37] hover:underline text-sm"
              >
                www.dreamcraftdevelopers.com
              </Link>
              <span className="text-[#333333] text-sm"> to learn more</span>
            </div>
          </div>

          {/* 3A */}
          <div className="bg-white p-8 flex flex-col">
            <div className="h-24 flex items-center justify-center mb-8">
              <div className="flex justify-center w-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uhX2eFhrYKCB5Vdy5XHr7fQb1Omxmi.png"
                  alt="3A Logo"
                  className="h-16 object-contain"
                />
              </div>
            </div>

            <h3 className="text-center text-lg text-gray-700 mb-1">3A</h3>
            <h4 className="text-center text-xl font-medium text-[#333333] mb-6">Developer</h4>

            <p className="text-[#333333] text-sm leading-relaxed mb-6">
              <span className="font-semibold">3A</span> is a dynamic real estate development firm with a diverse
              portfolio spanning residential, commercial, and recreational projects across Central Texas. Their
              developments include <span className="font-semibold">Castella Townhomes</span>, a thoughtfully designed
              residential community, and <span className="font-semibold">Latitude 31</span>, a master-planned
              residential and commercial hub in Belton. In the commercial sector, 3A is behind projects such as{" "}
              <span className="font-semibold">
                Shops at Hero Way, Republic Trails Commercial Center, Glen Market Commercial Center, and Arban Center
              </span>
              , all contributing to Leander's growing retail and business landscape. Additionally, they are shaping the
              future of sports and recreation with{" "}
              <span className="font-semibold">Top Spin Tennis Academy in Cedar Park</span> and{" "}
              <span className="font-semibold">Thoms Ranch Golf Facility</span>.
            </p>

            <div className="mt-auto">
              <p className="text-[#333333] text-sm">Visit:</p>
              <Link
                href="https://www.3adeveloper.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D35C37] hover:underline text-sm"
              >
                www.3adeveloper.com
              </Link>
              <span className="text-[#333333] text-sm"> to learn more.</span>
            </div>
          </div>

          {/* EKLUND GOMES */}
          <div className="bg-white p-8 flex flex-col">
            <div className="h-24 flex items-center justify-center mb-8">
              <div className="relative w-20 h-20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the_eklund_gomes_team_logo-KTw73EmuWQV78NUhEu3gaC5f36mBjK.jpeg"
                  alt="EKLUND GOMES Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <h3 className="text-center text-lg text-gray-700 mb-1">EKLUND GOMES</h3>
            <h4 className="text-center text-xl font-medium text-[#333333] mb-6">Exclusive Sales Agent</h4>

            <p className="text-[#333333] text-sm leading-relaxed mb-6">
              The EKLUND GOMES Team at Douglas Elliman Real Estate is a premier luxury real estate group with a presence
              across New York, California, Florida, Texas, and Nevada. Known for their exceptional service and expertise
              in high-end properties, the team brings unparalleled market knowledge and a sophisticated approach to real
              estate transactions. With a focus on urban living and luxury developments, EKLUND GOMES connects
              discerning clients with exceptional properties that match their lifestyle needs and investment goals.
              Their extensive experience and strategic marketing approach ensure optimal results for both buyers and
              sellers in competitive real estate markets.
            </p>

            <div className="mt-auto">
              <p className="text-[#333333] text-sm">Visit:</p>
              <Link
                href="https://www.elliman.com/eklundgomes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D35C37] hover:underline text-sm"
              >
                www.elliman.com/eklundgomes
              </Link>
              <span className="text-[#333333] text-sm"> to learn more.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

