"use client"
import React from 'react'
import {motion} from "framer-motion";
import Link from "next/link";
import {usePathname} from "next/navigation";

const navigationMenu = [
  {name: "Home", href: "/"},
  {name: "About", href: "/about"},
  {name: "Team", href: "/team"},
  {name: "Cars", href: "/cars"},
  {name: "Sponsors", href: "/sponsors"},
  {name: "Gallery", href: "/gallery"},
  {name: "Newsletter", href: "/newsletter"},
]
const Links = ({onClick, className, variants}) => {
  const pathName = usePathname()
  return (
    <>
      {
        navigationMenu.map(link => {
          return (
            <motion.div variants={variants} key={link.name}>
              <Link href={link.href} className={`${className} ${pathName === link.href ? 'active' : ''}`} onClick={onClick}>
                {link.name}
              </Link>
            </motion.div>
          )
        })
      }

    </>
  )
}
export default Links
