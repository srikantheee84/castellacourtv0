import Link from "next/link"
import SectionHeader from "@/components/ui/section-header"
import ContactForm from "@/components/contact-form"

export default function ContactCTASection() {
  return (
    <section className="pt-16 sm:pt-20 md:pt-24 pb-0 px-4 bg-white border-b-0 mb-0">
      <div className="max-w-5xl mx-auto text-center">
        {/* Icons Row */}
        <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 mb-10 sm:mb-12">
          {/* Airplane Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#D35C37] flex items-center justify-center">
            <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 16.32C22 16.32 20.5 20 16 20C11.5 20 10 16.5 10 12C10 7.5 11.5 4 16 4C20.5 4 22 7.68 22 7.68"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 20C16 20 14.5 16.5 14.5 12C14.5 7.5 16 4 16 4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M10 12H22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12H6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Building Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#C19A50] flex items-center justify-center">
            <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 22H23" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M19 22V4C19 3.46957 18.7893 2.96086 18.4142 2.58579C18.0391 2.21071 17.5304 2 17 2H7C6.46957 2 5.96086 2.21071 5.58579 2.58579C5.21071 2.96086 5 3.46957 5 4V22"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22V18C9 17.4696 9.21071 16.9609 9.58579 16.5858C9.96086 16.2107 10.4696 16 11 16H13C13.5304 16 14.0391 16.2107 14.4142 16.5858C14.7893 16.9609 15 17.4696 15 18V22"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M9 6H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 6H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 10H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 10H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Briefcase Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#C17A50] flex items-center justify-center">
            <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="6" width="18" height="15" rx="2" stroke="white" strokeWidth="1.5" fill="none" />
              <path
                d="M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Martini Glass Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#8A8B4B] flex items-center justify-center">
            <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 2L12 2L16 2L16 4C16 6.5 14 8.5 12 8.5C10 8.5 8 6.5 8 4L8 2Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path d="M12 8.5V19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 22H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Suitcase Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#3D7A7A] flex items-center justify-center">
            <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="7" width="16" height="13" rx="2" stroke="white" strokeWidth="1.5" />
              <path
                d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7"
                stroke="white"
                strokeWidth="1.5"
              />
              <path d="M16 13H16.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M12 13H12.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M8 13H8.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <SectionHeader title="LEARN MORE ABOUT CASTELLA COURT" accentColor="#C19A50" />

        {/* Description */}
        <p
          className="text-base sm:text-lg md:text-xl text-gray-700 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed"
          style={{
            fontFamily: "'Futura-Nueva', Futura, 'Trebuchet MS', Arial, sans-serif",
            letterSpacing: "0.02em",
            lineHeight: "1.8",
          }}
        >
          Schedule a private tour or fill out the form below to learn more about the limited remaining units at Castella
          Court. We can't wait to welcome you home to Castella Court at Leander!
        </p>

        {/* CTA Button */}
        <div className="mb-16">
          <Link href="/contact">
            <div
              className="inline-block bg-[#D35C37] hover:bg-[#B34D2E] text-white py-4 px-8 sm:px-10 text-lg sm:text-xl font-light tracking-wider transition-colors duration-300"
              style={{
                fontFamily: "'Futura-Nueva', Futura, 'Trebuchet MS', Arial, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              SCHEDULE A PRIVATE TOUR
            </div>
          </Link>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 md:p-12 pb-0 shadow-sm mb-0 border-b-0">
          <ContactForm accentColor="#D35C37" buttonText="SUBMIT" />
        </div>
      </div>
    </section>
  )
}

