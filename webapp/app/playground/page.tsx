import Editor from "@/components/editor"

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FF46BC]/5 to-transparent">
      <div className="container mx-auto px-4 py-8">
        <Editor />
      </div>
    </div>
  )
}

