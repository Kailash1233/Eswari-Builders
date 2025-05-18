import InteriorServicePageClient from "./InteriorServicePageClient";

export const metadata = {
  title: "Interior Design Services | Eswari Builders",
  description: "Elegant and functional interiors tailored to your lifestyle.",
  openGraph: {
    title: "Interior Design by Eswari Builders",
    description: "Crafting stylish interiors for homes and businesses.",
    url: "https://eswaribuilders.in/interiorService",
  },
};

export default function InteriorServicePage() {
  return <InteriorServicePageClient />;
}
