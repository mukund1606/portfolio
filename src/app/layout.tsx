import "@/styles/globals.css";

import { Providers } from "@/app/providers";
import NavBar from "@/components/navbar";

export const metadata = {
  title:
    "<Mukund/> Portfolio | Full-Stack Developer | Python Developer | Enthusiast | Student",
  description:
    "Portfolio of Mukund Mittal. I am a full stack developer and python enthusiast. I love to build things and solve problems.",
  authors: [{ name: "Mukund Mittal", url: "www.mukund.page" }],
  manifest: "/manifest.json",
  themeColor: "#000000",
  generator: "NextJS 13.5.6",
  viewport: "width=device-width, initial-scale=1.0",
  creator: "Mukund Mittal",
  icons: { apple: "/logo.png" },
  metadataBase: new URL("https://mukund.page/"),
  alternates: {
    canonical: "https://mukund.page/",
    languages: {
      en: "https://mukund.page/",
    },
  },
  openGraph: {
    title:
      "<Mukund/> Portfolio | Full-Stack Developer | Python Developer | Enthusiast | Student",
    description:
      "Portfolio of Mukund Mittal. I am a full stack developer and python enthusiast. I love to build things and solve problems.",
    images: "/logo.png",
    url: "https://mukund.page/",
    siteName: "<Mukund/> Portfolio",
    locale: "en",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#09090b" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className="min-h-screen w-full">
        <Providers>
          <NavBar />
          <div className="pb-[67px] lg:pb-0">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
