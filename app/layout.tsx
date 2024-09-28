import type { Metadata } from "next";
import "./ui/globals.css";
import FooterComponent from "@/components/footerComponent";

export const metadata: Metadata = {
  title: "CV - Lombart Thibault",
  description: "CV éco-responsable développé en Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`antialiased`}
      >
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
