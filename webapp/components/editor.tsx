"use client"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Terminal, Play, HelpCircle, X } from "lucide-react"
// import Prism from "prismjs"
import hljs from "highlight.js"

// Declare Prism as a global variable
declare global {
  interface Window {
    Prism?: {
      highlightElement: (element: HTMLElement) => void;
      languages: Record<string, unknown>;
    };
  }
}

const Prism = typeof window !== 'undefined' ? window.Prism : undefined;

hljs.registerLanguage("rizzscript", function (hljs) {
  return {
    name: "RizzScript",
    keywords: {
      keyword: "function if else for while break continue try catch finally class import from const var let",
      literal: "true false null",
      built_in: "console log return"
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.COMMENT("//", "$"),
      hljs.inherit(hljs.APOS_STRING_MODE, { illegal: null }),
      hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null }),
      hljs.C_NUMBER_MODE
    ]
  }
})

// Updated transformations to include symbols
const rizzTransformations = {
  // Keywords
  function: "yo dawg",
  return: "slide back wit",
  if: "chat is this real",
  "else if": "yo chat",
  else: "only in ohio",
  "console.log": "spittin",
  const: "no cap",
  var: "sus",
  let: "yo let me get",
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
  // Operators
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

// Enhanced syntax highlighting
if (typeof window !== 'undefined' && Prism) {
  Prism.languages.rizzscript = {
    comment: /\/\/.*|\/\*[\s\S]*?\*\//,
    string: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    keyword: {
      pattern:
        /\b(?:yo dawg|slide back wit|chat is this real|yo chat|only in ohio|spittin|no cap|sus|yo let me get|mewing|let him cook|hawk|tuah|spit on that thang|skibidi|glaze|lock in)\b/,
      alias: "keyword",
    },
    function: {
      pattern: /\b[a-z_]\w*(?=\()/i,
      alias: "function",
    },
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: {
      pattern: /(\s)(?:rizz|fanum tax|bussin|ratio|twin|sigma|beta|sigma twin|beta twin|fr fr|no shot|cap)(?=\s)/,
      lookbehind: true,
      alias: "operator",
    },
    variable: {
      pattern: /\b(?:no cap|sus|yo let me get)\b/,
      alias: "variable",
    },
    builtin: {
      pattern: /\b(?:spittin|slide back wit)\b/,
      alias: "builtin",
    },
    punctuation: {
      pattern: /[{}[\];(),.:]/,
      alias: "punctuation",
    },
  }
}

export default function Editor() {
  const [input, setInput] = useState(`yo dawg factorial(n) {
  chat is this real n twin 0 {
    slide back wit 1
  }
  slide back wit n bussin factorial(n fanum tax 1)
}
spittin(factorial(5))`)
  const [output, setOutput] = useState("")
  const [showTerminal, setShowTerminal] = useState(false)
  const editorRef = useRef<HTMLPreElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (editorRef.current && Prism) {
      editorRef.current.textContent = input
      Prism.highlightElement(editorRef.current)
    }
  }, [input])

  const transformBack = (rizzCode: string) => {
    let jsCode = rizzCode
    for (const [js, rizz] of Object.entries(rizzTransformations)) {
      jsCode = jsCode.replaceAll(rizz, js)
    }
    return jsCode
  }

  const executeRizzScript = () => {
    setShowTerminal(true)
    try {
      const jsCode = transformBack(input)
      const safeConsoleLog = (...args: unknown[]) => {
        setOutput((prev) => prev + args.join(" ") + "\n")
      }
      const context = {
        console: { log: safeConsoleLog },
      }
      const fn = new Function(
        "console",
        `
        "use strict";
        ${jsCode}
      `,
      )
      setOutput("")
      fn(context.console)
    } catch (error) {
      setOutput(`Error: ${error}`)
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    setInput(newValue)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault()
      const start = e.currentTarget.selectionStart
      const end = e.currentTarget.selectionEnd
      const newValue = input.substring(0, start) + "  " + input.substring(end)
      setInput(newValue)
      if (textareaRef.current) {
        textareaRef.current.value = newValue
        textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 2
      }
    }
  }

  return (
    <Card className="border-[#FF46BC]/20 backdrop-blur-sm bg-white relative rounded-lg overflow-hidden">
      <div className="border-b border-neutral-200 p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-neutral-600 text-sm">editor.riz</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const helpButton = document.getElementById("floating-help")
              if (helpButton) helpButton.click()
            }}
          >
            <HelpCircle className="h-4 w-4" />
          </Button>
          <Button className="bg-[#FF46BC] hover:bg-[#FF46BC]/90 gap-2" onClick={executeRizzScript}>
            <Play className="w-4 h-4" /> Run
          </Button>
        </div>
      </div>
      <div className="relative h-[calc(100vh-10rem)] overflow-hidden">
        <pre
          ref={editorRef}
          className="code-highlight absolute inset-0 p-4 font-mono text-sm overflow-auto pointer-events-none"
        >
          <code className="language-rizzscript">{input}</code>
        </pre>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          className="absolute inset-0 p-4 font-mono text-sm bg-transparent text-transparent caret-black resize-none focus:outline-none"
          style={{
            caretColor: "black",
            zIndex: 1,
          }}
        />
      </div>
      {showTerminal && (
        <div
          className="absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 transform transition-all duration-300 ease-out overflow-hidden"
          style={{
            maxHeight: "50%",
            transform: showTerminal ? "translateY(0)" : "translateY(100%)",
            opacity: showTerminal ? 1 : 0,
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#FF46BC]" />
              <span className="text-neutral-600 text-sm">Terminal</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowTerminal(false)}
              className="text-neutral-600 hover:text-neutral-900"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="font-mono text-sm text-black overflow-auto" style={{ maxHeight: "200px" }}>
            {output || "> Running rizzscript..."}
          </div>
        </div>
      )}
    </Card>
  )
}
