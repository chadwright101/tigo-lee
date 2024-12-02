import type { Metadata } from "next";

import Footer from "./_components/navigation/footer/footer";
import HeaderWrapper from "./_components/navigation/header/header-wrapper";

import "./_styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tigolee.co.za"),
  title: "Tigo-Lee Professional Make-up Artist",
  description:
    "Tigo-Lee Professional Make-up Artist - Bridal makeup is my specialty and true calling, as I travel throughout the Garden Route to help brides feel and look their best on their special day.",
  keywords:
    "real brides, real brides magazine, brides, wedding, wedding magazine, real weddings",
  openGraph: {
    description:
      "Tigo-Lee Professional Make-up Artist - Bridal makeup is my specialty and true calling, as I travel throughout the Garden Route to help brides feel and look their best on their special day..",
    type: "website",
    locale: "en_ZA",
    siteName: "Tigo-Lee Professional Make-up Artist",
    images: [
      {
        url: "/assets/images/open-graph-image.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tigo-Lee Professional Make-up Artist",
    url: "https://www.tigolee.co.za",
    logo: "/logo/tigo-lee-logo.png",
    description:
      "Tigo-Lee Professional Make-up Artist - Bridal makeup is my specialty and true calling, as I travel throughout the Garden Route to help brides feel and look their best on their special day.",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <HeaderWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
