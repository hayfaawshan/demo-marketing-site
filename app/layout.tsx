import type React from "react"

import NavBar from "~/components/NavBar"
import Footer from "~/components/Footer"
import { NextAuthProvider } from "./providers"

import "~/styles/globals.css"

export const metadata = {
  title: {
    template: "%s | TechCorp",
    default: "TechCorp",
  },
  description:
    "Explore TechCorp's cutting-edge technology solutions designed to transform industries and improve lives. Empowering your business through innovative products and services.",
}

interface Props {
  children: React.ReactNode
}

export default function Layout(props: Props) {
  return (
    <NextAuthProvider>
      <NavBar />
      <main className="container mx-auto px-4 md:px-0">{props.children}</main>
      <Footer />
    </NextAuthProvider>
  )
}