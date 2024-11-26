"use client";

import classNames from "classnames";
import Link from "next/link";
import { useFormStatus } from "react-dom";

interface Props {
  backgroundColor?: "champagne";
  strokeWhite?: boolean;
  onClick?: () => void;
  typeSubmit?: boolean;
  children?: React.ReactNode;
  cssClasses?: string;
  url?: string;
  target?: string;
  normalButton?: boolean;
  disabled?: boolean;
}

const buttonStyles = ({
  cssClasses,
  backgroundColor,
  strokeWhite,
  disabled,
}: Props) =>
  classNames(
    `flex gap-3 w-full items-center text-[20px] font-bold tracking-[0.025rem] text-white justify-center uppercase ease-in-out duration-300 py-1 px-7 rounded-lg ${cssClasses}`,
    {
      "bg-champagne border-4 border-champagne desktop:hover:bg-transparent desktop:hover:text-black":
        backgroundColor === "champagne" && !strokeWhite,
      "bg-champagne border-4 border-white desktop:hover:bg-white desktop:hover:text-black":
        backgroundColor === "champagne" && strokeWhite && !disabled,
      "bg-champagne border-4 border-white cursor-not-allowed":
        backgroundColor === "champagne" && strokeWhite && disabled,
    }
  );

const Button = ({
  backgroundColor = "champagne",
  onClick,
  typeSubmit,
  children,
  cssClasses,
  url = "#",
  target,
  normalButton,
  disabled,
  strokeWhite,
}: Props) => {
  const { pending } = useFormStatus();

  if (!normalButton) {
    return (
      <Link
        href={url}
        target={target}
        className={buttonStyles({
          cssClasses,
          backgroundColor,
          strokeWhite,
          disabled,
        })}
        aria-label={children as string}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={buttonStyles({
          cssClasses,
          backgroundColor,
          strokeWhite,
          disabled,
        })}
        type={typeSubmit ? "submit" : "button"}
        onClick={onClick}
        disabled={disabled}
        aria-label={children as string}
      >
        {pending ? <div className="spinner"></div> : <>{children}</>}
      </button>
    );
  }
};

export default Button;
