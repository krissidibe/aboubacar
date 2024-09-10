"use client"

import React, {useState} from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useParams, usePathname, useSearchParams } from "next/navigation"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Navigation() { 
    const nav = usePathname()
    const [activeLink, setActiveLink] = useState("#aboutme")
  return (
    <div className="flex">
         <div className="  gap-2  text-xs lg:text-md    flex pr-4 z-[200] ">
     <LinkMenu name="About me" link="#aboutme" />

     <LinkMenu name="Projects" link="#projects" />
     <LinkMenu name="Contact" link="#contact" />

     <LinkMenu name="Download" link="none" />


     </div>

      
    </div>
  )
  function LinkMenu({name,link}:{name:string,link:string}) {
    return <Link
    onClick={()=>{
    /*     setActiveLink(x=> x = link) */
    }}
    className={`text-sm hover:border-b-muted/10 font-semibold p-2 px-3 rounded-lg  `} href={link}>{name}</Link>
}


}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
