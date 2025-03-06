import HeroSection from "../components/Commerical/Hero";
import SolarEnquiryForm from "../components/Commerical/SolarEnquiryForm";
import TestimonialSection from "../components/Commerical/TestimonialSection";
import Footer from "../components/Root/Footer";
import Solar_square from "../components/Root/Solar_square";


export default function Commercial(){
    return <div>
        <HeroSection/>
        <TestimonialSection/>
        <SolarEnquiryForm/>
        <Solar_square/>
        <Footer/>
    </div>
}