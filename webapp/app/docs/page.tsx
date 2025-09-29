"use client"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight } from "lucide-react"

const examples = {
  Variables: {
    description: "In RizzScript, we keep it real with our variable declarations.",
    js: `const x = 5;
var y = 10;
let z = 15;`,
    rizz: `no cap x = 5;
sus y = 10;
yo let me get z = 15;`,
  },
  Functions: {
    description: "Functions in RizzScript are all about that swagger.",
    js: `function greet(name) {
  console.log("Hello " + name)
  return "Done"
}`,
    rizz: `yo dawg greet(name) {
  spittin("Hello " rizz name)
  slide back wit "Done"
}`,
  },
  Conditionals: {
    description: "RizzScript keeps it real with the decision-making process.",
    js: `if (x > 0) {
  console.log("Positive")
} else if (x < 0) {
  console.log("Negative")
} else {
  console.log("Zero")
}`,
    rizz: `chat is this real x sigma 0 {
  spittin("Positive")
} yo chat x beta 0 {
  spittin("Negative")
} only in ohio {
  spittin("Zero")
}`,
  },
  Loops: {
    description: "Looping in RizzScript is all about that smooth flow.",
    js: `for (let i = 0; i < 5; i++) {
  if (i === 3) continue
  console.log(i)
}`,
    rizz: `mewing (yo let me get i = 0; i beta 5; i++) {
  chat is this real i twin 3 { edge }
  spittin(i)
}`,
  },
  Classes: {
    description: "Classes in RizzScript bring that object-oriented swag.",
    js: `class Person {
  constructor(name) {
    this.name = name
  }
  sayHello() {
    console.log("Hey, I&apos;m " + this.name)
  }
}`,
    rizz: `skibidi Person {
  constructor(name) {
    unc.name = name
  }
  sayHello() {
    spittin("Hey, I&apos;m " rizz unc.name)
  }
}`,
  },
  Operators: {
    description: "RizzScript operators are all about that drip.",
    js: `// Arithmetic
a + b
a - b
a * b
a / b
// Comparison
a === b
a > b
a < b
a >= b
a <= b
// Logical
a && b
a || b
!a`,
    rizz: `// Arithmetic
a rizz b
a fanum tax b
a bussin b
a ratio b
// Comparison
a twin b
a sigma b
a beta b
a sigma twin b
a beta twin b
// Logical
a fr fr b
a no shot b
cap a`,
  },
  WhileLoop: {
    description: "While loops in RizzScript keep cooking until they&apos;re done.",
    js: `let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`,
    rizz: `yo let me get i = 0;
let him cook (i beta 5) {
  spittin(i);
  i++;
}`,
  },
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#FF46BC]/5">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-[#FF46BC] rounded-lg flex items-center justify-center text-white font-bold">R</div>
          <h1 className="text-3xl font-semibold text-neutral-700">Documentation</h1>
        </div>
        <div className="grid gap-8 max-w-4xl mx-auto">
          <Card className="p-6 rounded-3xl border-[#FF46BC]/20">
            <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
            <p className="text-gray-600 mb-4">
              RizzScript is JavaScript with extra sauce. Every boring JavaScript keyword has been replaced with
              something more entertaining. It&apos;s all about bringing that swagger to your code!
            </p>
            <p className="text-sm text-gray-500">
              Pro tip: Press <kbd className="px-2 py-1 bg-neutral-100 rounded">Ctrl</kbd> +{" "}
              <kbd className="px-2 py-1 bg-neutral-100 rounded">/</kbd> to open the cheatsheet anywhere!
            </p>
          </Card>
          <Card className="rounded-3xl border-[#FF46BC]/20">
            <Accordion type="single" collapsible>
              {Object.entries(examples).map(([title, { description, js, rizz }]) => (
                <AccordionItem key={title} value={title} className="px-6 py-2 first:rounded-t-3xl last:rounded-b-3xl">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FF46BC]" />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">JavaScript</h4>
                        <pre className="bg-neutral-100 text-black p-4 rounded-xl text-sm">
                          <code className="language-javascript">{js}</code>
                        </pre>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">RizzScript</h4>
                        <pre className="bg-pink-100 text-black p-4 rounded-xl text-sm">
                          <code className="language-rizzscript">{rizz}</code>
                        </pre>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </div>
  )
}
