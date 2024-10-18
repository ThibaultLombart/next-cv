import React from 'react';

const FooterComponent: React.FC = () => {
    return (
        <footer className="footer">
            <h4 className="h4">Informations</h4>
            <div>
                
                <a href="https://www.linkedin.com/in/thibault-lombart/">
                    <p>Linkedin</p>
                </a>
                <a href="mailto:contact@thibault-lombart.com">
                    <p>Mail</p>
                </a>
                <a href="https://github.com/ThibaultLombart">
                    <p>Github</p>
                </a>

            </div>

            <p>&copy; 2024 Thibault Lombart. All rights reserved.</p>
        </footer>
    );
};

export default FooterComponent;