import Layout from "../components/Layout"
import Link from "next/link"

export default function Careers() {
  return (
    <Layout title="Careers">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">We're Hiring!</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our innovative team at TechCorp and help build the future of technology. We're looking for passionate,
          talented individuals to join us in revolutionizing the tech industry.
        </p>
        <Link
          href="/contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact Us to Learn More
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Work With Us?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Competitive Salaries</h3>
            <p className="mb-4">
              We offer competitive salaries to attract and retain the best talent in the industry. Your hard work and
              dedication will be rewarded.
            </p>

            <h3 className="text-xl font-semibold mb-4">Comprehensive Benefits</h3>
            <p className="mb-4">
              Our benefits package includes health insurance, retirement plans, and generous vacation time to support
              your personal and professional well-being.
            </p>

            <h3 className="text-xl font-semibold mb-4">Professional Development</h3>
            <p className="mb-4">
              We invest in our employees' growth with continuous learning opportunities and career advancement programs.
            </p>
          </div>
          <div>
            <img
              src="/careers.jpg"
              alt="Team collaborating"
              className="w-full h-full rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">London: The Best City to Work In</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="md:order-2">
            <img
              src="/london.jpg"
              alt="London"
              className="w-full h-full rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">A Thriving Tech Hub</h3>
            <p className="mb-4">
              As one of the world's leading technology hubs, London offers unparalleled opportunities for tech
              professionals. You'll be at the center of innovation and progress.
            </p>

            <h3 className="text-xl font-semibold mb-4">Diverse Culture</h3>
            <p className="mb-4">
              Experience the rich culture and vibrant lifestyle of London. With people from all around the world, you'll
              be part of a dynamic and inclusive community.
            </p>

            <h3 className="text-xl font-semibold mb-4">Excellent Transport Links</h3>
            <p className="mb-4">
              London boasts an extensive public transport network, making it easy to commute to work and explore the
              city's many attractions.
            </p>

            <h3 className="text-xl font-semibold mb-4">Endless Opportunities</h3>
            <p className="mb-4">
              The city's diverse job market and numerous opportunities for networking and collaboration make it an
              enticing destination for professionals in any industry.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}