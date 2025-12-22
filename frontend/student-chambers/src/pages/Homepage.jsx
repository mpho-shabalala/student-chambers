import Footer from "../assets/components/shared/Footer";
import Header from "../assets/components/shared/Header";
import Hero from "../assets/components/unique/Hero";
import MapSection from "../assets/components/unique/MapSection";
import PreviewRooms from "../assets/components/unique/previewRooms";
import WhyUs from "../assets/components/unique/why_us";

export default function Homepage() {
  return (
    <>
    <Header/>
    <Hero/>
    <WhyUs/> 
    <PreviewRooms/>
    <MapSection/>
    <Footer/>
    </>
  )
}
