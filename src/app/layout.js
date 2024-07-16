import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "@/components/headers/index";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KGM Group",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Headers />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
