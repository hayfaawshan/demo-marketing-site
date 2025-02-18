import { useRouter } from "next/router";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface NavLinkProps {
 href: string;
  children: ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link
      href={href}
      className={`px-2 py-1 mx-2 border-b-2 ${
        isActive ? "border-red-400" : "border-transparent"
      }`}
    > 
        {children}
    </Link>
  );
};

const Navbar: FC = () => {

  return (
    <nav className="flex justify-center p-2 items-center">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/products">Products</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </nav>
  );
};

export default Navbar;