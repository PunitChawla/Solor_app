
import FAQ from "../components/Root/Faq";
import Footer from "../components/Root/Footer";
import HeroSection from "../components/Root/Hero";
import NewsSlider from "../components/Root/News";
import Solar_square from "../components/Root/Solar_square";
import SolarSolutions from "../components/Root/SolarSolutions";
import TestimonialSection from "../components/Root/TestimonialSection";
import TrustedBy from "../components/Root/TrustedBy";

export default function Root(){
    return <div>
        <HeroSection/>
        <SolarSolutions/>
        <TestimonialSection/>
        <TrustedBy/>
        <FAQ/>    
        <NewsSlider/>
        <Solar_square/>
        <Footer/>
    </div>
}

