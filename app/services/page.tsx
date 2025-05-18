import ServicesPageClient from "./ServicesPageClient";

export const metadata = {
  title: "Our Services | Eswari Builders",
  description: "Explore all construction and design services we offer.",
  openGraph: {
    title: "Our Services | Eswari Builders",
    description: "Premium building, interior, renovation & more.",
    url: "https://eswaribuilders.in/services",
    images: [
      {
        url: "/slider/2_slide.jpg",
        width: 1200,
        height: 630,
        alt: "Eswari Services Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Eswari Builders",
    description: "Explore premium construction services.",
    images: ["/slider/2_slide.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
