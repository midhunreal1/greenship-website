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
    // Marine software — short & long tail
    "vessel stability software", "loadicator software for ships", "Ecoloadmaster loading computer",
    "vessel stability loadicator software bulk carriers tankers", "ship loading computer class approved India",
    "marine custom software development India", "fleet management software for shipowners",
    "voyage planning optimization software maritime", "planned maintenance system PMS software ships",
    // Ship design — short & long tail
    "ship design India", "naval architecture services Navi Mumbai India",
    "ship conversion engineering India", "new ship design naval architects India",
    "BWTS installation engineering class approval India", "BWM Convention D-2 BWTS retrofit services",
    "scrubber EGCS installation engineering class drawings", "3D laser scanning ship retrofit India",
    "ship modification design offshore vessels India",
    // Surveys — short & long tail
    "IHM survey India", "IHM survey IRS ABS approved India",
    "Inventory of Hazardous Materials survey Hong Kong Convention",
    "pre-purchase ship survey India inspection", "condition survey on off hire vessels India",
    "marine damage survey inspection India", "draft survey bulk carriers India",
    "bunker quantity quality survey India", "vessel feasibility survey India",
    "class and statutory surveys SOLAS MARPOL India", "flag state inspection PSC preparation India",
    "port state control PSC readiness assessment India",
    // Flag registration — short & long tail
    "ship flag registration India", "Panama flag registration services India agents",
    "Liberia flag state ship registration India", "Palau ship registration open registry India",
    "St Kitts Nevis ship registration affordable registry", "open registry flag registration India",
    "how to register a ship under Panama flag India",
    // Ship broking — short & long tail
    "ship broking India", "ship sale purchase brokerage India second-hand vessels",
    "vessel sale purchase S&P transaction India", "time charter bareboat charter arrangement India",
    "ship chartering services voyage charter India",
    // Offshore & renewable — short & long tail
    "offshore engineering India", "MODU mobile offshore drilling unit services India",
    "mooring motion analysis offshore vessels India", "pipe cable lay analysis offshore India",
    "sea fastening towage marine warranty India", "floating solar PV system design India",
    "offshore wind farm engineering services India", "renewable energy marine engineering India",
    // Geographic & brand
    "maritime services India", "maritime services Navi Mumbai", "marine engineering company Mumbai India",
    "ship survey services Mumbai India", "maritime consultant India Middle East Far East",
    "Green Ship Technologies", "GST maritime India",
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
  verification: {
    google: 'C4QMxjNuAabITB0TxBthAZ_AeWJuEkennWytQkZUZHg',
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
