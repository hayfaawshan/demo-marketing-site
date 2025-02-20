import Image from "next/image"
import Layout from "../components/Layout"

function TestimonialCard({ name, title, text }) {
 return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="mb-4 italic">{text}</p>
      <p className="font-semibold">
        - {name}, {title}
      </p>
    </div>
  )
}

export default function Careers() {
  return (
    <Layout title="Careers">
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-6 text-center">Join Our Team</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          At TechCorp, we believe that success is powered by teamwork, innovation, and passion. We're constantly looking
          for talented individuals to join us in delivering cutting-edge solutions that shape the future.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
            <p>
              We understand that a balanced life is essential for a fulfilling career. Enjoy flexible working hours,
              remote work options, and abundant vacation time.
            </p>
          </div>
          <div className="text-center">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Growth</h3>
            <p>
              We're committed to your professional development. Take advantage of our training programs, mentorship
              opportunities, and career advancement pathways.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
              <svg
                className="w-12 h-12 text-purple-600"
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
            <h3 className="text-xl font-semibold mb-2">Employee Benefits</h3>
            <p>
              We offer comprehensive healthcare coverage, retirement plans, and competitive salaries to ensure your
              well-being and financial security.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">What Our Team Members Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            name="Sarah Johnson"
            title="Software Engineer"
            text="TechCorp's collaborative and innovative culture has pushed me to grow both professionally and personally.
              I feel valued and inspired every day."
          />
          <TestimonialCard
            name="David Smith"
            title="Product Manager"
            text="Working at TechCorp has been a game-changer for my career. The supportive environment and diverse
              team have made every challenge an exciting opportunity for growth."
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Why London?</h2>
        <p className="text-xl mb-4">
          London is not only a global tech hub but also a vibrant and diverse city renowned for its rich culture, iconic
          landmarks, and world-class amenities. Located at the heart of this bustling city, TechCorp provides you with
          the opportunity to thrive in an energetic and inspiring environment.
        </p>
        <div className="flex justify-center items-center">
          <Image
            src="/placeholder.svg?width=800&height=400"
            alt="London skyline"
            width={800}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">We're Hiring!</h2>
        <p className="text-xl mb-4">
          We're always on the lookout for passionate and talented individuals to join our growing team. Explore our open
          positions and take the next step in your career with TechCorp.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View Open Positions
        </a>
      </section>
    </Layout>
  )
}