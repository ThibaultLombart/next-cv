import React from 'react';
import Image from 'next/image';

import styles from '../app/ui/footer.module.css';

const FooterComponent: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <h4 className={styles.h4}>Informations</h4>
            <div>
                
                <a href="https://www.linkedin.com/in/thibault-lombart/">
                    <Image src="/svgs/linkedin.svg" alt="Logo Linkedin" width={50} height={50} />
                    <p>Linkedin</p>
                </a>
                <a href="mailto:contact@thibault-lombart.com">
                    <Image src="/svgs/mail.svg" alt="Logo Mail" width={50} height={50} />
                    <p>Mail</p>
                </a>
                <a href="https://github.com/ThibaultLombart">
                    <Image src="/svgs/github.svg" alt="Logo Github" width={50} height={50} />
                    <p>Github</p>
                </a>

            </div>

            <p>&copy; {new Date().getFullYear()} Thibault Lombart. All rights reserved.</p>
        </footer>
    );
};

export default FooterComponent;