import Navbar from "../components/Navbar";
import HeroSection from "../components/Root/Hero";
import SolarSolutions from "../components/Root/SolarSolutions";
import TestimonialSection from "../components/Root/TestimonialSection";

export default function Root(){
    return <div>
        <HeroSection/>
        <SolarSolutions/>
        <TestimonialSection/>
    </div>
}