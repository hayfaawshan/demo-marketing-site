import Layout from "../components/layout";


const CareersPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-gray-700 mb-8">We`re Hiring! Come and be a KnewMarketeer</p>

        <h2 className="text-2xl font-bold mb-4">Benefits of Working with Us:</h2>
        <ul className="list-disc pl-6 mb-8">
          <li>Dynamic and inclusive work environment</li>
          <li>Free lunches at the office on a first-come, first-served basis</li>
          <li>Exciting opportunities for professional development</li>
          <li>Attractive salary and competitive benefits package</li>
          <li>Part of the diverse and global 10up network</li>
          <li>Flexible work-from-home policy for a healthy work-life balance</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Why London is the Best City on Earth:</h2>
        <p className="text-gray-700 mb-8">London is known for its rich history, diverse culture, and unparalleled opportunities. It offers a vibrant and diverse work environment, with easy access to leading companies, events, and cultural experiences.</p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-all duration-300 ease-in-out">
          <a href="#">Send your CV to us Today!</a>
        </button>
      </div>
    </Layout>
  );
};

export default CareersPage;