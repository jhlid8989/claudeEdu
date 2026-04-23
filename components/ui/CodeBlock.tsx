"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "json" }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{
        borderRadius: "1rem",
        border: "1px solid rgb(51 65 85 / 0.6)",
        fontSize: "0.8rem",
        lineHeight: "1.7",
        margin: 0,
        background: "#0a0f1e",
        padding: "1.5rem",
      }}
      showLineNumbers={false}
    >
      {code}
    </SyntaxHighlighter>
  );
}
