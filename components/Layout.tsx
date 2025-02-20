import { useRouter } from "next/router"
import type React from "react"
import Head from "next/head"
import Link from "next/link"

type LayoutProps = {
 children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: LayoutProps) {
  const router = useRouter()

  function getLinkClasses(pathname: string): string {
    return router.pathname === pathname
      ? "font-semibld text-black"
      : "hover:underline"
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
            <li>
              <Link href="/" className={getLinkClasses("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={getLinkClasses("/about")}>
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className={getLinkClasses("/products")}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className={getLinkClasses("/contact")}>
                Contact
              </Link>
            </li>
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