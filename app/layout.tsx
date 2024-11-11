import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const montserratLight = localFont({
  src: './fonts/Montserrat-Light.woff',
  variable: '--font-montserrat-light',
  weight: '300',
});

const montserratRegular = localFont({
  src: './fonts/Montserrat-Regular.woff',
  variable: '--font-montserrat-regular',
  weight: '400',
});

const montserratSemiBold = localFont({
  src: './fonts/Montserrat-SemiBold.woff',
  variable: '--font-montserrat-semibold',
  weight: '600',
});

const montserratBold = localFont({
  src: './fonts/Montserrat-Bold.woff',
  variable: '--font-montserrat-bold',
  weight: '700',
});


export const metadata: Metadata = {
  title: "Labo congo soft",
  description: "Lc soft - l'agence de développement de solutions digitale en RDC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratRegular.variable} ${montserratBold.variable} ${montserratLight.variable} ${montserratSemiBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
