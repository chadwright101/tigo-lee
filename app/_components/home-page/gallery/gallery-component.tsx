import Image from "next/image";

import data from "@/app/_data/general-data.json";
import classNames from "classnames";
import Button from "../../button";
import ContentWrapper from "@/app/_utils/content-wrapper";

const { galleryImages } = data;

const GalleryComponent = () => {
  return (
    <ContentWrapper>
      <section className="my-10 max-w-[1280px] pb-10 border-b border-black/25 mx-auto desktop:my-15 desktop:pb-0 desktop:border-none">
        <ul className="grid gap-3 -mx-7 min-[600px]:grid-cols-2 min-[1000px]:hidden">
          {galleryImages.slice(0, 4).map((image, index) => (
            <li key={index} className="aspect-square">
              <Image
                src={image}
                alt={`Tigo-Lee portfolio - Image ${index + 1}`}
                width={1280}
                height={400}
                className="w-full h-full object-cover"
              />
            </li>
          ))}
        </ul>
        <ul className="hidden min-[1000px]:grid gap-5 grid-rows-[auto] grid-cols-4">
          {galleryImages.map((image, index) => (
            <li
              key={index}
              className={classNames("max-h-[340px]", {
                "col-span-4": index === 0,
                "col-span-2": index === 1 || index === 2 || index === 5,
              })}
            >
              <Image
                src={image}
                alt={`Tigo-Lee portfolio - Image ${index + 1}`}
                width={1280}
                height={400}
                className="w-full h-full object-cover"
              />
            </li>
          ))}
        </ul>
        <Button url="/vendors" cssClasses="mt-10 tablet:hidden">
          Vendors
        </Button>
      </section>
    </ContentWrapper>
  );
};

export default GalleryComponent;
