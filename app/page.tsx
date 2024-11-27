import AboutComponent from "./_components/home-page/about-component";
import GalleryComponent from "./_components/home-page/gallery/gallery-component";
import HeroComponent from "./_components/home-page/hero/hero-component";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <AboutComponent />
      <GalleryComponent />
    </div>
  );
}
