import Navbar from "@/components/navbar/Navbar";
import CustomCarousel from "@/components/carousel/CustomCarousel";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function PagesLayout({ children }) {
  return (
    <>
      <Navbar />
      <CustomCarousel />
      {children}
      <Contact />
      <Footer />
    </>
  )
}
