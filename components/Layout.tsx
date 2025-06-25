import type React from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

type LayoutProps = {
  children: React.ReactNode
  title: string
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children, title }: LayoutProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title} | TechCorp</title>
        <meta name="description" content="TechCorp - Innovative Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            TechCorp
          </Link>
          <ul className="flex space-x-4">
            {navItems.map((item) => {
              // Exact match for "/" only, otherwise startsWith for subpaths
              const isActive =
                item.href === "/"
                  ? router.pathname === "/"
                  : router.pathname.startsWith(item.href);

              const baseClasses =
                "hover:underline transition-colors";
              const activeClasses = "font-bold text-white underline";
              const inactiveClasses = "text-gray-300";

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      baseClasses +
                      " " +
                      (isActive ? activeClasses : inactiveClasses)
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
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

