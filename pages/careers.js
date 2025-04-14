import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Careers() {
  return (
    <Layout>
      <Head>
        <title>Careers | Join Our Team</title>
        <meta name="description" content="Join our team and build your career with us. Explore current openings and company benefits." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Join Our Team</span>
            <span className="block text-indigo-600">We're Hiring!</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Build your career with us and be part of an innovative team that's changing the industry.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-10 relative h-64 sm:h-72 md:h-96">
          <Image 
            src="/images/team-collaboration.jpg" 
            alt="Team collaboration" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg shadow-xl"
            priority
          />
        </div>

        {/* Benefits Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Benefits & Perks
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Competitive Salary</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      We offer competitive compensation packages and regular salary reviews.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Health & Wellness</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Comprehensive health insurance and wellness programs to keep you at your best.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Flexible Working</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Hybrid work model with remote work options and flexible hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Learning & Development</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Continuous learning opportunities and personal development budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Team Events</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Regular team building activities, social events, and company retreats.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Career Growth</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Clear progression paths and opportunities to grow within the company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Employee Testimonials
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image className="h-12 w-12 rounded-full" src="/images/testimonial-1.jpg" alt="Sarah J." width={48} height={48} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Sarah J.</h3>
                    <p className="text-sm text-gray-500">Senior Developer, 3 years</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 italic">
                    "The collaborative culture here is unlike anywhere I've worked before. I've grown so much professionally and made lifelong friends along the way."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image className="h-12 w-12 rounded-full" src="/images/testimonial-2.jpg" alt="Michael T." width={48} height={48} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Michael T.</h3>
                    <p className="text-sm text-gray-500">Product Manager, 2 years</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 italic">
                    "I joined after working at a larger company and I love the impact I can have here. My ideas are heard and I can see my work making a difference."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* London Section */}
        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                London: Our Home
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                London isn't just where our office is located—it's the vibrant heart of our company culture and innovation.
              </p>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500">
                <p>
                  As one of the world's most diverse and dynamic cities, London provides us with:
                </p>
                <ul>
                  <li>Access to top talent from around the globe</li>
                  <li>A thriving tech ecosystem and innovation hub</li>
                  <li>Incredible culture, history, and entertainment</li>
                  <li>Excellent transport links to Europe and beyond</li>
                  <li>Beautiful parks and green spaces throughout the city</li>
                </ul>
                <p>
                  Our office is located in the heart of the city, surrounded by amazing restaurants, cafes, and cultural landmarks that make working here a truly enriching experience.
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <Image 
                src="/images/london-skyline.jpg" 
                alt="London skyline" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900">
            We're Hiring!
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Join our team and help us build amazing products. Check out our current openings below.
          </p>
          <div className="mt-10 grid gap-5">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Senior Frontend Developer</h3>
                <p className="mt-1 text-sm text-gray-500">London (Hybrid) • Full-time</p>
                <div className="mt-3">
                  <p className="text-sm text-gray-500">
                    We're looking for an experienced frontend developer to help build beautiful, responsive, and accessible web applications.
                  </p>
                </div>
                <div className="mt-5">
                  <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Backend Engineer</h3>
                <p className="mt-1 text-sm text-gray-500">London (Hybrid) • Full-time</p>
                <div className="mt-3">
                  <p className="text-sm text-gray-500">
                    Join our backend team to develop scalable and robust API services that power our applications.
                  </p>
                </div>
                <div className="mt-5">
                  <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Product Designer</h3>
                <p className="mt-1 text-sm text-gray-500">London (Hybrid) • Full-time</p>
                <div className="mt-3">
                  <p className="text-sm text-gray-500">
                    We're seeking a talented product designer to create intuitive and delightful user experiences.
                  </p>
                </div>
                <div className="mt-5">
                  <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-gray-500">
              Don't see a role that fits? We're always looking for talented individuals.
            </p>
            <div className="mt-5">
              <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send us your resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}