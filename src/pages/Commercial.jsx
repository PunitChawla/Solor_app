import FixedBackgroundSection from "../components/Commerical/FixedBackgroundSection ";
import HeroSection from "../components/Commerical/Hero";
import InstallationExperience from "../components/Commerical/InstallationExperience";
import SolarEnquiryForm from "../components/Commerical/SolarEnquiryForm";
import TestimonialScroller from "../components/Commerical/TestimonialScroller ";
import TestimonialSection from "../components/Commerical/TestimonialSection";
import Footer from "../components/Root/Footer";
import Solar_square from "../components/Root/Solar_square";


export default function Commercial(){
    return <div>
        <HeroSection/>
        <TestimonialSection/>
        <SolarEnquiryForm/>
        <InstallationExperience/>
        <FixedBackgroundSection/>
        <TestimonialScroller/>
        <Solar_square/>
        <Footer/>
    </div>
}