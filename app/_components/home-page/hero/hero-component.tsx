import HeroSlider from "@/app/_components/home-page/hero/hero-slider";

import data from "@/app/_data/general-data.json";

const { heroSlider } = data;

const HeroComponent = () => {
  return (
    <section className="max-w-[1280px] mx-auto -z-10">
      <div className="overflow-hidden">
        <HeroSlider data={heroSlider} cssClasses="h-[650px] tablet:h-[550px]" />
      </div>
    </section>
  );
};

export default HeroComponent;
