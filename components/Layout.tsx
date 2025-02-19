import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"

import { Icons } from "../components/icons"

export const metadata: Metadata = {
  title: "TechCorp",
  description:
    "Explore our cutting-edge products designed to transform your digital life. From operating systems to cloud solutions, discover innovation at its finest.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techcorp.com", // Replace with your site's URL
    title: "TechCorp",
    description:
      "Explore our cutting-edge products designed to transform your digital life. From operating systems to cloud solutions, discover innovation at its finest.",
    images: [
      {
        url: "/opengraph-image.png", // Use a default image or dynamic image generation
        width: 1200,
        height: 630,
        alt: "TechCorp OpenGraph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtechcorphandle", // Replace with your site's Twitter handle
    creator: "@yourtechcorphandle", // Replace with your site's Twitter handle
    title: "TechCorp",
    description:
      "Explore our cutting-edge products designed to transform your digital life. From operating systems to cloud solutions, discover innovation at its finest.",
    images: [
      {
        url: "/twitter-image.png", // Use a default image or dynamic image generation
        alt: "TechCorp Twitter Image",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "android-chrome",
      url: "/android-chrome-192x192.png",
    },
  },
  manifest: "/site.webmanifest",
}

interface LayoutProps {
  children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: LayoutProps) {
  const router = useRouter()

  // Define CSS classes for active and non-active links
  const activeLinkClasses = "font-bold text-black"
  const nonActiveLinkClasses = "text-gray-600 hover:text-blue-700"

  return (
    <div>
      {/* Start of header */}
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="/logo.svg" alt="TechCorp Logo" width={100} height={40} priority />
            <nav className="hidden md:flex space-x-4">
              <Link href="/about" className={`transition-colors ${router.pathname === "/about" ? activeLinkClasses : nonActiveLinkClasses}`}>
                About
              </Link>
              <Link href="/products" className={`transition-colors ${router.pathname === "/products" ? activeLinkClasses : nonActiveLinkClasses}`}>
                Products
              </Link>
              <Link href="/contact" className={`transition-colors ${router.pathname === "/contact" ? activeLinkClasses : nonActiveLinkClasses}`}>
                Contact
              </Link>
            </nav>
          </div>
          <div id="search" className="flex items-center space-x-4">
            <Link href="https://github.com/shadcn/ui">
              <div className={cn(buttonVariants({ size: "sm" }))}>
                <Icons.gitHub className="mr-2 h-4 w-4" />
                <span>GitHub</span>
              </div>
            </Link>
          </div>
        </div>
      </header>
      {/* End of header */}

      <main className="container mx-auto px-4 md:my-16 sm:my-8 my-4 bg-white rounded-lg shadow-sm">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 border-t">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} TechCorp. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}