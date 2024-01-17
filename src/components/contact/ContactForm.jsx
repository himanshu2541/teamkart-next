"use client"

import {toast, ToastContainer} from "react-toastify";

const sendEmail = async (event) => {
  event.preventDefault()
  const data = {
    name: String(event.target.name.value),
    email: String(event.target.email.value),
    subject: String(event.target.subject.value),
    message: String(event.target.message.value)
  }
  event.target.reset()
  const response = await fetch('/api/contact', {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if(response.ok){
    return true
  }
  else if(!response.ok){
    return false
  }
}
const ContactForm = () => {
  const handleSubmit = async (event) => {
    const res = await sendEmail(event)
    if (res) {
      toast.success("Message Sent", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else if(!res){
      toast.error("Message Not Sent", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <>
      <form className={'contact-form'} id={'contact-form'} onSubmit={handleSubmit}>
        <input type={'text'} placeholder={'Name'} name={'name'} required/>
        <input type={'email'} placeholder={'Email'} name={'email'} required/>
        <input type={'text'} placeholder={'Subject'} name={'subject'} required/>
        <textarea name={'message'} cols="30" rows="6" placeholder={'Write Something!'}></textarea>
        <button type={'submit'}>
          Send Message
        </button>
      </form>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
export default ContactForm
