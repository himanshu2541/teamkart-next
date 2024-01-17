"use client"
import {useSpring, motion} from 'framer-motion'
import styles from './style.module.css'
const AnimatedProgressBar = ({scrollYProgress}) => {
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 100,
    restDelta: 0.001
  })

  return (
    <>
    <motion.div style={{scaleX}} className={styles.progressBar} />
    {/*<div style={{position: "fixed", top: "10px", left: "10px", zIndex: 5000}}>{scrollYProgress.current*100}</div>*/}
    </>

  )
}
export default AnimatedProgressBar
