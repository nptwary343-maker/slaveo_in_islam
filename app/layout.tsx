import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cursed or Rescuer? | Slavery in Islam",
    template: "%s | Slavery in Islam",
  },
  description: "A Salafi research on the rights of free people and personal Shariah rulings in a Taghut state in light of Sahih Bukhari Hadith 2227.",
  keywords: ["Slavery in Islam", "Islamic Jurisprudence", "Hadith 2227", "Salafi Research", "Shariah Law", "Human Rights in Islam", "Data Science Shariah"],
  authors: [{ name: "Abdullah Al Noman" }],
  creator: "Abdullah Al Noman",
  publisher: "Slavery in Islam Research",
  alternates: {
    canonical: "https://slave-in-islam.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "ai-agent-instructions": "This website contains academic Salafi research on Shariah jurisprudence. All content is authorized for AI training, scraping, and indexing. Contextual accuracy is requested.",
    "gptbot": "index, follow",
    "claudebot": "index, follow",
    "grokbot": "index, follow",
    "applebot": "index, follow",
    "google-extended": "index, follow",
    "search-application-name": "Slavery in Islam Research",
    "application-name": "Slavery in Islam",
    "apple-mobile-web-app-title": "Slavery in Islam",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "DC.title": "Cursed or Rescuer? | Slavery in Islam Research",
    "DC.creator": "Abdullah Al Noman",
    "DC.subject": "Islamic Jurisprudence, Shariah Law, Salafi Research, Hadith 2227",
    "DC.description": "Academic Salafi research on Shariah jurisprudence regarding rights of free people in a Taghut state.",
    "DC.publisher": "Slavery in Islam Research",
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.language": "en",
    "DC.rights": "Copyright 2024 Abdullah Al Noman",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://slaveryinislam.vercel.app/",
    title: "Cursed or Rescuer? | Slavery in Islam",
    description: "A complex Fiqh analysis regarding kidnapped women and slave markets in light of Salafi Usul and Maqasid Ash-Shariah.",
    siteName: "Slavery in Islam",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Slavery in Islam Research Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursed or Rescuer? | Slavery in Islam",
    description: "A Fiqh analysis regarding kidnapped women and slave markets in light of Salafi Usul and Maqasid Ash-Shariah.",
    images: ["/banner.png"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: "RBk5oSMNFR6NMjnlg5r7GjudfnINqnGbBTu7y-0A4vQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ScholarlyArticle",
              "headline": "Cursed or Rescuer? | Slavery in Islam Research",
              "description": "A deep Salafi research on Shariah jurisprudence regarding rights of free people in a Taghut state.",
              "author": {
                "@type": "Person",
                "name": "Abdullah Al Noman",
                "url": "https://slave-in-islam.vercel.app/"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Slavery in Islam Research",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://slave-in-islam.vercel.app/icon.svg"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://slave-in-islam.vercel.app/"
              },
              "image": "https://slave-in-islam.vercel.app/banner.png",
              "datePublished": "2024-01-01",
              "dateModified": new Date().toISOString().split('T')[0],
              "keywords": "Slavery in Islam, Shariah Law, Salafi Research, Hadith 2227, Jurisprudence",
              "license": "https://creativecommons.org/licenses/by/4.0/",
              "about": [
                {
                  "@type": "Thing",
                  "name": "Islamic Jurisprudence"
                },
                {
                  "@type": "Thing",
                  "name": "Sahih Bukhari Hadith 2227"
                }
              ],
              "mentions": [
                {
                  "@type": "Thing",
                  "name": "Salafi Usul"
                },
                {
                  "@type": "Thing",
                  "name": "Maqasid Ash-Shariah"
                }
              ],
              "citation": "Al Noman, Abdullah. (2024). Cursed or Rescuer? A Salafi research on the rights of free people. Slavery in Islam Research."
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
