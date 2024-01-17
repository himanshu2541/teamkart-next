"use client"
import {useEffect,  useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

import {SLIDES_DETAILS} from "./sliderData.js";
import "./customCarousel.scss";
import Image from "next/image";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [direction, setDirection] = useState("right");


  const handleNext = () => {
    setDirection("right")
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === SLIDES_DETAILS.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setDirection("left")
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? SLIDES_DETAILS.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.8,
      },
    },
  };


  // automatic slide

  useEffect(() => {
    const Interval = setTimeout(() => {
      handleNext()
    }, 3000)
    return () => {
      if (Interval) {
        clearInterval(Interval)
      }
    }
  }, [currentIndex]);

  return (
    <>
      <div className={'custom-carousel'}>
        <div className="carousel">

          <AnimatePresence>
            <motion.div
              className={"img-container"}
              key={currentIndex}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              variants={slideVariants}
            >
              <Image
                key={currentIndex}
                src={SLIDES_DETAILS[currentIndex].url}
                alt={''}
                fill
                priority={true}
                sizes={'100%'}
              />

              <p
                className={'title'}
              >
                {SLIDES_DETAILS[currentIndex].title}
              </p>
            </motion.div>

          </AnimatePresence>

          <div
            className="arrow left"
            onClick={handlePrevious}
          >
            <IoIosArrowBack/>
          </div>
          <div
            className="arrow right"
            onClick={handleNext}
          >
            <IoIosArrowForward/>
          </div>


          <div className="indicator">
            {SLIDES_DETAILS.map((_, index) => (
              <div
                key={index}
                className={`line ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomCarousel;
