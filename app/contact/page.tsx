import Navbar from "../components/Navbar";
import { FC } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Contact",
 description: "My contact page",
};

const Contact: FC = () => {
  return (
    <div>
      <Navbar />
      Contact page
    </div>
  );
};
export default Contact;