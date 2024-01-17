import React from 'react'
import PagesLayout from "@/app/(pages)/layout";
import Cars from "@/components/cars/Cars";

export const metadata = {
  title: 'Cars',
  description: 'To date we manufactured 8 cars. Our latest car K6 was 8th in Formula Bharat 2023 and 3rd in cost and manufacturing event. Our previous car K5...',
}
const CarsPage = () => {
  return (
    <PagesLayout>
      <Cars />
    </PagesLayout>
  )
}

export default CarsPage
