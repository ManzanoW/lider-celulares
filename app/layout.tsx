// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Líder Celulares | Assistência Técnica Autorizada em Santos/SP",
  description:
    "Assistência técnica autorizada de celulares, tablets e iPads em Santos/SP. Conserto de Samsung, Motorola, Xiaomi, Asus, LG e Apple. Troca de tela, bateria, conector e mais. 4.9★ no Google.",
  keywords: [
    "assistência técnica celular Santos",
    "conserto de celular Santos SP",
    "troca de tela celular Santos",
    "Líder Celulares Santos",
    "assistência Samsung Santos",
    "assistência Motorola Santos",
    "assistência Xiaomi Santos",
    "conserto tablet Santos",
    "conserto iPad Santos",
    "Ponta da Praia Santos celular",
  ],
  authors: [{ name: "Líder Celulares" }],
  creator: "Líder Celulares",
  metadataBase: new URL("https://lider-celulares.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Líder Celulares | Assistência Técnica Autorizada em Santos/SP",
    description:
      "Conserto rápido e garantido de celulares e tablets em Santos/SP. 4.9★ com mais de 414 avaliações no Google.",
    url: "https://lider-celulares.vercel.app",
    siteName: "Líder Celulares",
    images: [
      {
        url: "https://lider-celulares.vercel.app/og-image.jpg", // salva a foto da fachada como /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Fachada da Líder Celulares — Assistência Técnica em Santos/SP",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Líder Celulares | Assistência Técnica em Santos/SP",
    description:
      "Conserto rápido e garantido de celulares e tablets em Santos/SP.",
    images: ["https://lider-celulares.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Schema.org — LocalBusiness (aparece nos resultados do Google)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Líder Celulares",
  alternateName: "Lider Conserto de Celular e Smartphones",
  description:
    "Assistência técnica autorizada de celulares, tablets e iPads em Santos/SP. Samsung, Motorola, Xiaomi, Asus, LG e Apple.",
  image: "https://lider-celulares.vercel.app/og-image.jpg",
  telephone: "+5513974208788",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "414",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pça. ALM. Gago Coutinho, 30",
    addressLocality: "Santos",
    addressRegion: "SP",
    postalCode: "11030-200",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.9667,
    longitude: -46.3345,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  url: "https://lider-celulares.vercel.app",
  sameAs: [
    "https://maps.google.com/?q=Lider+Celulares+Santos",
    "https://lider-celulares.vercel.app",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-50 antialiased">{children}</body>
    </html>
  );
}
