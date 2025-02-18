import Layout from "@/components/Layout"
import Nav from "@/components/Nav"

export default function ProductLayout({ children }: { children: React.ReactNode }) {
 return (
    <Layout>
      <Nav />
      <main className="container mx-auto px-4 md:px-10 lg:px-16 xl:px-20 py-16">{children}</main>
    </Layout>
  )
}