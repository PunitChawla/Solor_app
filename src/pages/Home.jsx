import ConsultationForm from "../components/Home/ConsultationForm ";
import Hero from "../components/Home/Hero";
import WhyChooseSolar from "../components/Home/WhyChooseSolar";
import NewsSlider from "../components/Root/News";

export default function Home() {
    return <div>
        <Hero/>
        <ConsultationForm/>
        <NewsSlider/>
        <WhyChooseSolar/>
    </div>
}