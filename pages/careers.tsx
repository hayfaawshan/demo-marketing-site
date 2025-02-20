import Layout from "../components/Layout"
import Image from "next/image"

export default function Careers() {
 return (
    <Layout title="Careers">
      <h1 className="text-4xl font-bold mb-6">Join the TechCorp Family</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Why Work With Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Competitive Salaries</h3>
            <p>We offer top-tier compensation packages to attract and retain the best talent.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Health & Wellness</h3>
            <p>Comprehensive health plans, gym memberships, and wellness programs to keep you healthy and happy.</p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Flexible Work Environment</h3>
            <p>Work from our state-of-the-art offices or from the comfort of your home, with flexible hours.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Ongoing Learning</h3>
            <p>Access to courses, workshops, and conferences to keep growing your skills and career.</p>
          </div>
          <div className="bg-red-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Diverse Teams</h3>
            <p>We believe in diversity and inclusion, creating a rich environment of different perspectives and ideas.</p>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Innovative Projects</h3>
            <p>Be part of revolutionary projects that shape the future of technology and society.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">What Our Team Says</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Employee 1"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <blockquote className="italic">"TechCorp empowers me to do my best work and encourages constant personal growth."</blockquote>
            <p className="mt-4 font-semibold">Alice Johnson</p>
            <p className="text-gray-600">Senior Software Engineer</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Employee 2"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <blockquote className="italic">"The collaborative culture and innovative projects here make every day exciting."</blockquote>
            <p className="mt-4 font-semibold">David Lee</p>
            <p className="text-gray-600">Product Designer</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Employee 3"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <blockquote className="italic">"It’s amazing to be part of a team that’s shaping the future of technology."</blockquote>
            <p className="mt-4 font-semibold">Maria Gonzales</p>
            <p className="text-gray-600">Marketing Manager</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Life in London</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Image src="/placeholder.svg?height=400&width=600" alt="London" width={600} height={400} className="rounded-lg shadow-md" />
          <div>
            <p className="mb-4">
              Enjoy the vibrant culture of London while working with us. Our office is situated in the heart of the city, providing
              easy access to everything this dynamic metropolis has to offer.
            </p>
            <p className="mb-4">
              From world-class restaurants and historic landmarks to parks and theaters, you'll never run out of things to do
              and experience. Plus, London’s public transportation system will get you anywhere you need to go quickly and easily.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center bg-blue-200 p-12 rounded-lg">
        <h2 className="text-4xl font-semibold mb-6">We're Hiring!</h2>
        <p className="mb-6">Ready to embark on an exciting new chapter of your career? Click below to view our open positions and apply now.</p>
        <a
          href="https://techcorp.com/careers"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-600"
        >
          Explore Careers
        </a>
      </section>
    </Layout>
  )
}