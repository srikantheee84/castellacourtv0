import Image from 'next/image'
import Link from 'next/link'

export default function TeamContactSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
            {/* Savannah Astani */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
                <Image
                  src="/images/savannah-astani.png"
                  alt="Savannah Astani"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="text-3xl mb-2 tracking-[0.2em] uppercase font-light">
                Savannah Astani
              </h2>
              <p className="text-lg text-gray-600 mb-2 tracking-wider font-light">
                Sales Agent
              </p>
              <p className="text-lg text-gray-800 mb-1 tracking-wider font-light">
                M: 760.607.2925
              </p>
              <a 
                href="mailto:Savannah.Astani@elliman.com"
                className="text-lg text-gray-800 hover:text-[#D35C37] transition-colors tracking-wider font-light"
              >
                Savannah.Astani@elliman.com
              </a>
            </div>

            {/* Alexander Korn */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
                <Image
                  src="/images/alexander-korn.png"
                  alt="Alexander Korn"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="text-3xl mb-2 tracking-[0.2em] uppercase font-light">
                Alexander Korn
              </h2>
              <p className="text-lg text-gray-600 mb-2 tracking-wider font-light">
                Sales Agent
              </p>
              <p className="text-lg text-gray-800 mb-1 tracking-wider font-light">
                M: 818.324.5438
              </p>
              <a 
                href="mailto:Alex.Korn@elliman.com"
                className="text-lg text-gray-800 hover:text-[#D35C37] transition-colors tracking-wider font-light"
              >
                Alex.Korn@elliman.com
              </a>
            </div>
          </div>

          {/* Team Logo */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl">
              <Image
                src="/images/eklund-gomes-team.png"
                alt="The Eklund | Gomes Team at Douglas Elliman Real Estate"
                width={823}
                height={202}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 