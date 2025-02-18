import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  imageURL: string;
}

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch the product data from the server (replace with your API endpoint)
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={product.imageURL}
              alt={product.name}
              className="w-full h-32 object-cover mb-2"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">Price: ${product.price}</p>
            <Link href={`/products/${product.id}`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;