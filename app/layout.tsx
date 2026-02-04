import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyen Anh Tuan | Backend & .NET Developer",
  description:
    "Portfolio of Nguyen Anh Tuan, Backend / .NET Developer from Ho Chi Minh City, Vietnam. Building scalable backend systems, RESTful APIs, and enterprise solutions."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-background text-white antialiased font-sans"
      >
        {children}
      </body>
    </html>
  );
}

