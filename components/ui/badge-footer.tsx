import type React from "react"

export type BadgeProps = {
  text: string
  url: string
}

export function Badge({ text, url }: BadgeProps) {
  return (
    <a href={url} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      {text}
    </a>
  )
}

export type HighlightProps = {
  children: React.ReactNode
}

export function Highlight({ children }: HighlightProps) {
  return <div className="mt-4">{children}</div>
}