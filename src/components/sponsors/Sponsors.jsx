import React from 'react'
import './sponsors.scss'
import Link from 'next/link'

import {
  Ansys,
  Arjun,
  AsianPaints,
  Connextion,
  IrEsports,
  Loctite,
  Logitech,
  Mallcom,
  Pcbpow,
  Pcbway,
  RapidHarness,
  Sandhu,
  Sendfast,
  Siyarams,
  SteelIndia,
  TataBattery,
  Tekkr
} from "@/components/logos/Logos.jsx";

const Sponsors = () => {
  return (<>

    <div id={'sponsors'}>
      <>
        <div className={'sponsors-section-1'}>
          <h1 className={'heading'}>SPONSORSHIP BROCHURE</h1>
          <p>TeamKART is a student project under the IIT Kharagpur. Being one of the premier
            engineering universities in India, the institute provides us with a highly conducive
            environment to innovate and excel in all the areas involved in the production of a
            formula style race car. Our sponsors are the ones who lead us to realize this goal by
            enabling us access to the best possible resources required to satiate our never-ending
            thirst to do the finest engineering.</p>
          <div className={'sponsorship-brochure-link'}>
            <Link href={'/sponsors/spons-pdf'} target={'_blank'}>Our Sponsorship Brochure</Link>
          </div>
        </div>

        <div className={'sponsors-section-2'}>
          <h2>Title sponsor</h2>
          <div className={'title-sponsor-logos'}>
            <Tekkr/>
            <Arjun/>
          </div>
        </div>

        <div className={'sponsors-section-2'}>
          <h2>Major sponsors</h2>
          <div className={'title-sponsor-logos'}>
            <Mallcom/>
            <Sendfast/>
          </div>
        </div>

        <div className={'sponsors-section-3'}>
          <h2>Technical sponsors</h2>
          <div className={'technical-sponsors-logos'}>
            <SteelIndia/>
            <Sandhu/>
            <TataBattery/>
            <Siyarams/>
            <RapidHarness/>
            <Pcbpow/>
            <Pcbway/>
            <Loctite/>
            <AsianPaints/>
            <Connextion/>
            <Ansys/>
            <Logitech/>
            <IrEsports/>
          </div>
        </div>
      </>
    </div>
  </>)
}
export default Sponsors
