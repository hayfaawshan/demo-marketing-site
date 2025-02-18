import Head from "next/head"
import Layout from "../components/layout"

const CareersPage = () => {
  return (
    <Layout>
      <Head>
        <title>Careers | TechCorp</title>
        <meta name="description" content="Join our team at TechCorp and discover exciting career opportunities in London." />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-gray-700 mb-8">Discover exciting career opportunities at TechCorp and be a part of our innovative team in London.</p>

        <h2 className="text-2xl font-bold mb-4">Benefits of Working with Us:</h2>
        <ul className="list-disc pl-6 mb-8">
          <li>Cutting-edge projects and technologies</li>
          <li>Collaborative and inclusive work environment</li>
          <li>Opportunities for professional growth and learning</li>
          <li>Competitive compensation and benefits packages</li>
          <li>Flexible remote work options</li>
          <li>Regular team-building activities and events</li>
          <li>Supportive leadership and mentorship programs</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Why London is the Best City on Earth:</h2>
        <p className="text-gray-700 mb-8">London is a bustling metropolis known for its rich history, diverse culture, and thriving tech industry. The city offers an incredible quality of life, with world-class amenities, an excellent public transportation system, and a vibrant arts and entertainment scene. As a global hub for technology and innovation, London provides ample opportunities for career growth and professional networking.</p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-all duration-300 ease-in-out">
          <a href="mailto:careers@techcorp.com">Apply Now!</a>
        </button>
      </div>
    </Layout>
  )
}

export default CareersPage