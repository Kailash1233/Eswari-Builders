import AboutPageClient from "./AboutPageClient";

export const metadata = {
  title: "About Us | Eswari Builders",
  description: "Get to know the team and story behind Eswari Builders.",
  openGraph: {
    title: "About Us | Eswari Builders",
    description: "Meet the experts building Pondicherry’s future.",
    url: "https://eswaribuilders.in/about",
    images: [
      {
        url: "/slider/2_slide.jpg",
        width: 1200,
        height: 630,
        alt: "About Eswari Builders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Eswari Builders",
    description: "Meet the experts behind the brand.",
    images: ["/slider/2_slide.jpg"],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
