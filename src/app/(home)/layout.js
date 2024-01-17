import Navbar from "@/components/navbar/Navbar";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: 'Home',
  description: 'TeamKART is the official formula student team of IIT Kharagpur. A group of students who love designing and manufacturing formula-style prototype race cars.',
}

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Contact />
      <Footer />
    </>
  )
}
