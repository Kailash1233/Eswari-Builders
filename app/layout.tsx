import type { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ClientLayout from "@/components/Clientpopup";
import WhatsAppButton from "@/components/whatsappIcon";

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Eswari Builders | Premium Construction Company",
  description: "Premium Residential and Commercial Construction in Pondicherry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${merriweatherSans.className} flex min-h-screen flex-col`}
      >
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
