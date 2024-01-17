import React from 'react'
import {newsDetails} from "./newsDetails.js";
import NewLetterCard from "@/components/newsletter/newsletter_card/NewLetterCard.jsx";
import './newsletter.css'
import Heading3 from "@/components/utilities/Heading3";

const NewsLetter = () => {
  return (
    <div id={'newsletter'}>
      <Heading3>Newsletter & Blogs</Heading3>
      <div className={'newsletter-inner'}>
        {
          newsDetails.map((item, index) => {
            return <NewLetterCard key={index} data={item}/>
          })
        }
      </div>
    </div>
  )
}

export default NewsLetter
