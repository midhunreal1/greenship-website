import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";
import RouteTransitionLoader from "@/components/RouteTransitionLoader";
import SocialFloat from "@/components/SocialFloat";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import GoogleTranslate from "@/components/GoogleTranslate";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenshiptech.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Green Ship Technologies – Marine, Offshore & Industrial Services",
    template: "%s | Green Ship Technologies"
  },
  description: "Green Ship Technologies is a leading marine, offshore & industrial service provider. We offer marine software, ship design, survey & certification, renewable energy, ship broking, flag registration, and NDT & manpower services.",
  keywords: [
    "marine services",
    "offshore engineering",
    "ship design",
    "naval architecture",
    "marine software",
    "vessel management",
    "stability software",
    "ship survey",
    "flag registration",
    "NDT services",
    "ship broking",
    "maritime services India",
    "Navi Mumbai",
    "Green Ship Technologies",
    "GST"
  ],
  authors: [{ name: "Green Ship Technologies" }],
  creator: "Green Ship Technologies",
  publisher: "Green Ship Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Green Ship Technologies",
    title: "Green Ship Technologies – Marine, Offshore & Industrial Services",
    description: "Leading maritime service provider offering ship design, marine software, survey & certification, renewable energy, flag registration, and NDT services.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Green Ship Technologies – Your Partner in Maritime Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Ship Technologies – Marine, Offshore & Industrial Services",
    description: "Leading maritime service provider offering ship design, marine software, survey & certification, and more.",
    images: [`${siteUrl}/twitter-image.jpg`],
  },
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
  alternates: {
    canonical: "/",
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
        <StructuredData />
        <Script id="gt-setup" strategy="afterInteractive">{`
          (function(){
            var KEY='greenship_lang';
            var LANGS='en,hi,ar,es,fr,de,ja,zh-CN,pt';
            var lang=localStorage.getItem(KEY)||'en';
            var host=window.location.hostname;
            var isLocal=host.indexOf('localhost')!==-1||host.indexOf('127.0.0.1')!==-1;
            var exp='expires=Thu, 01 Jan 1970 00:00:00 UTC';
            document.cookie='googtrans=; '+exp+'; path=/';
            if(!isLocal){
              document.cookie='googtrans=; '+exp+'; path=/; domain='+host;
              document.cookie='googtrans=; '+exp+'; path=/; domain=.'+host;
            }
            if(lang!=='en'){
              var v='/en/'+lang;
              document.cookie='googtrans='+v+'; path=/';
              if(!isLocal) document.cookie='googtrans='+v+'; path=/; domain=.'+host;
              window.googleTranslateElementInit=function(){
                new google.translate.TranslateElement({
                  pageLanguage:'en',
                  includedLanguages:LANGS,
                  autoDisplay:false
                },'google_translate_element');
              };
              var s=document.createElement('script');
              s.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
              document.head.appendChild(s);
            }
          })();
        `}</Script>
      </head>
      <body
        className={`${bodyFont.variable} ${headingFont.variable} antialiased`}
      >
        <ThemeProvider>
          <GoogleTranslate />
          <RouteTransitionLoader />
          {children}
          <SocialFloat />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
