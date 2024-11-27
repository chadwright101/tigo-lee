import Link from "next/link";
import Image from "next/image";

import whatsapp from "@/public/icons/whatsapp-black.svg";
import facebook from "@/public/icons/facebook-black.svg";
import instagram from "@/public/icons/instagram-black.svg";
import whatsappChampagne from "@/public/icons/whatsapp-champagne.svg";
import facebookChampagne from "@/public/icons/facebook-champagne.svg";
import instagramChampagne from "@/public/icons/instagram-champagne.svg";

interface Props {
  cssClasses?: string;
  small?: boolean;
  champagne?: boolean;
}

const SocialIcons = ({ cssClasses, small, champagne }: Props) => {
  if (small) {
    return (
      <ul className={`flex gap-2 ${cssClasses}`}>
        <li>
          <Link
            href=""
            target="_blank"
            className="tablet:tablet:hover:opacity-80 ease-in-out duration-200"
            aria-label="View our Facebook page"
          >
            <Image
              src={!champagne ? facebook : facebookChampagne}
              alt="View our Facebook page"
              width={24}
              height={24}
            />
          </Link>
        </li>
        <li>
          <Link
            href=""
            target="_blank"
            className="tablet:tablet:hover:opacity-80 ease-in-out duration-200"
            aria-label="View our Instagram profile"
          >
            <Image
              src={!champagne ? instagram : instagramChampagne}
              alt="View our Instagram profile"
              width={24}
              height={24}
            />
          </Link>
        </li>
        <li>
          <Link
            href=""
            target="_blank"
            className="tablet:tablet:hover:opacity-80 ease-in-out duration-200"
            aria-label="Get in touch on WhatsApp"
          >
            <Image
              src={!champagne ? whatsapp : whatsappChampagne}
              alt="Get in touch on WhatsApp"
              width={24}
              height={24}
            />
          </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className={`flex gap-5 ${cssClasses}`}>
        <li>
          <Link
            href=""
            className="grid place-items-center tablet:hover:opacity-80 ease-in-out duration-200"
            target="_blank"
            aria-label="View our Facebook page"
          >
            <Image
              src={!champagne ? facebook : facebookChampagne}
              alt="View our Facebook page"
              width={38}
              height={38}
            />
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="grid place-items-center tablet:hover:opacity-80 ease-in-out duration-200"
            target="_blank"
            aria-label="View our Instagram profile"
          >
            <Image
              src={!champagne ? instagram : instagramChampagne}
              alt="View our Instagram profile"
              width={38}
              height={38}
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://wa.me/27610093643?src=qr"
            className="grid place-items-center tablet:hover:opacity-80 ease-in-out duration-200"
            target="_blank"
            aria-label="Get in touch on WhatsApp"
          >
            <Image
              src={!champagne ? whatsapp : whatsappChampagne}
              alt="Get in touch on WhatsApp"
              width={38}
              height={38}
            />
          </Link>
        </li>
      </ul>
    );
  }
};

export default SocialIcons;
