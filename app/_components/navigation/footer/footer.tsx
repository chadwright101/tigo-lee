import Link from "next/link";

import data from "@/app/_data/nav-data.json";
import Image from "next/image";
import SocialIcons from "@/app/_lib/social-icons";

const Footer = () => {
  return (
    <footer className="py-10 mt-10 bg-pink border-t-4 border-black tablet:pt-10 tablet:pb-5">
      <div className="grid tablet:gap-5 px-7 max-w-[1280px] mx-auto tablet:grid-cols-2 tablet:px-10">
        <ul className="hidden list-none p-0 tablet:grid">
          {data.map(({ title, url }, index) => (
            <li key={index} className="text-black">
              <Link
                href={url}
                className="tablet:hover:text-black/75 text-[14px] ease-in-out duration-200 font-thin"
                aria-label={title}
              >
                {title}
              </Link>
            </li>
          ))}
          <SocialIcons small champagne cssClasses="mt-2" />
        </ul>
        <div className="grid gap-7">
          <div className="grid gap-5 place-items-center tablet:place-items-start tablet:justify-items-end tablet:gap-1">
            <SocialIcons small champagne cssClasses="gap-4 tablet:hidden" />
            <p className="grid text-black text-center tablet:text-right tablet:text-[14px] tablet:self-end">
              Designed & developed by{" "}
              <Link
                href="https://thewrightdesigns.co.za"
                target="_blank"
                className="p-2 -m-2 text-center underline underline-offset-4 tablet:hover:text-black/75 ease-in-out duration-200 font-thin tablet:text-right tablet:text-[14px]"
                aria-label="The Wright Designs website"
              >
                The Wright Designs
              </Link>
            </p>
            <Image
              src="/logo/tigo-lee-logo-eye.png"
              alt="Tigo-Lee Professional Make-up Artist logo"
              width={120}
              height={90}
              className="w-24 h-auto -mb-2 tablet:order-first tablet:w-[120px]"
            />
            <p className="grid text-center text-black tablet:hidden">
              © Tigo-Lee{" "}
              <Link
                href="https://tigolee.co.za"
                className="p-2 -m-2 underline underline-offset-4 tablet:hover:text-black/75 ease-in-out duration-200 font-thin"
                aria-label="Tigo-Lee Professional Make-up Artist website"
              >
                www.tigolee.co.za
              </Link>
            </p>
          </div>
        </div>
        <p className="hidden text-center text-black col-span-2 text-[14px] tablet:block">
          © Tigo-Lee |{" "}
          <Link
            href="https://tigolee.co.za"
            className="p-2 -m-2 text-link underline underline-offset-4 text-[14px] tablet:hover:text-black/75 ease-in-out duration-200 font-thin"
            aria-label="Tigo-Lee Professional Make-up Artist website"
          >
            www.tigolee.co.za
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
