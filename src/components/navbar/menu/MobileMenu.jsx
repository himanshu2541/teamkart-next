import React from 'react'
import {motion} from "framer-motion";
import styles from './menu.module.css'

const MobileMenu = ({mobileNav, setMobileNav, className}) => {
  return (
    <div className={`${styles.containerOuter} ${className}`} onClick={() => setMobileNav(prev => !prev)}>
      <motion.div animate={mobileNav ? "open" : "closed"} className={styles.container}
      variants={{
        closed: {justifyContent: "space-between"},
        open: {justifyContent: "center"},
      }}
      >

        <motion.span variants={{
          closed: {rotate: 0, y: 0},
          open: {rotate: 45, y: 2}
        }}/>
        <motion.span variants={{
          closed: {opacity: 1, x: 0},
          open: {opacity: 0, x: -25}
        }}/>
        <motion.span variants={{
          closed: {rotate: 0, y: 0},
          open: {rotate: -45, y: -2}
        }}/>
      </motion.div>

    </div>
  )
}
export default MobileMenu
