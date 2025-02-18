import Head from "next/head";
import Navbar from "../components/Navbar";
import totals from "../styles/totals.module.css";
import Image from 'next/image';
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Products",
    description: "My Products page",
};

export default function Products(props) {
  return (
    <main>
      <Head>
        <title>My Awesome App</title>
        <meta name="description" content="My awesome Next.js app" />
      </Head>
      <div>
       
        <Navbar />

        <div className="container px-4 mx-auto flex align-items: center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                {props.products.map(product => (
                <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow-lg w-80">
                    <div>
                        <Image
                            src={product.gallery[0]} // Use the first image for now
                            alt={product.name}
                            layout="responsive"
                            width={150}
                            height={150}
                            priority // Ensure this image has priority for loading
                        />
                    </div>
                    <div className="flex-grow">
                    <h2 className="product-category font-sans font-light text-gray-500 text-sm my-2">
                        {product.category}
                    </h2>
                    <h1 className="product-name text-black text-lg my-2">{product.name}</h1>
                    <div className="product-description font-sans text-sm font-light text-gray-500">
                        {product.description}
                    </div>
                    <p className="product-sku text-sm text-gray-500 my-2">SKU: {product.sku}</p>
                    <div className="product-details flex flex-wrap">
                        {product.details.map((detail, index) => (
                        <div key={index} className="border border-gray-600 rounded text-xs p-1 mr-2 mb-2">
                            {detail}
                        </div>
                        ))}
                    </div>
                    <p className="product-price text-gray-500 my-2">${product.price.current} {product.currency}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>

        <div className="mx-3 sm:mx-0 flex sm:flex-row flex-column items-center">
          {props.totals.map((item, index) => (
            <div
              key={index}
              className="flex bg-gray-100 p-1 justify-between flex-grow sm:text-center items-center mt-4 sm:mr-12  rounded-xl shadow-lg p-6"
            >
              <div className="flex flex-grow items-center ml-2 sm:ml-0 mb-4 sm:mb-0">
              <Image
                src={item.imgUrl}
                alt="Cog Icon"
                width={40}
                height={40}
                priority
                />
              </div>
              <div>
                <p className="text-black text-2xl font-bold">{item.number}</p>
                <p className="text-black text-sm font-normal mx-4">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  const { products } = await import('../productData.json');

  const totals = [
    {
      imgUrl: '/icons/cog.png',
      number: 1000,
      title: 'Happy Customers',
    },
    {
      imgUrl: '/icons/medal.png',
      number: 150,
      title: 'Features Added',
    },
    {
      imgUrl: '/icons/money.png',
      number: 5000000,
      title: 'Cost Savings Realized',
    }
  ];

  return {
    props: {
      products,
      totals,
    },
  };
}