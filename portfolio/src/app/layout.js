import { Geist, Geist_Mono, Michroma } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import background_light from "../../public/background_light.jpg";
import background_dark from "../../public/background_dark.jpg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Santiago Taborda - Portafolio",
  description: "Portafolio de Santiago Benjamín Taborda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable} antialiased min-w-96 w-full min-h-screen relative`}
      >
        <Image
          src={background_light}
          alt="BackGround"
          fill
          style={{ objectFit: "cover" }}
          className="dark:hidden"
          priority
          unoptimized
        />
        <Image
          src={background_dark}
          alt="BackGround"
          fill
          style={{ objectFit: "cover" }}
          className="hidden dark:block"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gray-50/10 dark:bg-black/10 z-20" />
        {children}
      </body>
    </html>
  );
}
