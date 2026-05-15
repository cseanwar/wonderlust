import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import StartYourJourney from "@/components/StartYourJourney";
import Testimonials from "@/components/Testimonials";
import WhyWondurlust from "@/components/WhyWondurlust";

export default function Home() {
  return (
    <div>
      <Banner />
      <Featured />
      <WhyWondurlust />
      <Testimonials />
      <StartYourJourney />
    </div>
  );
}
