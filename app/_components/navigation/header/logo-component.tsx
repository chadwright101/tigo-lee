import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  isScrolled: boolean;
  cssClasses?: string;
}

const LogoComponent = ({ isScrolled, cssClasses }: Props) => {
  return (
    <Link
      href="https://tigolee.co.za"
      aria-label="Tigo-Lee Professional Make-up Artist"
      className={classNames(
        `grid gap-1 justify-items-center ease-in-out duration-500 desktop:hover:opacity-90 ${cssClasses}`,
        {
          "desktop:bg-pink/95 desktop:px-5 desktop:pb-5 desktop:rounded-b-lg":
            !isScrolled,
        }
      )}
    >
      <Image
        src="/logo/tigo-lee-logo-eye.png"
        alt="Tigo-Lee Professional Make-up Artist logo"
        width={125}
        height={101}
        className={classNames(
          "w-[115px] h-auto ease-in-out desktop:duration-500",
          {
            "desktop:w-[65px] desktop:translate-y-[26px] desktop:-translate-x-24":
              isScrolled,
            "desktop:w-[125px]": !isScrolled,
          }
        )}
      />
      <h1
        className={classNames(
          "font-majesty text-black text-[24px] grid gap-2 justify-items-center",
          {
            "desktop:text-[32px]": !isScrolled,
            "desktop:-translate-y-[17px] desktop:translate-x-1 desktop:text-[24px]":
              isScrolled,
          }
        )}
      >
        Tigo-Lee
        <span
          className={classNames(
            "font-livvic text-[14px] font-light tracking-wide uppercase tablet:text-[16px] tablet:tracking-wider ease-in-out duration-300",
            {
              "desktop:opacity-0 desktop:scale-y-0": isScrolled,
            }
          )}
        >
          Professional Make-up Artist
        </span>
      </h1>
    </Link>
  );
};

export default LogoComponent;
