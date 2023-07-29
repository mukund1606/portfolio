import "@/styles/globals.css";
import { Metadata } from "next";

// Components
import StartAnimation from "@/components/StartAnimation";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "<Mukund/> Portfolio | Full-Stack Developer | Python Developer | Enthusiast | Student",
  description:
    "Portfolio of Mukund Mittal. I am a full stack developer and python enthusiast. I love to build things and solve problems.",
  authors: [{ name: "Mukund Mittal", url: "www.mukund.page" }],
  manifest: "/manifest.json",
  themeColor: "#000000",
  generator: "NextJS 13.4.12",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="top-0 w-full text-center bg-white/20">
          This site is under construction. Will be live soon.
        </div>
        <Navbar />
        <StartAnimation />
        {children}
      </body>
    </html>
  );
}
