export default function LocationDetailsSection() {
  const locationAdvantages = [
    {
      title: "PROXIMITY",
      description:
        "Just minutes from downtown Leander and a short drive to Austin, offering the perfect balance of small-town charm and big-city convenience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
    },
    {
      title: "CONNECTIVITY",
      description:
        "Easy access to major highways and public transportation options, making commuting and travel a breeze for residents.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      ),
    },
    {
      title: "AMENITIES",
      description:
        "Surrounded by shopping centers, restaurants, parks, and entertainment venues, providing everything you need within reach.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-[#faf8f3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 text-[#C19A50]">STRATEGIC LOCATION</h2>
          <div className="w-16 h-1 bg-[#D35C37] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">
            Castella Court's prime location offers unparalleled convenience and access to everything Leander and the
            surrounding area has to offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {locationAdvantages.map((advantage, index) => (
            <div key={index} className="bg-white p-8 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#D35C37] text-white flex items-center justify-center mb-6">
                {advantage.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-light mb-4 text-[#333333]">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 sm:mt-20 md:mt-24 bg-gray-200 aspect-[16/9] w-full flex items-center justify-center">
          <div className="text-gray-500 text-center p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-4"
            >
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
              <line x1="8" y1="2" x2="8" y2="18"></line>
              <line x1="16" y1="6" x2="16" y2="22"></line>
            </svg>
            <h3 className="text-xl font-medium mb-2">Interactive Map</h3>
            <p>Add an interactive map or location diagram here to showcase Castella Court's strategic location.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

