// pages/products.tsximport React from 'react'
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import diamondRingImage from '../public/diamond-ring.jpg';

export interface Product {
  id    : number;
  name  : string;
  price : number;
  image : StaticImageData;
}

const products: Product[] = [
  {
    id    : 1,
    name  : 'Diamond Ring',
    price : 499.99,
    image : diamondRingImage,
  }];

export const ProductsPage = () => {
  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-card">
            <Link href={`/products/${product.id}`}>
              <h2>{product.name} </h2>
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
              />
            </Link>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

ProductsPage.defaultProps = {
  products
}

export const metadata = {
  title: 'Our Products',
  description: 'Browse our amazing jewelry products',
}

export default ProductsPage