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
  metadataBase: new URL("https://eswaribuilders.in"),
  title: "Eswari Builders | Best Construction Company in Pondicherry",
  description:
    "Eswari Builders — trusted house construction company in Pondicherry since 2002. Premium residential & commercial construction. Free site visit. Call +91 90920 97190.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Eswari Builders | Best Construction Company in Pondicherry",
    description:
      "Eswari Builders — trusted house construction company in Pondicherry since 2002. Premium residential & commercial construction. Free site visit. Call +91 90920 97190",

    url: "https://eswaribuilders.in",
    images: [
      {
        url: "/slider/2_slide.jpg",
        width: 1200,
        height: 630,
        alt: "Eswari Builders | Best Construction Company in Pondicherry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eswari Builders | Best Construction Company in Pondicherry",
    description:
      "Eswari Builders — trusted house construction company in Pondicherry since 2002. Premium residential & commercial construction. Free site visit. Call +91 90920 97190",
    images: ["/slider/2_slide.jpg"],
  },
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
