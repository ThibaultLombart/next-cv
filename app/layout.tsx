import type { Metadata } from "next";
import "./global/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "CV - Lombart Thibault",
  description: "CV éco-responsable développé en Next.js",
};

import { SiGithub, SiMaildotru, SiLinkedin } from "react-icons/si";

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
                    <SiLinkedin size={100}/>
                    <p>Linkedin</p>
                </a>
                <a href="mailto:contact@thibault-lombart.com">
                    <SiMaildotru size={100}/>
                    <p>Mail</p>
                </a>
                <a href="https://github.com/ThibaultLombart">
                    <SiGithub size={100}/>
                    <p>Github</p>
                </a>

            </div>

            <p>&copy; 2024 Thibault Lombart. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
