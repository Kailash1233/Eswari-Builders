import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Eswari Builders",
  description: "Oops! The page you're looking for doesn't exist.",
  openGraph: {
    title: "404 - Page Not Found",
    description: "Sorry, we couldn’t find the page you were looking for.",
    url: "https://eswaribuilders.in/404",
  },
};

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/slider/1_slide.webp"
        alt="404 Background"
        fill
        className="object-cover object-center"
      />

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
          404
        </h1>
        <p className="text-2xl text-white mb-6">
          Oops! This page doesn't exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-white/90 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
