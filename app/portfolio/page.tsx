import PortfolioPageClient from "./PortfolioPageClient";

export const metadata = {
  title: "Our Portfolio | Eswari Builders",
  description: "Explore our completed residential and commercial projects.",
  openGraph: {
    title: "Eswari Builders Portfolio",
    description:
      "See the quality and innovation in every project we've delivered.",
    url: "https://eswaribuilders.in/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
