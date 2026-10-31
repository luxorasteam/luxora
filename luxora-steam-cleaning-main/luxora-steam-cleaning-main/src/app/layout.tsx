import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import CookieConsent from "@/components/CookieConsent";
import "../index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luxorasteamcleaning.co.uk"),
  title: "Luxora Steam Cleaning Ltd – Professional Steam Cleaning Huddersfield",
  description:
    "Professional steam cleaning services in Huddersfield, Halifax and Bradford. Carpet, sofa, mattress and deep cleaning. Call 07543 958332 for a free quote.",
};

export const viewport: Viewport = {
  themeColor: "#1d4ed8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head>
        {/* Prevent dark-mode flash before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('luxora-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />

      </head>
      <body>
        <Script id="gtm-loader" strategy="lazyOnload">{`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
          var script = document.createElement('script');
          script.async = true;
          script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-WKG7HCDL';
          document.head.appendChild(script);
        `}</Script>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKG7HCDL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Ads tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18298527024"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18298527024');
          `}
        </Script>

        <ThemeProvider>
          {children}
          <Toaster />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
