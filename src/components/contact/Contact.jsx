import React from 'react'
import ContactForm from "@/components/contact/ContactForm";
import YoutubeEmbed from "@/components/contact/YoutubeEmbed";
import './contact.css'
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  return (
    <div id={'contact'}>
      <div className={'contact-container-inner'}>
        <h1 className={'contact-title'}>
          Stay Connected with Us
        </h1>
        <div className={'contact-form-container'}>
          <div className={'contact-form-inner-container'}>
            <ContactForm/>
          </div>

          <div className={'youtube-video'}>
            <YoutubeEmbed/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
