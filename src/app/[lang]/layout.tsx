import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Montserrat } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Grupo Extreme",
  description: "Ecoparque líder en aventura y ecoturismo en la Selva Maya.",
  icons: {
    icon: "/icon.png",
  },
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const { lang } = params;
  const { children } = props;

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
