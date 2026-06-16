import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Byrd Music Academy | Piano Lessons in Irving, TX",
  description:
    "Warm, personalized piano lessons for children and beginners in Irving, Texas. Encouraging instruction in a family-friendly environment.",
  metadataBase: new URL("https://byrdmusicacademy.com"),
  openGraph: {
    title: "Byrd Music Academy | Piano Lessons in Irving, TX",
    description:
      "Warm, personalized piano lessons for children and beginners in Irving, Texas. Encouraging instruction in a family-friendly environment.",
    url: "https://byrdmusicacademy.com",
    siteName: "Byrd Music Academy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Warm piano keys in soft natural light",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Byrd Music Academy | Piano Lessons in Irving, TX",
    description:
      "Warm, personalized piano lessons for children and beginners in Irving, Texas.",
    images: [
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
