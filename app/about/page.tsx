import Navbar from "../components/Navbar";
import { FC } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "About",
  description: "My about page",
};

const About: FC = () => {
  return (
    <div>
      <Navbar />
      About page
    </div>
  );
};
export default About;