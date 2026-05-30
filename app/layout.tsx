import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";
import RouteTransitionLoader from "@/components/RouteTransitionLoader";
import SocialFloat from "@/components/SocialFloat";
import ChatWidget from "@/components/ChatWidget";
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
    default: "Green Ship Technologies – Maritime Services | Navi Mumbai, India",
    template: "%s | Green Ship Technologies"
  },
  description: "Green Ship Technologies — trusted maritime service provider since 2009. Expert in ship design, Ecoloadmaster stability software, IHM & class surveys, flag registration (Panama, Liberia, Palau), offshore engineering, floating solar & ship broking. 200+ clients across India, Middle East, Far East & Europe.",
  keywords: [
    // Software
    "vessel stability software",
    "loadicator software",
    "Ecoloadmaster",
    "marine software development",
    "fleet management software maritime",
    // Ship design
    "ship design",
    "naval architecture",
    "ship conversion engineering",
    "BWTS installation engineering",
    "scrubber installation engineering",
    "ship modification design",
    // Surveys
    "IHM survey",
    "Hong Kong Convention IHM",
    "pre-purchase vessel survey",
    "marine condition survey",
    "class and statutory surveys",
    "flag state inspection",
    "SOLAS MARPOL compliance",
    // Flag registration
    "flag registration",
    "Panama flag registration",
    "Liberia flag registration",
    "open registry ship registration",
    // Broking
    "ship broking",
    "vessel sale and purchase",
    "ship chartering services",
    // Offshore & renewable
    "offshore engineering",
    "MODU engineering services",
    "floating solar system design",
    "offshore wind farm engineering",
    // Geographic & brand
    "maritime services India",
    "maritime services Navi Mumbai",
    "marine engineering company India",
    "Green Ship Technologies",
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
    title: "Green Ship Technologies – Maritime Services | Navi Mumbai, India",
    description: "Leading maritime service provider since 2009 — Ecoloadmaster stability software, ship design & naval architecture, IHM surveys, flag registration (Panama/Liberia), offshore engineering & ship broking. Serving 200+ clients globally.",
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
    title: "Green Ship Technologies – Maritime Services | Navi Mumbai, India",
    description: "Trusted maritime experts since 2009 — ship design, marine software, IHM surveys, flag registration, offshore engineering & ship broking. 200+ clients worldwide.",
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
          <ChatWidget />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
