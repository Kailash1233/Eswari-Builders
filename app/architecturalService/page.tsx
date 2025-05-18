import ArchitecturalServicePageClient from "./ArchitecturalServicePageClient";

export const metadata = {
  title: "Architectural Services | Eswari Builders",
  description:
    "Innovative architectural planning for smart, sustainable buildings.",
  openGraph: {
    title: "Architecture & Planning",
    description:
      "Professional architectural design to bring your vision to life.",
    url: "https://eswaribuilders.in/architecturalService",
  },
};

export default function ArchitecturalServicePage() {
  return <ArchitecturalServicePageClient />;
}
