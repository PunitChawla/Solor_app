import AnimatedGallery from "../components/About_us/Hero";
import TeamSection from "../components/About_us/TeamSection";
import Timeline from "../components/About_us/Timeline";
import VisionSection from "../components/About_us/VisionSection";
import Footer from "../components/Root/Footer";
import Solar_square from "../components/Root/Solar_square";


export default function About_us(){
    return <div>
        <AnimatedGallery/>
        <VisionSection/>
        {/* <TeamSection/> */}
        <Timeline/>
        <Solar_square/>
        <Footer/>
    </div>
}