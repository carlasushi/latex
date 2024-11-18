import type { Metadata } from "next";
import { Orbitron } from "next/font/google"; // Importing Orbitron from Google Fonts
import "./globals.css";

// Initialize Orbitron font
const orbitron = Orbitron({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "LATEX GALLERY",
  description: "LATEX GALLERY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
