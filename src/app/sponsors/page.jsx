import React from 'react'
import Sponsors from "@/components/sponsors/Sponsors";
import PagesLayout from "@/app/(pages)/layout";

export const metadata = {
  title: 'Sponsors',
  description: 'Our sponsors are the ones who lead us to realize this goal by enabling us access to the best possible resources required to satiate our never-ending thirst to do the finest engineering.',
}
const SponsorsPage = () => {
  return (
    <>
      <PagesLayout>
        <Sponsors/>
      </PagesLayout>
    </>
  )
}

export default SponsorsPage
