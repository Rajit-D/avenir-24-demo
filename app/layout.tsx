import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.avenirnsec.live"),
  keywords: ["Avenir", "avenir","avenirnsec", "avenir nsec", "avenirnsec24", "Avenir 24", "avenir 24", "avenir nsec 24"],
  title: {
    default:"AVENIR'24",
    template: `%s | AVENIR'24`
  },
  openGraph:{
    description:"The official tech fest of PHOENIX",
    images:['https://www.avenirnsec.live/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.a2374b39.png&w=1920&q=75']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full bg-black bg-grid-white/[0.4] relative flex items-center justify-center flex-col">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] "></div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
