"use client"

import MobileMenu from "./menu/MobileMenu.jsx";
import {useEffect, useState} from "react";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import Links from "./Links.jsx";
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link.js";
import './navbar.scss'
import Link from "next/link";
import {IoIosArrowUp} from "react-icons/io";
import AnimatedProgressBar from "@/components/animated_progress_bar/AnimatedProgressBar";
import Logo from '@/assets/images/tk_logo_electric_white.png'
import Image from "next/image";
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
const Navbar = () => {

  const [mobileNav, setMobileNav] = useState(false)
  const [navProp, setNavProp] = useState(false)

  const {scrollYProgress} = useScroll()
  const [scrollY, setScrollY] = useState(0)
  const [checkLinkClicked, setCheckLinkClicked] = useState(false)

  useMotionValueEvent(scrollYProgress, "change", (latestValue) => {
    setScrollY(latestValue)
  })

  useEffect(() => {
    return () => {
      if (checkLinkClicked) {
        document.documentElement.style.setProperty("--scroll", (0).toString())
        setCheckLinkClicked(false)
      }
      document.documentElement.style.setProperty("--scroll", (scrollY * 100).toString())
    };
  }, [checkLinkClicked, scrollY]);

  useEffect(() => {
    return () => {
      if (window.scrollY>=100) {
        setNavProp(true)
      } else {
        setNavProp(false)
      }
    };
  });

  const linkItems = {
    closed: {x: "100%", opacity: 0},
    open: {x: 0, opacity: 1}
  }

  return (
    <>
      <div className={`nav-container ${navProp ? "active" : ""}`}>

        <div className={'nav-container__inner'}>
          <div className={'section-1'}>
            <Link  href={'/'} className={'logo'}>
              <Image src={Logo} alt={'Logo'} priority={true}/>
            </Link>
          </div>
          <div className={'section-2'}>
            <MobileMenu mobileNav={mobileNav} setMobileNav={setMobileNav} className={'menu-btn'}/>
            <div className={'nav-links'}>
              <Links
                onClick={() => {
                window.scrollTo({top: 0})
                setCheckLinkClicked(true)
              }}/>
              <AnchorLink href={'/contact'}>Contact</AnchorLink>
            </div>
          </div>
        </div>

        {/*Links for small screen nav*/}
        <motion.div
          animate={mobileNav ? 'open' : 'closed'}
          variants={{
            closed: {x: "100%", opacity: 0},
            open: {x: 0, opacity: 1}
          }}
          className={"nav-links-full-scr"}
          transition={{
            type: "spring", duration: 0.3
          }}
          onClick={() => setMobileNav(false)}
        >
          <motion.div
            className={"section"}
            animate={mobileNav ? 'open' : 'closed'}
            variants={{
              closed: {x: "100%", opacity: 0},
              open: {x: 0, opacity: 1}
            }}
            transition={{
              delay: 0.1,
              staggerChildren: 0.01,
              delayChildren: 0.1
            }}>

            <Links
              onClick={() => {
                setMobileNav(prevState => !prevState)
                window.scrollTo({top: 0})
                setCheckLinkClicked(true)
              }}
              variants={linkItems}
            />
            <motion.div variants={linkItems}>
              <AnchorLink href={'/contact'}>Contact</AnchorLink>
            </motion.div>
          </motion.div>
        </motion.div>

        <AnimatedProgressBar scrollYProgress={scrollYProgress}/>
      </div>

      <motion.div
        className={"scroll-to-top"}
        animate={scrollY>=0.15 ? 'show' : 'hidden'}
        variants={{
          hidden: {x: "200%"},
          show: {x: 0}
        }}
        onClick={()=> window.scrollTo({top: 0, behavior: "smooth"})}
      >
        <IoIosArrowUp />
      </motion.div>

      <div className={'social-media-sidebar'}>
        <Link href={'https://www.facebook.com/TeamKART'} target={'_blank'}><FaFacebook size={30}/></Link>
        <Link href={'https://www.instagram.com/team.kart/'} target={'_blank'}><FaInstagram size={30}/></Link>
        <Link href={'https://www.linkedin.com/company/team-kart/'} target={'_blank'}><FaLinkedin size={30}/></Link>
      </div>

    </>
  );
};
export default Navbar;
