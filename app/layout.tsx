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
            <div>

                <a href="https://www.linkedin.com/in/thibault-lombart/">
                    <SiLinkedin size={100}/>
                    Linkedin
                </a>
                <a href="mailto:contact@thibault-lombart.com">
                    <SiMaildotru size={100}/>
                    Mail
                </a>
                <a href="https://github.com/ThibaultLombart">
                    <SiGithub size={100}/>
                    Github
                </a>

            </div>

            <p>&copy; 2024 Thibault Lombart. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
