import ConsultationForm from "../components/Housing_society/ConsultationForm";
import GuideDownload from "../components/Housing_society/GuideDownload ";
import ImageCarousel from "../components/Housing_society/ImageCarousel ";
import SavingsGuarantee from "../components/Housing_society/SavingGuarantee";
import SolarMaintenance from "../components/Housing_society/SolarMaintenance ";
import StatsComponent from "../components/Housing_society/StatsComponent ";
import TestimonialCarousel from "../components/Housing_society/testimonialsComment";
import TestimonialSection from "../components/Housing_society/TestimonialSection";
import VideoHero from "../components/Housing_society/VideoHero";
import FAQ from "../components/Root/Faq";
import Footer from "../components/Root/Footer";
import Solar_square from "../components/Root/Solar_square";


export default function Housing_society(){
    return <div>
        <VideoHero/>
        <TestimonialSection/>
        <ConsultationForm/>
        <StatsComponent/>
        <GuideDownload/>
        <SavingsGuarantee/>
        <SolarMaintenance/>
        <ImageCarousel/>
        <TestimonialCarousel/>
        <FAQ/>
        <Solar_square/>
        <Footer/>
    </div>
}

