"use client";

import { useEffect, useState } from "react";

import classNames from "classnames";

import Button from "@/app/_components/button";
import Recaptcha from "@/app/_lib/recaptcha";
import { sendEmail } from "@/app/_actions/actions";

interface Props {
  showMore: boolean;
  setShowMore: (showMore: boolean) => void;
}

const ContactForm = ({ showMore, setShowMore }: Props) => {
  const [submissionStartTime, setSubmissionStartTime] = useState(0);
  const [validateRecaptcha, setValidateRecaptcha] = useState(false);
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);

  useEffect(() => {
    const startSubmissionTimer = () => {
      setSubmissionStartTime(new Date().getTime());
    };
    startSubmissionTimer();
    if (showEmailSubmitted) {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showEmailSubmitted]);

  const handleRecaptchaChange = (value: string | null) => {
    if (value === null) {
      setValidateRecaptcha(false);
      console.log("Recaptcha expired");
    } else {
      const elapsedTime = new Date().getTime() - submissionStartTime;
      if (elapsedTime < 3000) {
        console.error("Form submitted too quickly. Possible bot activity.");
        return;
      } else {
        setValidateRecaptcha(!!value);
      }
    }
  };

  return (
    <div
      className={classNames(
        "bg-champagne py-10 -mx-7 px-7 desktop:mx-0 desktop:p-5",
        {
          "pt-10 tablet:pt-5": showEmailSubmitted,
        }
      )}
    >
      <h3 className="text-white mb-8">Wedding enquiry form</h3>
      {!showEmailSubmitted && (
        <p className="mb-8 text-white italic tablet:text-left">
          Fill out the form below and I will get back to you ASAP...
        </p>
      )}
      {showEmailSubmitted ? (
        <>
          <p className="text-[20px] text-center text-white italic tablet:text-left pb-5">
            Your email has been sent, we will be in touch soon.
          </p>
        </>
      ) : (
        <form
          className="grid gap-y-10 gap-x-8 tablet:grid-cols-2"
          action={async (formData) => {
            await sendEmail(formData);
            setShowEmailSubmitted(true);
          }}
        >
          <input type="hidden" name="_honey" className="hidden" />
          <label
            htmlFor="emailAddress"
            className="grid gap-y-4 grid-cols-[60px_1fr] text-subheading uppercase text-white"
          >
            Email: <span className="text-white font-thin">*</span>
            <input
              type="email"
              id="emailAddress"
              name="email"
              className="border border-black/50 bg-white h-10 py-4 px-3 col-span-2"
              placeholder="Email address goes here..."
              autoComplete="email"
              required
              aria-required="true"
            />
          </label>

          <label
            htmlFor="fullName"
            className="grid gap-y-4 grid-cols-[100px_1fr] text-subheading uppercase text-white"
          >
            Full Name: <span className="text-white font-thin">*</span>
            <input
              type="text"
              id="fullName"
              name="name"
              className="border border-black/50 bg-white h-10 py-4 px-3 col-span-2"
              placeholder="Full name goes here..."
              autoComplete="name"
              required
              aria-required="true"
            />
          </label>

          {!showMore ? (
            <Button
              normalButton
              cssClasses="tablet:self-start tablet:col-span-2"
              onClick={() => setShowMore(true)}
              strokeWhite
            >
              Next
            </Button>
          ) : (
            <>
              <label
                htmlFor="phoneNumber"
                className="grid gap-4 text-subheading uppercase text-white"
              >
                Phone Number:
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phone"
                  className="border border-black/50 bg-white h-10 py-4 px-3"
                  placeholder="Phone number goes here..."
                  autoComplete="tel"
                />
              </label>
              <label
                htmlFor="weddingDate"
                className="grid gap-4 text-subheading uppercase text-white"
              >
                Date of Wedding:
                <input
                  type="date"
                  id="weddingDate"
                  name="weddingDate"
                  className="border border-black/50 bg-white h-10 py-4 px-3"
                />
              </label>
              <label
                htmlFor="weddingVenue"
                className="grid gap-4 text-subheading uppercase text-white"
              >
                Wedding Venue:
                <input
                  type="text"
                  id="weddingVenue"
                  name="weddingVenue"
                  className="border border-black/50 bg-white h-10 py-4 px-3"
                  placeholder="Wedding venue goes here..."
                />
              </label>
              <label
                htmlFor="preparationVenue"
                className="grid gap-4 text-subheading uppercase text-white"
              >
                Preparation Venue:
                <input
                  type="text"
                  id="preparationVenue"
                  name="preparationVenue"
                  className="border border-black/50 bg-white h-10 py-4 px-3"
                  placeholder="Preparation venue goes here..."
                />
              </label>
              <label
                htmlFor="numberOfPeople"
                className="grid gap-4 text-subheading uppercase text-white tablet:col-span-2"
              >
                No. of People Needing Make-up:
                <input
                  type="number"
                  id="numberOfPeople"
                  name="numberOfPeople"
                  className="border border-black/50 bg-white h-10 py-4 px-3"
                  placeholder="Number of people..."
                />
              </label>
              <label
                htmlFor="message"
                className="grid gap-y-4 grid-cols-[86px_1fr] text-subheading uppercase text-white tablet:col-span-2"
              >
                Message: <span className="text-white font-thin">*</span>
                <textarea
                  id="message"
                  name="message"
                  className="border border-black/50 rounded bg-white py-4 px-3 font-thin col-span-2"
                  rows={3}
                  placeholder="Message goes here..."
                  required
                  aria-required="true"
                ></textarea>
              </label>
              <Button
                typeSubmit
                normalButton
                cssClasses={classNames("tablet:self-start", {
                  "opacity-50 desktop:cursor-not-allowed desktop:hover:px-9 desktop:hover:mx-0 tablet:col-span-2":
                    !validateRecaptcha,
                  "hover:desktop:opacity-90": validateRecaptcha,
                })}
                disabled={!validateRecaptcha}
                strokeWhite
              >
                Submit
              </Button>
              {!validateRecaptcha && (
                <Recaptcha onChange={handleRecaptchaChange} />
              )}
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
