import { Metadata } from "next";

import AboutComponent from "./_components/home-page/about-component";
import ContactComponent from "./_components/home-page/contact/contact-component";
import GalleryComponent from "./_components/home-page/gallery/gallery-component";
import HeroComponent from "./_components/home-page/hero/hero-component";

export const metadata: Metadata = {
  title: "Tigo-Lee Professional Make-up Artist",
};

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <div
        className="-translate-y-16 tablet:-translate-y-16 desktop:-translate-y-20"
        id="about"
      ></div>
      <AboutComponent />
      <GalleryComponent />
      <div
        className="-translate-y-16 tablet:-translate-y-20 desktop:-translate-y-28"
        id="contact"
      ></div>
      <ContactComponent />
    </div>
  );
}
