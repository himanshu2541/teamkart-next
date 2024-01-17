import React from 'react'
import styles from './card.module.css'
import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/animations/RevealWrapper";

const Card = ({car}) => {
  return (
    car && (
      <RevealWrapper>
        <div className={`${styles.cardContainer}`}>
          <div className={`${styles.cardContainer__Inner}`}>
            <div className={`${styles.imageContainer}`}>
              <Image
                src={car.carImg}
                alt={''}
                className={`${styles.image}`}
                fill
                sizes={'100%'}
              />
            </div>
            <p className={`${styles.title}`}>{car.carName}</p>
            <p className={`${styles.desc}`}>{`${car.carDesc.slice(0, 220)}...`}</p>

            <Link href={`/cars/${car.carName}`} className={`${styles.MoreInfo}`}>Read More</Link>
          </div>
        </div>
      </RevealWrapper>
    )

  )
}
export default Card
