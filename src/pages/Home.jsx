import AnimatedLocations from "../components/Home/AnimatedLocations ";
import ConsultationForm from "../components/Home/ConsultationForm ";
import GuideDownload from "../components/Home/GuideDownload ";
import Hero from "../components/Home/Hero";
import LocationsSection from "../components/Home/Location";
import Timeline from "../components/Home/Timeline";
import WhoWeAre from "../components/Home/WhoWeAre";
import WhyChooseSolar from "../components/Home/WhyChooseSolar";
import Footer from "../components/Root/Footer";
import NewsSlider from "../components/Root/News";
import Solar_square from "../components/Root/Solar_square";
import TestimonialSection from "../components/Root/TestimonialSection";

export default function Home() {
    return <div>
        <Hero/>
        <ConsultationForm/>
        <NewsSlider/>
        <WhyChooseSolar/>
        <div className="md:pt-0 md: pt-[250px]">
            <LocationsSection />
        </div>
        <div className="mt-[-200px] md:">
        <AnimatedLocations/>
        </div>
        <GuideDownload/>
        <WhoWeAre/>
        {/* <Timeline/> */}
        <TestimonialSection/>
        <Solar_square/>
        <Footer/>
    </div>
}