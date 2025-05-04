import "../styles/globals.css"

import type { Metadata } from "next"

import Layout from "../components/Layout"

export const metadata: Metadata = {
  title: "TechCorp",
  description: "Revolutionizing the tech industry with innovative solutions.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout title="">
          <>{children}</>
        </Layout>
      </body>
    </html>
  )
}