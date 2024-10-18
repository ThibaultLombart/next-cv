import type { Metadata } from "next";
import "./global/globals.css";
import Image from "next/image";
import React from "react";

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
        <footer className="footer">
            <h4 className="h4">Informations</h4>
            <div>

                <a href="https://www.linkedin.com/in/thibault-lombart/">
                    <Image src="./images/linkedin.svg" alt="LINKEDIN" width={100} height={100}/>
                    <p>Linkedin</p>
                </a>
                <a href="mailto:contact@thibault-lombart.com">
                    <Image src="./images/mail.svg" alt="MAIL" width={100} height={100}/>
                    <p>Mail</p>
                </a>
                <a href="https://github.com/ThibaultLombart">
                    <Image src="./images/github.svg" alt="GITHUB" width={100} height={100}/>
                    <p>Github</p>
                </a>

            </div>

            <p>&copy; 2024 Thibault Lombart. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
