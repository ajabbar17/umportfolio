import { Geist, Geist_Mono, Inter, Anton } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: {
    template: "UM. | %s",
    default: "UM.",
  },
  description:
    "I am a Visual Communication Designer, educator, and PhD scholar with a passion for creating designs that speak louder than words.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${anton.variable} ${inter.variable}  antialiased`}
      >
        {" "}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
