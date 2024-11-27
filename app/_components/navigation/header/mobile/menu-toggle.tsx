"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import classNames from "classnames";

import data from "@/app/_data/nav-data.json";
import Image from "next/image";

interface Props {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

const MenuToggle = ({ showMenu, setShowMenu }: Props) => {
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  const currentRoute = usePathname();
  return (
    <>
      <button
        className="sticky top-0 py-5 w-full bg-champagne border-b-4 border-pink desktop:hidden"
        onClick={() => setShowMenu(true)}
        aria-label="Open navigation menu"
      >
        <Image
          src={"/icons/menu-open-icon.svg"}
          alt="Menu open"
          width={20}
          height={12}
          className="mx-auto"
        />
      </button>
      <button
        className={classNames(
          "fixed z-50 desktop:hidden -mr-20 ease-in-out duration-300 delay-500 p-3 ml-auto top-6 right-6",
          {
            "mr-0": showMenu,
          }
        )}
        onClick={() => setShowMenu(false)}
        aria-label="Close navigation menu"
      >
        <Image
          src={"/icons/menu-close-icon.svg"}
          alt="Menu close"
          width={20}
          height={12}
        />
      </button>
      <nav
        className={classNames(
          "fixed top-0 left-0 bg-champagne w-full h-full ease-in-out duration-500 delay-300 z-20 desktop:hidden",
          {
            "translate-x-full": !showMenu,
            "translate-x-0": showMenu,
          }
        )}
      >
        <ul className="flex flex-col gap-10 px-8 py-[70px] list-none">
          {data.map(({ title, url }, index) => (
            <React.Fragment key={index}>
              {title !== "Accommodation" ? (
                <li
                  style={{ transitionDelay: `${(index + 1) * 55}ms` }}
                  className={classNames(`ease-in-out duration-300`, {
                    "translate-x-full": !showMenu,
                    "translate-x-0": showMenu,
                  })}
                >
                  <Link
                    className={classNames(
                      "text-[24px] text-white font-thin py-2 -my-2",
                      {
                        "border-b-[3px] border-orange pb-[6px] -mb-[6px]":
                          currentRoute === url,
                      }
                    )}
                    href={url}
                    onClick={() => setShowMenu(false)}
                    aria-label={title}
                  >
                    {title}
                  </Link>
                </li>
              ) : (
                <li
                  style={{ transitionDelay: `${(index + 1) * 55}ms` }}
                  className={classNames(`grid gap-8 ease-in-out duration-300`, {
                    "translate-x-full": !showMenu,
                    "translate-x-0": showMenu,
                  })}
                  aria-label={title}
                >
                  <div className="flex gap-2 items-center">
                    <span className="text-[24px] text-white font-thin">
                      {title}
                    </span>
                    <div className="grid gap-2">
                      <div
                        className={classNames(
                          "w-[16px] h-[2px] bg-white rotate-[90deg] rounded ease-in-out duration-200 translate-y-[6px]"
                        )}
                      ></div>
                      <div className="w-[16px] h-[2px] -translate-y-[4px] rounded bg-white"></div>
                    </div>
                  </div>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MenuToggle;
