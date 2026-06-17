import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piano Lessons with Emilie Byrd | Byrd Music Academy",
  description:
    "Warm, encouraging piano lessons for children and beginners with Emilie Byrd, a Texas Certified Teacher serving Irving, Las Colinas, Coppell, and DFW families.",
  metadataBase: new URL("https://byrdmusicacademy.com"),
  openGraph: {
    title: "Piano Lessons with Emilie Byrd | Byrd Music Academy",
    description:
      "Warm, encouraging piano lessons for children and beginners with Emilie Byrd, a Texas Certified Teacher serving Irving, Las Colinas, Coppell, and DFW families.",
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
    title: "Piano Lessons with Emilie Byrd | Byrd Music Academy",
    description:
      "Warm, encouraging piano lessons for children and beginners with Emilie Byrd.",
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
