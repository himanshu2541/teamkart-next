import nodemailer from 'nodemailer'
import { NextResponse} from "next/server";
export async function POST(req) {
  const res = await req.json()
  const {name, email, subject, message} = res;

  if(!name || !email || !subject || !message){
    return NextResponse.json({msg: "Please provide all the data"}, { status: 500 })
  }

  const user = process.env.USER

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: process.env.PASS,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "himanshuofficial588@gmail.com",
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <h2>Subject</h2>
        <p>${subject}</p>
        <h2>Message</h2>
        <p>${message}</p>
      `
    })
    console.log(`Message sent: ${mail.messageId}`);
    return NextResponse.json({message: "success"}, {status: 200})
  } catch (e) {
    return NextResponse.json({message: "Your message is not sent"}, {status: 500})
  }
}
