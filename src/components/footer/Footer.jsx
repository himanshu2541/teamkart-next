import React from 'react'
import './footer.css'
import {IoIosMail} from "react-icons/io";
import {FaLocationDot} from "react-icons/fa6";
import {Reveal} from "@/components/animations";
import Link from "next/link";
import RevealWrapper from "@/components/animations/RevealWrapper";
import Links from "@/components/navbar/Links";
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";
import {IoMailSharp} from "react-icons/io5";

const LazyMap = React.lazy(() => import('./MapEmbed.jsx'))
const Footer = () => {
  const teamLeaders = [{
    id: 1, name: "Manish S.", phone: "+91-9500018839"
  }, {
    id: 2, name: "Vedant Dave", phone: "+91-9619445999"
  },
    {
      id: 3, name: "Harsh Kumar", phone: "+91-8809303881"
    }

  ]
  return (
    <div id={'footer'}>
      <div className={'section-1'}>
      <Reveal className={'find-us-section'} width={"100%"} widthInner={"100%"}>
        <div className={'map-responsive-container'}>
          <h2>Find Us</h2>
          <div className={' map-responsive'}>
            <React.Suspense fallback={'Loading...'}>
              <LazyMap/>
            </React.Suspense>
          </div>
        </div>
      </Reveal>
      <div id={'contacts'} className={'contact-us-section'}>
        <RevealWrapper>
          <h2>Contacts</h2>
        </RevealWrapper>
        <div>
          {teamLeaders.map(item => {
            return <RevealWrapper key={`${item.id}`} className={'person-contact'}>
              {item.name}<br/><a href={`tel:${item.name}`}>{item.phone}</a>
            </RevealWrapper>
          })}
        </div>

        <RevealWrapper>
          <div className={'address'}>
            <div>
              <IoIosMail size={20}/>
              <Link href={'mailto:teamkartmedia@gmail.com'} target={'_blank'}>teamkartmedia@gmail.com</Link>
            </div>
            <div>
              <FaLocationDot size={20}/>
              <span>
                            <p>Behind Nehru Museum, IIT-Kharagpur</p>
                            <p>Kharagpur, West Bengal</p>
                            <p>Pincode-721302</p>
                        </span>
            </div>
          </div>
        </RevealWrapper>

      </div>
    </div>
      <div className={'section-2'}>
        <Links/>
      </div>

      <div className={'section-3'}>
        <Link href={'https://www.facebook.com/TeamKART'} target={'_blank'}><FaFacebook size={30}/></Link>
        <Link href={'https://www.instagram.com/team.kart/'} target={'_blank'}><FaInstagram size={30}/></Link>
        <Link href={'https://www.linkedin.com/company/team-kart/'} target={'_blank'}><FaLinkedin size={30}/></Link>
        <Link href={'https://www.youtube.com/@teamkart3652'} target={'_blank'}><FaYoutube size={30}/></Link>
        <Link href={'mailto:teamkartmedia@gmail.com'} target={'_blank'}><IoMailSharp size={30}/></Link>
      </div>
    </div>
  )
}
export default Footer
