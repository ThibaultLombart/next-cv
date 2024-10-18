import React from 'react';
import Image from "next/image";

const FooterComponent: React.FC = () => {
    return (
        <footer className="footer">
            <h4 className="h4">Informations</h4>
            <div>
                
                <a href="https://www.linkedin.com/in/thibault-lombart/">
                    <Image src="./images/linkedin.svg" alt="LINKEDIN" width={100} height={100} />
                </a>
                <a href="mailto:contact@thibault-lombart.com">
                    <Image src="./images/mail.svg" alt="MAIL" width={100} height={100} />
                </a>
                <a href="https://github.com/ThibaultLombart">
                    <Image src="./images/github.svg" alt="GITHUB" width={100} height={100} />
                </a>

            </div>

            <p>&copy; 2024 Thibault Lombart. All rights reserved.</p>
        </footer>
    );
};

export default FooterComponent;