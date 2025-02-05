import type React from "react"

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`w-10 h-10 bg-[#FF46BC] flex items-end justify-center rounded-lg pl-1 font-bold text-xl text-white ${className}`}
    >
      RS
    </div>
  )
}

