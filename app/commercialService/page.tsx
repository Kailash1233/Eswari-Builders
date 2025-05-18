import CommercialServicePageClient from "./CommercialServicePageClient";

export const metadata = {
  title: "Commercial Construction | Eswari Builders",
  description:
    "End-to-end commercial construction solutions with quality and speed.",
  openGraph: {
    title: "Commercial Building Services",
    description:
      "Office spaces, showrooms, and commercial units built to perfection.",
    url: "https://eswaribuilders.in/commercialService",
  },
};

export default function CommercialServicePage() {
  return <CommercialServicePageClient />;
}
