"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { Facebook } from "@/components/icons"
import { Instagram } from "@/components/icons"

export default function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  // Handle section navigation
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault()

    // If we're already on the gallery page
    if (pathname === "/gallery") {
      // Find the section and scroll to it
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Navigate to gallery page with the hash
      router.push(`/gallery#${sectionId}`)
    }
  }

  return (
    <footer
      className={`bg-[#f5f0e5] py-10 sm:py-12 relative z-10 w-full ${pathname === "/contact" ? "mt-0 pt-0" : ""}`}
    >
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row md:items-start max-w-[2000px] mx-auto">
          {/* Logo - Adjusted to be large but not extreme */}
          <div className="mb-8 md:mb-0 md:mr-24 lg:mr-28 xl:mr-32 md:-mt-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/castell-court-logo.svg"
                alt="Castell Court"
                width={1000}
                height={500}
                className="w-auto h-32 sm:h-40 md:h-48 lg:h-64"
                priority
              />
            </Link>
          </div>

          {/* Navigation - Adjusted to accommodate larger logo */}
          <div className="flex flex-wrap md:flex-1 md:justify-between md:pt-4">
            {/* RESIDENCES */}
            <div className="w-1/2 sm:w-1/3 md:w-auto mb-6 md:mb-0 md:pr-12 lg:pr-16 xl:pr-20">
              <h3 className="text-sm font-medium text-[#d35c37] mb-3 uppercase tracking-wider">Residences</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/residences/valencia" className="text-xs sm:text-sm text-gray-700 hover:text-[#d35c37]">
                    The Valencia
                  </Link>
                </li>
                <li>
                  <Link href="/residences/marbella" className="text-xs sm:text-sm text-gray-700 hover:text-[#d35c37]">
                    The Marbella
                  </Link>
                </li>
              </ul>
            </div>

            {/* GALLERY */}
            <div className="w-1/2 sm:w-1/3 md:w-auto mb-6 md:mb-0 md:pr-12 lg:pr-16 xl:pr-20">
              <h3 className="text-sm font-medium text-[#d35c37] mb-3 uppercase tracking-wider">Gallery</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="/gallery#residences"
                    className="text-xs sm:text-sm text-gray-700 hover:text-[#d35c37]"
                    onClick={(e) => handleSectionClick(e, "residences")}
                  >
                    Residences
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery#community"
                    className="text-xs sm:text-sm text-gray-700 hover:text-[#d35c37]"
                    onClick={(e) => handleSectionClick(e, "community")}
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery#lifestyle"
                    className="text-xs sm:text-sm text-gray-700 hover:text-[#d35c37]"
                    onClick={(e) => handleSectionClick(e, "lifestyle")}
                  >
                    Lifestyle
                  </a>
                </li>
              </ul>
            </div>

            {/* LOCATION */}
            <div className="w-1/2 sm:w-1/3 md:w-auto mb-6 md:mb-0 md:pr-12 lg:pr-16 xl:pr-20">
              <h3 className="text-sm font-medium text-[#d35c37] mb-3 uppercase tracking-wider">Community</h3>
              <Link href="/location" className="text-xs sm:text-sm text-gray-700 hover:text-[#d35c37]">
                View Location
              </Link>
            </div>

            {/* LIFESTYLE */}
            <div className="w-1/2 sm:w-1/3 md:w-auto mb-6 md:mb-0 md:pr-12 lg:pr-16 xl:pr-20">
              <h3 className="text-sm font-medium text-[#d35c37] mb-3 uppercase tracking-wider">Lifestyle</h3>
              <Link href="/lifestyle" className="text-xs sm:text-sm text-gray-700 hover:text-[#d35c37]">
                View Lifestyle
              </Link>
            </div>

            {/* TEAM */}
            <div className="w-1/2 sm:w-1/3 md:w-auto">
              <h3 className="text-sm font-medium text-[#d35c37] mb-3 uppercase tracking-wider">Team</h3>
              <Link href="/team" className="text-xs sm:text-sm text-gray-700 hover:text-[#d35c37]">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 mt-8 flex justify-center space-x-4">
        <Link
          href="https://www.facebook.com/profile.php?id=61574186376541"
          className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-[#d35c37] text-white rounded-none hover:bg-[#b34d2e] transition-colors"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="h-4 w-4 lg:h-5 lg:w-5" />
        </Link>
        <Link
          href="https://www.instagram.com/castellacourt/"
          className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-[#d35c37] text-white rounded-none hover:bg-[#b34d2e] transition-colors"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="h-4 w-4 lg:h-5 lg:w-5" />
        </Link>
      </div>

      {/* Copyright */}
      <div className="bg-[#d35c37] text-white py-3 sm:py-4 text-center text-xs sm:text-sm mt-8 w-full">
        <div className="w-full px-4">{new Date().getFullYear()} - CASTELLA COURT | All Rights Reserved.</div>
      </div>
    </footer>
  )
}

