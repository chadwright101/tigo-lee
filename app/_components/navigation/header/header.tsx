"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import data from "@/app/_data/nav-data.json";
import MenuToggle from "./mobile/menu-toggle";
import classNames from "classnames";
import { useState } from "react";
import LogoComponent from "./logo-component";

interface Props {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: Props) => {
  const currentRoute = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className={classNames(
        "bg-pink z-50 desktop:h-[106px] desktop:sticky desktop:border-b-4 border-champagne ease-in-out duration-300",
        {
          "desktop:top-0": !isScrolled,
          "desktop:-top-8": isScrolled,
        }
      )}
    >
      <div
        className={classNames(
          "grid justify-items-center sticky top-0 desktop:px-10 max-w-[1280px] mx-auto desktop:flex desktop:justify-between",
          {
            "pt-4 gap-5": !showMenu,
          }
        )}
      >
        <LogoComponent
          isScrolled={isScrolled}
          cssClasses={showMenu ? "-mt-72" : ""}
        />
        <MenuToggle setShowMenu={setShowMenu} showMenu={showMenu} />
        <nav className="hidden desktop:block ease-in-out duration-300 desktop:translate-y-[50px]">
          <ul className="flex gap-4 list-none p-0">
            {data.map(({ title, url }, index) => (
              <li key={index}>
                <Link
                  className={classNames(
                    "text-[16px] text-black desktop:hover:opacity-80 ease-in-out duration-200 font-thin underline-offset-[4px] decoration-black/50 decoration-1",
                    {
                      underline: currentRoute === url,
                    }
                  )}
                  href={url}
                  aria-label={title}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
