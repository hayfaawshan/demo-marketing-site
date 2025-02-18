import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { NavigationMenu } from "@/components/ui/navigation-menu"
import { ThemeProvider } from "@/components/theme-provider"

import Footer from "../components/Footer" // Adjust path if needed

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
          --font-mono: ${fontMono.style.fontFamily};
        }
      `}</style>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased"
            // `${fontSans.variable} ${fontMono.variable}`
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <NavigationMenu />
              <div className="flex-grow">{children}</div>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}