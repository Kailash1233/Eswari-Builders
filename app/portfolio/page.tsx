import PortfolioPageClient from "./PortfolioPageClient";

export const metadata = {
  title: "Completed Projects in Pondicherry | Eswari Builders Portfolio",
  description:
    "Browse 300+ completed residential and commercial construction projects by Eswari Builders across Pondicherry, Cuddalore & Chennai.",
  openGraph: {
    title: "Completed Projects in Pondicherry | Eswari Builders Portfolio",
    description:
      "See the quality and innovation in every project we've delivered.",
    url: "https://eswaribuilders.in/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
