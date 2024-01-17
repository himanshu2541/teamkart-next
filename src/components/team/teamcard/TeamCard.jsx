import React from 'react'
import './teamCard.scss'
import {FaFacebook, FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import RevealWrapper from "@/components/animations/RevealWrapper";

const TeamCard = ({person}) => {
  return (
    <RevealWrapper className={'team-card'}>
      <div className={'img-container'}>
        <div className={'team-social-media'}>
          <Link href={person.facebook} target={'_blank'}><FaFacebook/></Link>
          <Link href={`mailto:${person.mail}`} target={'_blank'}><MdEmail/></Link>
          <Link href={person.linkedin} target={'_blank'}><FaLinkedin/></Link>
        </div>
        <div className={'__image'}>
          <Image src={person.img} alt={''} fill sizes={"100%"} priority={true}/>
        </div>
      </div>

      <div className={'person-name'}>
        <h3>{person.name}</h3>
        <p>{person.designation1}</p>
        <p>{person.designation2}</p>
        <p>{person.designation3}</p>
      </div>
    </RevealWrapper>
  )
}
export default TeamCard
