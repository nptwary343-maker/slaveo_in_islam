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
    default: "অভিশপ্ত নাকি উদ্ধারকারী? | Abdullah Al Noman Research",
    template: "%s | Abdullah Al Noman Research",
  },
  description: "সহিহ বুখারি হাদিস ২২২৭-এর আলোকে স্বাধীন মানুষের অধিকার এবং তাগুতি রাষ্ট্রে ব্যক্তিগত শরঈ ফয়সালার একটি সালাফি গবেষণা।",
  keywords: ["Islamic Jurisprudence", "Hadith 2227", "Salafi Research", "Shariah Law", "Human Rights in Islam", "Data Science Shariah"],
  authors: [{ name: "Abdullah Al Noman" }],
  creator: "Abdullah Al Noman",
  publisher: "Abdullah Al Noman Research",
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
    locale: "bn_BD",
    url: "https://slaveoislam.pages.dev/",
    title: "অভিশপ্ত নাকি উদ্ধারকারী? | তাগুতি রাষ্ট্রে শরঈ ফয়সালা",
    description: "সালাফি উসুল এবং মাকাসিদ আশ-শরীয়াহর আলোকে অপহরণকৃত নারী ও দাস বাজার সংক্রান্ত একটি জটিল ফিকহী বিশ্লেষণ।",
    siteName: "Abdullah Al Noman Research",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Al Noman Research Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "অভিশপ্ত নাকি উদ্ধারকারী? | Abdullah Al Noman",
    description: "সালাফি উসুল এবং মাকাসিদ আশ-শরীয়াহর আলোকে অপহরণকৃত নারী ও দাস বাজার সংক্রান্ত একটি ফিকহী বিশ্লেষণ।",
    images: ["/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
