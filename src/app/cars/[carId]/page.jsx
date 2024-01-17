import React from 'react'
import CarPages from "@/components/cars/carPages/CarPages";
import {CarDetails} from "@/components/cars/CarDetails";

const CarDetailPage = ({params}) => {
  const {carId} = params;

  return (
    <>
      <CarPages carId={carId}/>
    </>
  )
}
export default CarDetailPage

export const generateMetadata = async ({params}) => {
  const {carId} = params;
  let data = {};

  CarDetails.map(car => {
    if (car.carName === carId) {
      data = car;
    }
  })

  return {
    title: data?.carName,
    description: `${data?.carDesc.slice(0, 160)}...`
  }
}


