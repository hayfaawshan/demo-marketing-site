import "./globals.css"
import { Metadata } from "next"

export const metadata: Metadata = {
 title: "TechCorp Website",
  description: "TechCorp is a leading innovator in technology, offering cutting-edge solutions to transform industries.",
  viewport: "width=device-width, initial-scale=1",
  keywords: "TechCorp, technology, innovation, products",
}

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}