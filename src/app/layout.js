import { Inter } from "next/font/google";
import "./globals.css";
import { SocialBar } from "@/components/layout/SocialBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], preload: false, display: "swap" });

export const metadata = {
  title: "Road to the Classic",
  description: "Bridging education and experience for youth development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <SocialBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
