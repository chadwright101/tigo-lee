import AboutComponent from "./_components/home-page/about-component";
import ContactComponent from "./_components/home-page/contact/contact-component";
import GalleryComponent from "./_components/home-page/gallery/gallery-component";
import HeroComponent from "./_components/home-page/hero/hero-component";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <AboutComponent />
      <GalleryComponent />
      <ContactComponent />
    </div>
  );
}
