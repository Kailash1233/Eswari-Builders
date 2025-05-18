import ContactPageClient from "./ContactPage";

export const metadata = {
  title: "Contact Us | Eswari Builders",
  description:
    "Get in touch with Eswari Builders for premium construction services in Pondicherry. Let's build something great together!",
  openGraph: {
    title: "Eswari Builders Contact Us",
    description:
      "Get in touch with Eswari Builders for premium construction services in Pondicherry. Let's build something great together!",
    url: "https://eswaribuilders.in/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
