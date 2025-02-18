import Head from "next/head"
import Link from "next/link"

interface LayoutProps {
  title?: string
  children: React.ReactNode
}

export default function Layout({ children, title = "TechCorp" }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="bg-gray-200 py-3 px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold text-blue-600 hover:underline">
            TechCorp
          </Link>
          <nav className="space-x-4">
            <Link href="/about" className="text-gray-700 hover:text-black">
              About
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-black">
              Products
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black">
              Contact
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-black">
              Careers
            </Link>
          </nav>
        </header>

        <main className="flex-grow px-4 py-16">{children}</main>

        <footer className="bg-gray-200 py-4 px-4 text-center">
          <p className="text-sm text-gray-600">&copy; 2023 TechCorp. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}