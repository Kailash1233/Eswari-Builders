import type { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ClientLayout from "@/components/Clientpopup";

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Eswari Builders | Premium Construction Company",
  description: "Premium Residential and Commercial Construction in Pondicherry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${merriweatherSans.className} flex min-h-screen flex-col`}>
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}




// import type React from "react";
// import type { Metadata } from "next";
// import { Merriweather_Sans } from "next/font/google"; // Importing Merriweather Sans
// import "./globals.css";
// import Header from "@/components/header";
// import Footer from "@/components/footer";

// // Define the Merriweather Sans font
// const merriweatherSans = Merriweather_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "700"],
// });

// export const metadata: Metadata = {
//   title: "Eswari Builders | Premium Construction Company",
//   description: "Premium Residential and Commercial Construction in Pondicherry",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${merriweatherSans.className} flex min-h-screen flex-col`}
//       >
//         <Header />
//         <main className="flex-1">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

{
  /* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Noto+Serif:ital,wght@0,300;1,300&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"> */
}
