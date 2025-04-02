interface SectionHeaderProps {
  title: string
  subtitle?: string
  accentColor?: string
  align?: "center" | "left" | "right"
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  accentColor = "#C19A50",
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center" : align === "left" ? "text-left" : "text-right"

  return (
    <div className={`mb-10 sm:mb-12 md:mb-16 ${textAlign} ${className}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6" style={{ color: accentColor }}>
        {title}
      </h2>

      {subtitle && <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg px-2">{subtitle}</p>}

      {!subtitle && (
        <div className="w-16 sm:w-20 h-1 mx-auto mb-6 sm:mb-8" style={{ backgroundColor: accentColor }}></div>
      )}
    </div>
  )
}

