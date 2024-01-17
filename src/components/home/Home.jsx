import React from 'react'
import {Reveal} from "@/components/animations";
import Link from "next/link";
import AboutBackgroundImage from '@/assets/images/landing-page.jpeg'
import K6Image from '@/assets/images/cars-image/k6r.jpg'
import Image from 'next/image'
import './home.scss'
import {
  Ansys,
  Arjun,
  AsianPaints,
  Connextion, IrEsports,
  Loctite,
  Mallcom, Pcbpow, Pcbway, RapidHarness, Sandhu,
  Sendfast, Siyarams, SteelIndia, TataBattery,
  Tekkr,
  Tesla
} from "@/components/logos/Logos";
import RevealWrapper from "@/components/animations/RevealWrapper";

const Home = () => {
  return (
    <div className={'home'}>
      <Reveal width={'100%'} className={'home-image'} widthInner={"100%"}>
        <Image src={AboutBackgroundImage} alt={'landing page'} className={'landing-image'}/>
      </Reveal>
      <div className={'home-section-1'}>
        <div className={'home-main-text'}>
          <RevealWrapper>
            <h1>Fostering Engineering Excellence, Embracing the EV Frontier</h1>
          </RevealWrapper>
          <RevealWrapper>
            <p> Teamkart Motorsports, a nonprofit project, emphasizes collaborative skill development and
              practical
              engineering through Formula Student. Designing, manufacturing, testing, and competing in a
              formula-style race car bridges academic and professional realms. The shift to electric vehicles
              this
              year showcases the team&apos;s commitment to sustainable technology.
            </p>
          </RevealWrapper>
          <div className={"home-main-text-link"}>
            <Link href={'/'}>Read More</Link>
          </div>
        </div>
      </div>

      <div className={'home-section-2'}>
        <RevealWrapper className={"section-2-inner"}>
          <div className={'home-stats'} >
            <div>8</div>
            <div>CARS</div>
          </div>
          <div className={'home-stats'} >
            <div>70+</div>
            <div>MEMBERS</div>
          </div>
          <div className={'home-stats'} >
            <div>15+</div>
            <div>YEARS</div>
          </div>
        </RevealWrapper>
      </div>

      {/*Old section 3*/}

      {/*<div className={'home-section-3'}>*/}
      {/*  <div>*/}
      {/*    <BackgroundReveal textAlign={"center"}>*/}
      {/*      <h1>Glimpse of Cars</h1>*/}
      {/*    </BackgroundReveal>*/}
      {/*    <div className={'car-img'}>*/}
      {/*      <BackgroundReveal className={'car-img-reveal'}>*/}
      {/*        <Image src={K6Image} alt={'k6'}/>*/}
      {/*        <BackgroundReveal width={"100%"} className={'car-text-center'}>*/}
      {/*          <h3>K6 - 2023</h3>*/}
      {/*          <p>8th in Formula Bharat 2023</p>*/}
      {/*        </BackgroundReveal>*/}
      {/*      </BackgroundReveal>*/}
      {/*      <BackgroundReveal className={'car-img-reveal'}>*/}
      {/*        <Image src={K6Image} alt={'ke-1'}/>*/}
      {/*        <BackgroundReveal width={"100%"} className={'car-text-center'}>*/}
      {/*          <h3>KE-1</h3>*/}
      {/*          <p>Coming soon...</p>*/}
      {/*        </BackgroundReveal>*/}

      {/*      </BackgroundReveal>*/}
      {/*    </div>*/}
      {/*    <BackgroundReveal className={'more-car-btn'}>*/}
      {/*      <Link href={'/cars'}>More Cars</Link>*/}
      {/*    </BackgroundReveal>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* New section 3*/}
      <div className={"home-section-3"}>
        <div className={'__inner-container'}>
          <h2>Glimpse of Cars</h2>
          <div className={'car-detail-container'}>
            <div className={'car car-1'}>
              <div className={'car-img'}>
                <Image src={K6Image} alt={""}/>
                <div className={'overlay'}>KE-1</div>
              </div>
              <div className={'text'}>
                {/*<span>*/}
                {/*  KE-1*/}
                {/*</span>*/}
                <span>
                  Coming Soon...
                </span>
              </div>
            </div>

            <div className={'car car-2'}>

              <div className={'text'}>
                {/*<span>*/}
                {/*  K6*/}
                {/*</span>*/}
                <span>
                  FB 2023
                </span>
              </div>

              <div className={'car-img'}>
                <Image src={K6Image} alt={""}/>
                <div className={'overlay'}>K6</div>
              </div>
            </div>
          </div>
          <Link href={'/cars'} className={'more-cars'}>MORE CARS...</Link>
        </div>
      </div>

      {/*<Reveal width={"100%"} widthInner={"100%"}>*/}
      <div className={'home-section-4'}>
        <div className={'sponsor-logos'}>
          <Tekkr/>
          <Tesla/>
          <Arjun/>
          <Sendfast/>
          <Mallcom/>
          <Loctite/>
          <Connextion/>
          <Ansys/>
          <AsianPaints/>
          <IrEsports/>
          <Pcbway/>
          <Pcbpow/>
          <RapidHarness/>
          <Sandhu/>
          <Siyarams/>
          <SteelIndia/>
          <TataBattery/>
        </div>
        <div className={'sponsor-logos'}>
          <Tekkr/>
          <Tesla/>
          <Arjun/>
          <Sendfast/>
          <Mallcom/>
          <Loctite/>
          <Connextion/>
          <Ansys/>
          <AsianPaints/>
          <IrEsports/>
          <Pcbway/>
          <Pcbpow/>
          <RapidHarness/>
          <Sandhu/>
          <Siyarams/>
          <SteelIndia/>
          <TataBattery/>
        </div>
      </div>
      {/*</Reveal>*/}
    </div>
  )
}
export default Home
