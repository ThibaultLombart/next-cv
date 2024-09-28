import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <Image src="./images/logo.png" alt="Logo Lombart Thibault" width={500} height={500} />
        </div>
    );
};

export default Logo;