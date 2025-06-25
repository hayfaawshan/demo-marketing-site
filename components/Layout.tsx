import type React from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

type LayoutProps = {
  children: React.ReactNode
  title: string
}

const navItems: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
]

export default function Layout({ children, title }: LayoutProps) {
  const router = useRouter()
  const pathname = router.pathname

  // Helper: active if pathname matches or starts with href (but avoid "/" matching everything)
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title} | TechCorp</title>
        <meta name="description" content="TechCorp - Innovative Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            TechCorp
          </Link>
          <ul className="flex space-x-4">
            {navItems.map(({ href, label }) => {
              const active = isActive(href)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={
                      active
                        ? "font-bold underline text-white"
                        : "text-gray-200 hover:underline hover:text-white transition-colors"
                    }
                    {...(active ? { "aria-current": "page" } : {})}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      <footer className="bg-gray-200 p-4">
        <div className="container mx-auto text-center">© 2023 TechCorp. All rights reserved.</div>
      </footer>
    </div>
  )
}

