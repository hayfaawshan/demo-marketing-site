import Image from "next/image"
import Layout from "../components/Layout"
import Link from "next/link"

export default function Careers() {
 return (
    <Layout title="Careers">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          We're always looking for talented and passionate individuals to join our team. If you're excited about the
          future of technology and innovation, we'd love to hear from you!
        </p>
        <Link
          href="https://example.com/careers"
          className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors"
        >
          See Our Open Positions
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Work With Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-center mb-4">
              <div className="bg-orange-100 rounded-full p-4 inline-block mb-4">
                <svg
                  className="w-12 h-12 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
            </div>
            <p>
              Contribute to building products at the forefront of technology. Your ideas can shape the future of digital
              innovation.
            </p>
          </div>
          <div>
            <div className="text-center mb-4">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <svg
                  className="w-12 h-12 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
            </div>
            <p>
              We believe happy employees produce the best work. Enjoy a flexible working environment that supports your
              personal life.
            </p>
          </div>
          <div>
            <div className="text-center mb-4">
              <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
            </div>
            <p>
              Grow with us through professional development programs, mentorship, and a clear career progression path.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4 italic">
              "Working here has been such a fulfilling experience. The team is supportive, and I've had the opportunity
              to tackle exciting challenges."
            </p>
            <p className="font-semibold">- Alex Johnson, Senior Developer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4 italic">
              "TechCorp's commitment to innovation and the well-being of its employees makes this an incredible place to
              grow and thrive."
            </p>
            <p className="font-semibold">- Sasha Williams, Product Manager</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="London cityscape"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">About London</h2>
            <p className="mb-4">
              Our London office places you at the heart of one of the world's most vibrant cities. From history to
              innovation, London offers a rich blend of culture and business, making it an exciting place to live and
              work.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">We're Hiring!</h2>
        <Link
          href="https://example.com/careers"
          className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors"
        >
          Apply Now
        </Link>
      </section>
    </Layout>
  )
}