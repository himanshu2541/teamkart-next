import React from 'react'
import {CarDetails} from "@/components/cars/CarDetails";
import styles from './carPages.module.css'
import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/animations/RevealWrapper";

const CarPages = ({carId}) => {

  let data = {};

  CarDetails.map(car => {
    if (car.carName === carId) {
      data = car;
    }
  })

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.navbar}`}>
          <Link href={'/cars'}>{`<`} Back</Link>
      </div>
      {
        data && (
          <RevealWrapper>
          <div className={`${styles.dataContainer}`}>
            <div className={`${styles.imgContainer}`}>
              <Image src={data.carImg} alt={''} fill sizes={'100%'} className={`${styles.image}`} priority={true}/>
            </div>

            <div className={`${styles.data}`}>
              <h1 className={`${styles.title}`}>{data.carName}</h1>
              <p className={`${styles.carDesc}`}>{data.carDesc}</p>
              <div className={`${styles.carSpecsHeading}`}>
                <h2>Car Specifications</h2>
              </div>
              {
                Object.keys(data.carSpecs) && (
                  Object.keys(data.carSpecs).map((key, keyIndex) => {
                    return (
                      <div key={keyIndex} className={`${styles.carSpecs}`}>
                        <div className={`${styles.carSpecsTitle}`}>
                          <h3>{key}</h3>
                        </div>
                        <div className={`${styles.carSpecsContent}`}>
                          {Object.keys(data.carSpecs[key]).map((specKey, specIndex) => {
                          return (
                            <div key={specIndex} className={`${styles.specs}`}>
                              <p>{specKey}</p>
                              <p>{Object.values(data.carSpecs[key][specKey])}</p>
                            </div>
                          )
                        })}</div>
                      </div>
                    )
                  })
                )
              }
            </div>
          </div>
          </RevealWrapper>
        )
      }
    </div>

  )
}
export default CarPages


