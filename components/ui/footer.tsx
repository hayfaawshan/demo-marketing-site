"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export function Footer({ className, ...props }: FooterProps) {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={cn("bg-gray-200 p-4 mt-auto", className)} {...props}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-700">
            © {currentYear} TechCorp. All rights reserved.
          </div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
