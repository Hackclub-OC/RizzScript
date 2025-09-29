"use client"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"
import { useEffect, useState } from "react"
import type React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const rizzTransformations = {
  const: "no cap",
  var: "sus",
  let: "yo let me get",
  function: "yo dawg",
  return: "slide back wit",
  if: "chat is this real",
  "else if": "yo chat",
  else: "only in ohio",
  "console.log": "spittin",
  for: "mewing",
  while: "let him cook",
  break: "just put the fries in the bag bro",
  continue: "edge",
  try: "hawk",
  catch: "tuah",
  finally: "spit on that thang",
  class: "skibidi",
  import: "glaze",
  from: "lock in",
  "+": "rizz",
  "-": "fanum tax",
  "*": "bussin",
  "/": "ratio",
  "===": "twin",
  ">": "sigma",
  "<": "beta",
  ">=": "sigma twin",
  "<=": "beta twin",
  "&&": "fr fr",
  "||": "no shot",
  "!": "cap",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <CheatSheet />
      </body>
    </html>
  )
}

const Footer = () => {
  return (
    <div className="text-sm mb-4 text-center">
          <p>
            Made with <span className="text-[#FF46BC]">💖</span> by{" "}
            <a
              href="https://x.com/IamNotOC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF46BC] italic hover:underline"
            >
              @OC
            </a>{" "}
            for fun.{" "}
            <a
              href="https://github.com/Hackclub-OC/RizzScript"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF46BC] hover:underline"
            >
              Check the Source Code
            </a>
          </p>
        </div>
  )
}

const CheatSheet = () => { 
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "/") {
        e.preventDefault()
        setOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="fixed bottom-4 left-4 z-50">
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                id="floating-help"
                variant="default"
                size="icon"
                className="rounded-full w-12 h-12 bg-[#FF46BC] hover:bg-[#FF46BC]/90 shadow-lg"
              >
                <HelpCircle className="h-6 w-6 text-white" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px]">
              <DialogHeader>
                <div className="flex justify-between items-center">
                  <DialogTitle className="text-lg text-gray-700">RizzScript Cheatsheet</DialogTitle>
                  
                </div>
                <DialogDescription className="text-sm text-muted-foreground">
                  Quick reference for RizzScript syntax
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="h-[60vh] rounded-md border p-4 mt-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-base">JavaScript</h3>
                      {Object.keys(rizzTransformations).map((js) => (
                        <div className="text-sm text-muted-foreground py-1 border-b border-gray-100" key={js}>
                          {js}
                        </div>
                      ))}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-base">RizzScript</h3>
                      {Object.values(rizzTransformations).map((rizz) => (
                        <div className="text-sm text-muted-foreground py-1 border-b border-gray-100" key={rizz}>
                          {rizz}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">Press Ctrl + / to open this cheatsheet</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
  )
  
}
