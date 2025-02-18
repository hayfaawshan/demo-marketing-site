import React from 'react';
import '../styles/globals.css';
import type { Metadata } from 'next';
import Link from 'next/Link';

export const metadata: Metadata = {
  title: 'My Jewelry Site',
  description: 'Browse and shop for beautiful jewelry pieces',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children} </main>
      </body>
    </html>
  );
}