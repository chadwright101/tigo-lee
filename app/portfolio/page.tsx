import Image from "next/image";

import classNames from "classnames";

import data from "@/app/_data/general-data.json";
import React from "react";
import Button from "../_components/button";

const { portfolioImages } = data;

const Portfolio = () => {
  return (
    <main className="pt-10 max-w-[1280px] mx-auto">
      <h2 className="text-center mb-10">Portfolio</h2>
      <ul className="grid gap-5 min-[800px]:grid-cols-2 min-[1000px]:hidden">
        {portfolioImages.map((image, index) => (
          <li key={index} className="aspect-square">
            <Image
              src={image}
              alt={`Tigo-Lee portfolio - Image ${index + 1}`}
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </li>
        ))}
      </ul>
      <ul className="hidden min-[1000px]:grid gap-5 grid-cols-3">
        {portfolioImages.map((image, index) => (
          <React.Fragment key={index}>
            <li
              className={classNames("grid-rows-[5fr_1fr]", {
                "grid desktop:grid-rows-[339px_54px] gap-5": index === 5,
                "aspect-square": index !== 5,
              })}
            >
              <Image
                src={image}
                alt={`Tigo-Lee portfolio - Image ${index + 1}`}
                width={1280}
                height={400}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {index === 5 && (
                <div className="px-5 desktop:px-0">
                  <Button url="/#contact">Get In Touch</Button>
                </div>
              )}
            </li>
          </React.Fragment>
        ))}
      </ul>
      <div className="px-7 mt-10 min-[1000px]:hidden">
        <Button url="/#contact" cssClasses="">
          Get In Touch
        </Button>
      </div>
    </main>
  );
};

export default Portfolio;
