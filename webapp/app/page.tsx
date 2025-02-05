import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Terminal, Book } from "lucide-react"
import { Logo } from "@/components/Logo"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FF46BC]/5">
      <div className="container mx-auto px-4 py-20">
        {/* <div className="flex items-center justify-center mb-12">
          <Logo className="w-16 h-16" />
        </div> */}

        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* <h1 className="text-6xl font-bold bg-gradient-to-r from-[#FF46BC] to-purple-600 text-transparent bg-clip-text">
            RizzScript
          </h1> */}
           <h1 className="text-6xl font-bold text-[#FF46BC] ">
            RizzScript
          </h1>
          <p className="text-2xl text-gray-600">The programming language that&apos;s got more game than your ex 😎</p>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 font-mono text-sm">
            <pre className="text-left">
              <code>{`yo dawg sayHello() {
  spittin("no cap fr fr")
  slide back wit "stay frosty"
}`}</code>
            </pre>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <Link href="/playground">
              <Button size="lg" className="bg-[#FF46BC] hover:bg-[#FF46BC]/90">
                Try Online <Terminal className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button size="lg" variant="outline" className="border-[#FF46BC] text-[#FF46BC] hover:bg-[#FF46BC]/10">
                Read Docs <Book className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-32 grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="No Cap Syntax"
            description="Write JavaScript with that extra rizz. Turn boring old functions into straight fire code."
          />
          <FeatureCard
            title="Real One Energy"
            description="Full JavaScript compatibility. If it works in JS, it works in RizzScript (just with more style)."
          />
          <FeatureCard
            title="Bussin' Editor"
            description="Code with confidence using our built-in editor with syntax highlighting and live preview."
          />
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-[#FF46BC]/20 hover:border-[#FF46BC] transition-colors">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

