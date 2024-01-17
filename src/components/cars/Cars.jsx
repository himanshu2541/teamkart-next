import React from 'react'

import {Reveal} from "@/components/animations/index.js";
import './cars.css'
import {CarDetails} from "./CarDetails.js";
import Heading2 from "@/components/utilities/Heading2.jsx";
import Card from "@/components/cars/cards/Card";
import RevealWrapper from "@/components/animations/RevealWrapper";

const Cars = () => {
  return (
    <>
      <div className={'cars'}>
        <div className={'cars-inner-container'}>
          <Reveal>
            <Heading2>CARS</Heading2>
          </Reveal>
          <div className={'car-cards'}>
            <div className={'car-cards-inner-container'}>
              {CarDetails.map((car, index) => {
                return (
                  <Card car={car} key={index}/>
                )
              })
              }
            </div>
          </div>


        </div>
      </div>
    </>
  )
}
export default Cars
