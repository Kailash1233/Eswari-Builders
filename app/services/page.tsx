import ServicesPageClient from "./ServicesPageClient";

export const metadata = {
  title: "House Construction Services in Pondicherry | Eswari Builders",
  description:
    "End-to-end house construction services in Pondicherry. Residential, commercial, interior design & renovation. 24+ years experience.",
  openGraph: {
    title: "House Construction Services in Pondicherry | Eswari Builders",
    description:
      "End-to-end house construction services in Pondicherry. Residential, commercial, interior design & renovation. 24+ years experience.",
    url: "https://eswaribuilders.in/services",
    images: [
      {
        url: "/slider/2_slide.jpg",
        width: 1200,
        height: 630,
        alt: "Best Builders in Pondicherry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Construction Services in Pondicherry | Eswari Builders",
    description:
      "End-to-end house construction services in Pondicherry. Residential, commercial, interior design & renovation. 24+ years experience.",
    images: ["/slider/2_slide.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
