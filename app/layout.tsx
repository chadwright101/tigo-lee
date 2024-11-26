import HeaderWrapper from "./_components/navigation/header/header-wrapper";
import "./_styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderWrapper />
        {children}
      </body>
    </html>
  );
}
