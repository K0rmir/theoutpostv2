import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/header.css";
import "./styles/jobboard.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Outpost",
  description: "Coded by elite h4x0rz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
