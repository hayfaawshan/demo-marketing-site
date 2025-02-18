import { useEffect, useState } from "react"
import Link from "next/link"

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav
      className={`bg-white border-b border-gray-200 px-2 sm:px-4 py-2.5 fixed top-0 left-0 right-0 z-50 ${
        sticky ? "shadow-lg" : ""
      }`}
    >
      <div className="container flex flex-wrap justify-between items-center">
       <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-bold whitespace-nowrap">TechCorp</span>
        </Link>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${menuOpen ? "" : "hidden"}`} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
           <li onClick={handleNavLinkClick}>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500 dark:border-gray-700"
              >
                Home
              </Link>
            </li>
            <li onClick={handleNavLinkClick}>
              <Link
                href="/(about)"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500 dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li onClick={handleNavLinkClick}>
              <Link
                href="/(product)"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500 dark:border-gray-700"
              >
                Products
              </Link>
            </li>
            <li onClick={handleNavLinkClick}>
              <Link
                href="/(contact)"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500 dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}