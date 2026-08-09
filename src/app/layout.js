import { Inter } from "next/font/google";
import "./globals.css";
import PortfolioNav from "@/components/PortfolioNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "MD. ABDUL AWAL TOHA | Full Stack Web Developer",
  description:
    "Premium portfolio showcasing modern web development, UI craftsmanship, and thoughtful product experiences.",
  keywords: ["portfolio", "nextjs", "frontend", "web developer", "full stack"],
  authors: [{ name: "MD Abdul Awal" }],
  openGraph: {
    title: "MD Abdul Awal | Full Stack Web Developer",
    description:
      "Modern portfolio featuring polished web experiences and product-minded development.",
    url: "https://example.com",
    siteName: "MD Abdul Awal",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Abdul Awal | Full Stack Web Developer",
    description:
      "Modern portfolio featuring polished web experiences and product-minded development.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 text-slate-900">
        <PortfolioNav />
        {children}
      </body>
    </html>
  );
}
