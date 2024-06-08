import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "@/app/_styles/globals.css";
import Navigation from "@/app/_components/Navigation";
import Footer from "@/app/_components/Footer";

const jost = Jost({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s / Designo",
    default: "Designo",
  },
  description:
    "This is a landing page for a fictional company called Designo. It is built with Next.js and TypeScript. And the author is Olatoyan George.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className}`}>
        <Navigation />

        <main className="px-[14rem]">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
