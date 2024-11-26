import Link from "next/link";

import data from "@/app/_data/navigation.json";

const Footer = () => {
  return (
    <footer className="py-10 mt-10 bg-blue border-t-4 border-beige tablet:pt-10 tablet:pb-5">
      <div className="grid tablet:gap-5 px-7 max-w-[1280px] mx-auto tablet:grid-cols-2 tablet:px-10">
        <ul className="hidden list-none p-0 tablet:grid gap-1">
          {data.map(({ title, url }, index) => (
            <li key={index} className="text-white">
              <Link
                href={url}
                className="tablet:hover:text-white/75 text-[14px] ease-in-out duration-200 font-thin"
                aria-label={title}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="grid gap-7">
          <div className="grid place-items-center tablet:place-items-start tablet:justify-items-end gap-5">
            <p className="grid text-center text-white tablet:hidden">
              © Holiday In Plett{" "}
              <Link
                href="https://holidayinplett.co.za"
                className="p-2 -m-2 underline underline-offset-4 tablet:hover:text-white/75 ease-in-out duration-200 font-thin"
                aria-label="Adopt A Swimmer website"
              >
                www.holidayinplett.co.za
              </Link>
            </p>
            <hr className="w-full text-white/25 phone:w-1/2 tablet:hidden" />
            <p className="grid text-white text-center tablet:text-right tablet:text-[14px]">
              Designed & developed by{" "}
              <Link
                href="https://thewrightdesigns.co.za"
                target="_blank"
                className="p-2 -m-2 text-center underline underline-offset-4 tablet:hover:text-white/75 ease-in-out duration-200 font-thin tablet:text-right tablet:text-[14px]"
                aria-label="The Wright Designs website"
              >
                The Wright Designs
              </Link>
            </p>
          </div>
        </div>
        <p className="hidden text-center text-white col-span-2 text-[14px] tablet:block">
          © Holiday In Plett |{" "}
          <Link
            href="https://holidayinplett.co.za"
            className="p-2 -m-2 text-link underline underline-offset-4 text-[14px] tablet:hover:text-white/75 ease-in-out duration-200 font-thin"
            aria-label="Adopt A Swimmer website"
          >
            www.holidayinplett.co.za
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
