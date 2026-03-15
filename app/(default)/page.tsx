export const metadata = {
  title: "Joystick Repair",
  description: "Professional PlayStation Controller Repair",
};

import Navbar from "@/components/navbar";
import HeroHome from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import Gallery from "@/components/gallery";
import BeforeAfter from "@/components/before-after";
import Reviews from "@/components/reviews";
import Founder from "@/components/founder";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroHome />
      <FeaturesPlanet />
      <Gallery />
      <Reviews />
      <BeforeAfter />
      <Founder />
      <WhatsAppButton />
    </>
  );
}