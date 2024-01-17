"use client"
import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation, AnimatePresence} from "framer-motion";

const RevealWrapper = ({children, className=''}) => {
  const ref = useRef()
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible").then().catch()
    }
  }, [isInView, mainControls])
  return (
    <AnimatePresence>
      <motion.div
        className={className}
        variants={{
          hidden: {opacity: 0, y: 15}, visible: {opacity: 1, y: 0},
        }}
        // exit={{opacity: 1, y: 0}}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.25, delay: 0.10}}
        ref={ref}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
export default RevealWrapper

