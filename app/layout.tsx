import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gamareoverseas.com"),
  title: "Gamare Overseas Exim | Premium Agricultural Exporter from India",
  description:
    "Gamare Overseas Exim is a leading Indian exporter of fresh fruits, vegetables, and agricultural produce. We deliver farm-fresh quality to global markets across 100+ countries.",
  keywords:
    "Gamare Overseas Exim, Indian exporter, fresh vegetables export, drumsticks export, bananas export, onion export, agricultural export India, fresh produce exporter",
  authors: [{ name: "Gamare Overseas Exim" }],
  openGraph: {
    title: "Gamare Overseas Exim | Premium Agricultural Exporter from India",
    description:
      "Premium exporter of fresh Indian agricultural produce to 100+ countries worldwide.",
    type: "website",
    url: "https://www.gamareoverseas.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gamare Overseas Exim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gamare Overseas Exim | Premium Agricultural Exporter",
    description: "Farm Fresh Indian Produce. Global Standards. Reliable Delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
