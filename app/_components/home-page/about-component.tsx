import ContentWrapper from "@/app/_utils/content-wrapper";
import Button from "../button";
import Image from "next/image";

const AboutComponent = () => {
  return (
    <ContentWrapper>
      <main className="my-10 pb-10 border-b border-black/25 desktop:border-none desktop:mb-15 desktop:mt-8 desktop:pb-0">
        <div className="relative mb-7 tablet:hidden">
          <Image
            src="/placeholder/Frame 53.png"
            alt="Tigo-Lee Professional Make-up Artist"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
          <h2 className="font-majesty absolute bottom-3 right-4 text-white">
            Tigo-Lee
          </h2>
        </div>
        <div className="tablet:grid grid-cols-2 desktop:grid-cols-[2.5fr_1fr] gap-x-10">
          <div>
            <h3 className="mb-7">About</h3>
            <div>
              <p className="mb-5">
                Since 2010, my passion for makeup has taken me from studying
                film, costume makeup, and styling in Cape Town to pursuing
                advanced training in bridal and fashion makeup. Returning to the
                stunning Garden Route where I grew up, I deepened my expertise
                in beauty and skincare, qualifying as a somatologist in 2014.
                Having worked in salons both locally and internationally, I now
                own my own salon in picturesque Plettenberg Bay.
              </p>
              <p className="mb-5">
                Bridal makeup is my specialty and true calling, as I travel
                throughout the Garden Route to help brides feel and look their
                best on their special day. My vision for every bride is simple:
                to make them realise their unique beauty as they step into a
                memorable new chapter.
              </p>
              <blockquote className="text-paragraph font-bold">
                “The best colour in the world is the one that looks good on you”
                <cite className="font-normal italic"> – Coco Chanel.</cite>
              </blockquote>
              <div className="mt-8 flex flex-col desktop:flex-row gap-y-5 gap-x-10">
                <Button url="/portfolio">View Portfolio</Button>
                <Button url="/vendors" cssClasses="hidden tablet:grid">
                  Vendors
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden relative tablet:block">
            <Image
              src="/placeholder/Frame 53.png"
              alt="Tigo-Lee Professional Make-up Artist"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
            <h2 className="font-majesty absolute bottom-3 right-4 text-white">
              Tigo-Lee
            </h2>
          </div>
        </div>
      </main>
    </ContentWrapper>
  );
};

export default AboutComponent;
