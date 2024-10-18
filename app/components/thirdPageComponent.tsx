import React from 'react';
import Image from 'next/image';

const ThirdPageComponent: React.FC = () => {
    return (
        <section>
        <h3>Projects</h3>
        <div className={`list_third`}>

          <div className={`card_third`}>
            <h4>TeaEnchants</h4>
            <p>Minecraft plugin for adding new enchantments</p>
            <Image src="./images/minecraft.jpg" alt="Plugin TeaEnchants" width={600} height={200} />
            <a href="https://github.com/ThibaultLombart/teaenchants" target="_blank"><button className="button">Go see on Github</button></a>
          </div>
          <div className={`card_third`}>
            <h4>Portfolio</h4>
            <p>Website Portfolio made in Laravel with HTML/CSS</p>
            <Image src="./images/site.jpg" alt="SITE" width={600} height={200} />
            <a href="https://thibault-lombart.com" target="_blank"><button className="button">Go see directly</button></a>
          </div>
          
          <a href="https://github.com/ThibaultLombart" target="_blank"><button className="button">Find out more ...</button></a>

        </div>
      </section>
    );
};

export default ThirdPageComponent;