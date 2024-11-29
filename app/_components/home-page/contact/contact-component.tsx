"use client";

import { useState } from "react";
import Link from "next/link";

import ContentWrapper from "@/app/_utils/content-wrapper";
import { showEmailAddress, showPhoneNumber } from "@/app/_actions/actions";
import SocialIcons from "@/app/_lib/social-icons";
import Image from "next/image";
import ContactForm from "./contact-form";
import classNames from "classnames";

const ContactComponent = () => {
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showspinnerPhone, setShowSpinnerPhone] = useState(false);
  const [showspinnerEmail, setShowspinnerEmail] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleShowPhoneNumber = async () => {
    setShowSpinnerPhone(true);
    const phoneNumber = await showPhoneNumber();
    setShowPhone(phoneNumber);
    setShowSpinnerPhone(false);
  };

  const handleShowEmailAddress = async () => {
    setShowspinnerEmail(true);
    const emailAddress = await showEmailAddress();
    setShowEmail(emailAddress);
    setShowspinnerEmail(false);
  };

  return (
    <ContentWrapper>
      <section className="mt-10">
        <h2 className="mb-8">Contact</h2>
        <div className="desktop:grid grid-cols-2 gap-x-10">
          <div className="grid gap-10">
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-8 tablet:gap-6">
                <div className="grid gap-1 phone:grid-cols-[70px_1fr]">
                  <h3 className="text-subheading">Email:</h3>
                  {showEmail === "Show email address" ? (
                    <button
                      onClick={handleShowEmailAddress}
                      className="text-paragraph py-3 px-2 -my-3 -mx-2 hover:cursor-pointer tablet:p-0 tablet:m-0 italic justify-self-start text-linkBlue"
                      aria-label="Show email address"
                    >
                      {showspinnerEmail ? (
                        <>
                          <div className="spinner-champagne"></div>
                        </>
                      ) : (
                        showEmail
                      )}
                    </button>
                  ) : (
                    <Link
                      href={`mailto:${showEmail}`}
                      className="text-paragraph self-center tablet:hover:text-pink text-linkBlue"
                    >
                      {showEmail}
                    </Link>
                  )}
                </div>
                <div className="grid gap-1 justify-items-start phone:grid-cols-[70px_1fr]">
                  <h3 className="text-subheading">Phone:</h3>
                  {showPhone === "Show phone number" ? (
                    <button
                      onClick={handleShowPhoneNumber}
                      className="text-paragraph py-3 px-2 -my-3 -mx-2 hover:cursor-pointer tablet:p-0 tablet:m-0 italic text-linkBlue"
                      aria-label="Show phone number"
                    >
                      {showspinnerPhone ? (
                        <>
                          <div className="spinner-champagne"></div>
                        </>
                      ) : (
                        showPhone
                      )}
                    </button>
                  ) : (
                    <Link
                      href={`tel:${showPhone}`}
                      className="text-paragraph self-center tablet:hover:text-pink text-linkBlue"
                    >
                      {showPhone}
                    </Link>
                  )}
                </div>
                <SocialIcons cssClasses="tablet:hidden" />
                <SocialIcons small cssClasses="hidden tablet:flex" />
              </div>
            </div>
            <ContactForm showMore={showMore} setShowMore={setShowMore} />
          </div>
          <div
            className={classNames("hidden desktop:grid gap-10", {
              "grid-rows-[488px]": !showMore,
              "grid-rows-[579.5px_579.5px]": showMore,
            })}
          >
            <Image
              src="/images/JJ-238.jpg"
              alt="Tigo_lee Professional Make-up Artist"
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
            <Image
              src="/images/Tigo-31.jpg"
              alt="Tigo_lee Professional Make-up Artist"
              width={500}
              height={400}
              className={classNames("w-full h-full object-cover", {
                hidden: !showMore,
              })}
            />
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default ContactComponent;
