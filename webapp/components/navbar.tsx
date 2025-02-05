import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/Logo"

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-neutral-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Logo />
            <span className="text-xl font-bold ml-2">
              <span className="text-[#FF46BC]">RizzScript</span>
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/docs">
              <Button variant="ghost" className="hover:bg-pink-100">Docs</Button>
            </Link>
            <Link href="/playground">
              <Button variant="ghost" className="hover:bg-pink-100">Editor</Button>
            </Link>
            <a href="https://github.com/Hackclub-OC/RizzScript" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="hover:bg-pink-100">GitHub</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

