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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        {children}
      </body>
    </html>
  );
}
