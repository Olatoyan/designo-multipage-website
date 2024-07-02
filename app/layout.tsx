import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "@/app/_styles/globals.css";
import Navigation from "@/app/_components/Navigation";
import Footer from "@/app/_components/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const jost = Jost({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s / Designo",
    default: "Designo",
  },
  description:
    "This is a landing page for a fictional company called Designo. It is built with Next.js and TypeScript.",
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

        <main className="px-[14rem] desktop:px-24 tablet:px-0">{children}</main>

        <Footer />

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: { fontSize: "1.6rem", padding: "1.4rem 2.4rem" },
          }}
        />

        <Analytics />
      </body>
    </html>
  );
}
