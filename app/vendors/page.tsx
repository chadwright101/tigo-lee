import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ContentWrapper from "../_utils/content-wrapper";
import Button from "../_components/button";

import data from "@/app/_data/general-data.json";

export const metadata: Metadata = {
  title: "Vendors - Tigo-Lee Professional Make-up Artist",
};

const { vendorList } = data;

const Vendors = () => {
  return (
    <ContentWrapper>
      <main className="pt-10">
        <h2 className="text-center mb-10">Vendors</h2>
        <ul className="flex flex-wrap items-center justify-center gap-10">
          {vendorList.map(({ image, url, alt }, index) => (
            <li key={index}>
              <Link
                className="desktop:hover:opacity-80 ease-in-out duration-300"
                href={url}
                target="_blank"
                aria-label={`Visit ${alt}`}
              >
                <Image
                  src={image}
                  alt={alt}
                  width={300}
                  height={300}
                  className="aspect-square max-w-[300px] h-auto desktop:max-w-[200px] object-contain"
                  sizes="(max-width: 425px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="tablet:max-w-[250px] mx-auto mt-10">
          <Button url="/#contact">Get In Touch</Button>
        </div>
      </main>
    </ContentWrapper>
  );
};

export default Vendors;
