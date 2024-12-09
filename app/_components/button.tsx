"use client";

import classNames from "classnames";
import Link from "next/link";
import { useFormStatus } from "react-dom";

interface Props {
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
  strokeWhite,
  disabled,
  pending,
}: Props & { pending?: boolean }) =>
  classNames(
    `flex gap-3 bg-champagne w-full items-center text-[20px] font-bold tracking-[0.025rem] text-white justify-center uppercase ease-in-out duration-300 py-1 px-7 rounded-lg ${cssClasses}`,
    {
      "bg-champagne cursor-not-allowed": disabled || pending,
      "desktop:hover:bg-white desktop:hover:text-black": !disabled || !pending,
      "border-4 border-white": strokeWhite,
      "border-4 border-champagne": !strokeWhite,
    }
  );

const Button = ({
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
          strokeWhite,
          disabled,
          pending,
        })}
        type={typeSubmit ? "submit" : "button"}
        onClick={onClick}
        disabled={disabled || pending}
        aria-label={children as string}
      >
        {pending && typeSubmit ? (
          <div className="spinner"></div>
        ) : (
          <>{children}</>
        )}
      </button>
    );
  }
};

export default Button;
