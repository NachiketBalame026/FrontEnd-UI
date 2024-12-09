import React from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Frontend UI",
  description: "A frontend UI built with Next.js",
};

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
