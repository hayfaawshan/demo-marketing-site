import Layout from "@/components/Layout"
import { Highlight, Badge } from "@/components/ui/badge-footer"
import londonImage from "../public/london.jpg"
import Image from "next/image"

export default function CareersPage() {
  return (
    <Layout title="Careers at TechCorp">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h1 className="text-6xl font-bold mb-6">Careers at TechCorp</h1>
        <p className="leading-relaxed text-lg">
          Join our team and help us build innovative tech solutions.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Benefits</h2>
        <ul className="list-disc list-inside">
          <li>Competitive salary</li>
          <li>Remote-friendly</li>
          <li>Flexible hours</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <div className="flex flex-col space-y-4">
          <blockquote className="p-4 bg-gray-100 rounded-lg">
            <p>
              &quot;TechCorp provides an incredibly supportive working
              environment. The company culture is amazing!&quot;
            </p>
            <cite className="block mt-2 text-sm text-right">- Jane Doe</cite>
          </blockquote>
          <blockquote className="p-4 bg-gray-100 rounded-lg">
            <p>
              &quot;I am constantly challenged and excited by the projects we
              work on. I truly feel like my work makes a difference.&quot;
            </p>
            <cite className="block mt-2 text-sm text-right">- John Smith</cite>
          </blockquote>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Why London?</h2>
        <Image
          src={londonImage}
          alt="London"
          className="rounded-lg mb-4"
          height="250"
          width="400"
          objectFit="cover"
        />
        <p>
          London is not just a city; it&apos;s a hub of opportunities, culture,
          and innovation. From the historic landmarks to the vibrant tech
          scene, London offers an unparalleled experience both professionally
          and personally. Come be a part of this incredible city!
        </p>
      </div>
      <div className="text-center">
        <p>
          We&apos;re hiring! Email{" "}
          <a className="text-blue-500" href="mailto:careers@techcorp.com">
            careers@techcorp.com
          </a>{" "}
          with your resume.
        </p>
      </div>
      <footer className="bg-gray-100 py-8 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">
            Start your journey with us and make a difference in the world of
            tech.
          </p>
          <Highlight>
            <Badge text="Join us today" url="#" />
          </Highlight>
        </div>
      </footer>
    </Layout>
  )
}