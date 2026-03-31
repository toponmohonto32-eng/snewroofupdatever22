import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/lib/i18n/context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "S NEW ROOF - Your Neighborhood Roofer Helping & Protecting Families",
  description: "Professional roofing services including roof repair, replacement, emergency leak repair, and storm damage repair. Free roof inspection available. Licensed & insured.",
  keywords: ["roofing", "roof repair", "roof replacement", "emergency leak repair", "storm damage", "free inspection"],
  authors: [{ name: "S NEW ROOF" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "S NEW ROOF - Your Neighborhood Roofer",
    description: "Professional roofing services. Free roof inspection available.",
    type: "website",
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
        {/* Meta Pixel (Facebook) - Dataset ID: 2821242534737429 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2821242534737429');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Microsoft Clarity - vprp9afoh6 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vprp9afoh6");
            `,
          }}
        />

        {/* Go High Level External Tracking */}
        <script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_f0a09374a6094ab9a4c1345ca43b3c48"
          async
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-white text-foreground`}
      >
        {/* Google Tag Manager */}
        <GoogleTagManager gtmId="GTM-M8LXQ2ZN" />

        {/* Meta Pixel Noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2821242534737429&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
