"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, ChevronDown, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { usePathname, useRouter } from "next/navigation"

const navItems = [
  {
    title: "RESIDENCES",
    href: "/residences",
    hasDropdown: true,
    dropdownItems: [
      { title: "THE VALENCIA", href: "/residences#valencia-plans" },
      { title: "THE MARBELLA", href: "/residences#marbella-plans" },
      { title: "INTERIOR FINISHES", href: "/residences#interior-finishes" },
    ],
  },
  {
    title: "GALLERY",
    href: "/gallery",
    hasDropdown: false,
  },
  { title: "LOCATION", href: "/location", hasDropdown: false },
  { title: "LIFESTYLE", href: "/lifestyle", hasDropdown: false },
  { title: "TEAM", href: "/team", hasDropdown: false },
  { title: "CONTACT", href: "/contact", hasDropdown: false },
]

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [scrollingUp, setScrollingUp] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const lastScrollY = useRef(0)
  const residencesRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()
  const [isNavigatingToResidences, setIsNavigatingToResidences] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)

  // On initial load, check if we're on the residences page
  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false)
      if (pathname === "/residences") {
        setActiveItem("RESIDENCES")
      }
    }
  }, [initialLoad, pathname])

  // Handle navigation to residences
  useEffect(() => {
    if (isNavigatingToResidences && pathname === "/residences") {
      setActiveDropdown("RESIDENCES")
      setActiveItem("RESIDENCES")
      setIsNavigatingToResidences(false)
    }
  }, [isNavigatingToResidences, pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if we're scrolling up or down
      if (currentScrollY < lastScrollY.current) {
        setScrollingUp(true)
      } else {
        setScrollingUp(false)
      }

      // Set scrolled state based on scroll position
      if (currentScrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update the last scroll position
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Set active item based on current path
  useEffect(() => {
    if (pathname === "/residences") {
      setActiveItem("RESIDENCES")
    } else if (pathname === "/gallery") {
      setActiveItem("GALLERY")
    } else if (pathname === "/location") {
      setActiveItem("LOCATION")
    } else if (pathname === "/lifestyle") {
      setActiveItem("LIFESTYLE")
    } else if (pathname === "/team") {
      setActiveItem("TEAM")
    } else if (pathname === "/contact") {
      setActiveItem("CONTACT")
    } else {
      setActiveItem(null)
    }
  }, [pathname])

  // Modify the handleNavItemClick function to ensure scrolling to top
  const handleNavItemClick = (title: string) => {
    if (title === "RESIDENCES") {
      handleResidencesClick()
    } else {
      setActiveItem(title)
      setActiveDropdown(null)
      // Scroll to top when navigating to a new page
      window.scrollTo(0, 0)
    }
  }

  // Update handleResidencesClick to scroll to top when navigating to residences page
  const handleResidencesClick = () => {
    if (pathname !== "/residences") {
      // Set flag that we're navigating to residences
      setIsNavigatingToResidences(true)
      // Navigate to residences page
      router.push("/residences")
      // Scroll to top
      window.scrollTo(0, 0)
    } else {
      // Toggle dropdown if already on residences page
      setActiveItem("RESIDENCES")
      if (activeDropdown === "RESIDENCES") {
        setActiveDropdown(null)
      } else {
        setActiveDropdown("RESIDENCES")
      }
    }
  }

  // Handle section navigation for residences dropdown
  const handleResidenceSectionNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()

    // If we're already on the residences page
    if (pathname === "/residences") {
      // Find the section and scroll to it
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
      setActiveDropdown(null)
    } else {
      // Navigate to residences page with the hash
      router.push(`/residences#${sectionId}`)
    }
  }

  // Direct handler for gallery section navigation
  const handleSectionNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()

    // If we're already on the gallery page
    if (pathname === "/gallery") {
      // Find the section and scroll to it
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
      setActiveDropdown(null)
    } else {
      // Navigate to gallery page with the hash
      router.push(`/gallery#${sectionId}`)
    }
  }

  // Determine navbar height and logo size based on scroll state
  const navbarHeight = !scrolled || scrollingUp ? "h-24 sm:h-28 md:h-32" : "h-16 sm:h-18 md:h-20"
  const logoHeight = !scrolled || scrollingUp ? "h-24 sm:h-28 md:h-32" : "h-16 sm:h-18 md:h-20"
  const logoWidth = !scrolled || scrollingUp ? 300 : 200
  const logoHeightProp = !scrolled || scrollingUp ? 300 : 200

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#faf8f3] border-b border-[#e6e6e6]",
        scrolled ? "shadow-sm" : "",
      )}
    >
      <div className="relative bg-[#faf8f3] bg-opacity-95 backdrop-blur-sm">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>

        <div className="container mx-auto px-4 relative">
          <div className={`flex items-center justify-between transition-all duration-300 ${navbarHeight}`}>
            {/* Mobile menu button */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="md:hidden flex items-center justify-center p-2 z-50" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-[#d35c37]" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px] bg-[#faf8f3]">
                <div className="py-6 flex flex-col h-full">
                  <div className="px-2">
                    <h2 className="text-xl font-medium mb-6 text-[#d35c37]">Castella Court</h2>
                  </div>
                  <nav className="flex-1">
                    {navItems.map((item) => (
                      <div key={item.title} className="border-b border-[#e6e6e6]">
                        {item.hasDropdown ? (
                          <Accordion type="single" collapsible>
                            <AccordionItem value={item.title} className="border-none">
                              <AccordionTrigger
                                className="py-4 px-2 text-sm font-medium hover:text-[#d35c37] transition-colors"
                                onClick={() => {
                                  if (item.title === "RESIDENCES" && pathname !== "/residences") {
                                    setIsNavigatingToResidences(true)
                                    router.push("/residences")
                                  }
                                }}
                              >
                                {item.title}
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="pl-4 pb-2">
                                  {item.dropdownItems?.map((dropdownItem) => {
                                    // Extract section ID from href
                                    const sectionId = dropdownItem.href.split("#")[1]

                                    return (
                                      <a
                                        key={dropdownItem.title}
                                        href={dropdownItem.href}
                                        className="block py-3 text-sm text-gray-700 hover:text-[#d35c37] transition-colors"
                                        onClick={(e) => {
                                          if (item.title === "RESIDENCES") {
                                            handleResidenceSectionNavigation(e, sectionId)
                                          } else if (item.title === "GALLERY") {
                                            handleSectionNavigation(e, sectionId)
                                          }
                                          setOpen(false)
                                        }}
                                      >
                                        {dropdownItem.title}
                                      </a>
                                    )
                                  })}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          // Update the mobile menu link click handler to scroll to top
                          <Link
                            href={item.href}
                            className="block py-4 px-2 text-sm font-medium hover:text-[#d35c37] transition-colors"
                            onClick={() => {
                              setOpen(false)
                              window.scrollTo(0, 0)
                            }}
                          >
                            {item.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                  <div className="mt-auto pt-6 px-2">
                    <div className="flex space-x-4">
                      <Link
                        href="https://www.facebook.com/profile.php?id=61574186376541"
                        className="text-gray-700 hover:text-[#d35c37] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="h-5 w-5" />
                      </Link>
                      <Link
                        href="https://www.instagram.com/castellacourt/"
                        className="text-gray-700 hover:text-[#d35c37] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Left navigation items */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8 w-1/3 justify-end pl-4">
              <div className="relative group" ref={residencesRef}>
                <button
                  className={`flex items-center text-sm lg:text-base font-bold transition-colors ${
                    activeItem === "RESIDENCES" ? "text-black" : "text-[#d35c37] hover:text-black"
                  }`}
                  onClick={handleResidencesClick}
                >
                  RESIDENCES
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                </button>

                {/* Dropdown for RESIDENCES - positioned directly under the button */}
                {activeDropdown === "RESIDENCES" && (
                  <div className="absolute left-0 top-full mt-1 z-40 w-64 bg-white bg-opacity-80 backdrop-blur-sm shadow-lg">
                    {/* Orange accent line */}
                    <div className="h-1 bg-[#d35c37] w-full"></div>

                    <div className="py-4">
                      {navItems[0].dropdownItems?.map((dropdownItem) => {
                        // Extract section ID from href
                        const sectionId = dropdownItem.href.split("#")[1]

                        return (
                          <a
                            key={dropdownItem.title}
                            href={dropdownItem.href}
                            className="block px-6 py-3 text-lg text-black hover:text-[#d35c37] transition-colors font-light tracking-wider"
                            onClick={(e) => handleResidenceSectionNavigation(e, sectionId)}
                          >
                            {dropdownItem.title}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
              <div className="relative group">
                <Link
                  href="/gallery"
                  className={`text-sm lg:text-base font-bold transition-colors ${
                    activeItem === "GALLERY" ? "text-black" : "text-[#d35c37] hover:text-black"
                  }`}
                  onClick={() => handleNavItemClick("GALLERY")}
                >
                  GALLERY
                </Link>
              </div>
              <Link
                href="/location"
                className={`text-sm lg:text-base font-bold transition-colors ${
                  activeItem === "LOCATION" ? "text-black" : "text-[#d35c37] hover:text-black"
                }`}
                onClick={() => handleNavItemClick("LOCATION")}
              >
                LOCATION
              </Link>
            </div>

            {/* Logo (center) */}
            <div className="flex items-center justify-center w-full md:w-1/3">
              {/* Also update the logo click to scroll to top */}
              <Link href="/" className="block" onClick={() => window.scrollTo(0, 0)}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Castell%20Court-poR7demx6FAWSYeSFsEaDUNmy0UHdk.svg"
                  alt="Castella Court"
                  width={logoWidth}
                  height={logoHeightProp}
                  className={`w-auto object-contain transition-all duration-300 ${logoHeight}`}
                />
              </Link>
            </div>

            {/* Right navigation items */}
            <div className="hidden md:flex items-center justify-start space-x-4 lg:space-x-8 w-1/3 pl-4">
              <Link
                href="/lifestyle"
                className={`text-sm lg:text-base font-bold transition-colors ${
                  activeItem === "LIFESTYLE" ? "text-black" : "text-[#d35c37] hover:text-black"
                }`}
                onClick={() => handleNavItemClick("LIFESTYLE")}
              >
                LIFESTYLE
              </Link>
              <Link
                href="/team"
                className={`text-sm lg:text-base font-bold transition-colors ${
                  activeItem === "TEAM" ? "text-black" : "text-[#d35c37] hover:text-black"
                }`}
                onClick={() => handleNavItemClick("TEAM")}
              >
                TEAM
              </Link>
              <Link
                href="/contact"
                className={`text-sm lg:text-base font-bold transition-colors ${
                  activeItem === "CONTACT" ? "text-black" : "text-[#d35c37] hover:text-black"
                }`}
                onClick={() => handleNavItemClick("CONTACT")}
              >
                CONTACT
              </Link>
            </div>

            {/* Social icons */}
            <div className="hidden md:flex items-center space-x-2 absolute right-4">
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
          </div>
        </div>
      </div>
    </header>
  )
}

