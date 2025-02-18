import Head from "next/head";
import Navbar from "./components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Home",
 description: "My home page",
};

export default function Home() {
 return (
    <main>
     
      <Head>
        <title>My Awesome App</title>
        <meta name="description" content="My awesome Next.js app" />
      </Head>
      <div>
        
        <Navbar />
      </div>
    </main>
  );
}