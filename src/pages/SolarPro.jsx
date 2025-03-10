import FAQ from "../components/Root/Faq";
import Footer from "../components/Root/Footer";
import Solar_square from "../components/Root/Solar_square";
import SolarProBanner from "../SolorPro/home";
import Map from "../SolorPro/Map";
import OurImpact from "../SolorPro/OurImpact";
import SolarProForm from "../SolorPro/SolarProForm ";
import TestimonialCarousel from "../SolorPro/TestimonialCarousel ";
import WhoAreWe from "../SolorPro/WhoAreWe ";
import WhyPartner from "../SolorPro/WhyPartner";


export default function SolarPro(){
    return <div>
    <SolarProBanner/>
    <SolarProForm/>
    <WhoAreWe/>
    <OurImpact/>
    <WhyPartner/>
    <Map/>
    <TestimonialCarousel/>
    <FAQ/>
    <Solar_square/>
    <Footer/>
    </div>
}

