"use client"

import { HomeIcon, InfoIcon, MailIcon, ProductIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { type FC } from "react"

import { Badge } from "@/components/ui/badge"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu"
import "@/styles/globals.css"

const logoImage = (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
)

const navigationItems = [
  {
    title: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    title: "Products",
    href: "/products",
    icon: ProductIcon,
  },
  {
    title: "About",
    href: "/about",
    icon: InfoIcon,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: MailIcon,
  },
]

const MainNavigation: FC = () => {
  const currentPathname = usePathname()

  const navItemsMarkup = navigationItems.map(({ title, href, icon: Icon }) => {
    const isActive = currentPathname === href

    return (
      <NavigationMenuItem key={title}>
        <NavigationMenuLink asChild>
          <Link href={href} aria-current={isActive}>
            <Icon className="w-5 h-5" />
            <span>{title}</span>
            {isActive && (
              <Badge variant="outline" className="ml-2">
                Active
              </Badge>
            )}
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    )
  })

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center space-x-1 justify-between w-full min-w-0 md:max-w-[calc(100%)]">
        <NavigationMenuItem className="flex w-full min-w-0">
          <NavigationMenuTrigger className="lg:ml-4 md:mr-none md:w-auto min-w-0">
            {logoImage}
            <span className="ml-2 text-xl font-semibold tracking-tight">
              TechCorp
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
        {navItemsMarkup}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MainNavigation