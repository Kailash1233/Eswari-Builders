import RenovationServicePageClient from "./RenovationServicePageClient";

export const metadata = {
  title: "Renovation Services | Eswari Builders",
  description: "Transform your old space into something spectacular.",
  openGraph: {
    title: "Home & Commercial Renovation",
    description:
      "Trusted renovation experts in Pondicherry for modern makeovers.",
    url: "https://eswaribuilders.in/renovationService",
  },
};

export default function RenovationServicePage() {
  return <RenovationServicePageClient />;
}
