import React from "react";

import Image from "next/image";

import { TbBrandTypescript, TbBrandVue, TbBrandNuxt, TbBrandPython, TbBrandMongodb } from "react-icons/tb";
import { SiLua, SiPostgresql, SiSelenium, SiCypress, SiRobotframework } from "react-icons/si";
import { LiaJava } from "react-icons/lia";

export default function Home() {
  return (
    <main>
        <section className="firstpage">
            <div>
                <h1>Lombart Thibault</h1>
                <h2>Junior <span className={`foreground2`}>Developper</span></h2>
                <p>French Junior Developper. <span>Apprenticeship</span> in Testing
                    and Automation at <a href="https://worldline.com/fr-fr/home" target="_blank">@Worldline</a></p>
            </div>

            <Image src="./images/logo.png" alt="Logo Lombart Thibault" width={500} height={500}/>
        </section>

        <section className={`secondpage`}>
            <h2>Skills</h2>
            <div>
                <h3>Web</h3>
                <div className={`cardlist`}>

                    <div className={`card`}>
                        <h4>TS</h4>
                        <TbBrandTypescript size={100}/>
                    </div>
                    <div className={`card`}>
                        <h4>VUE</h4>
                        <TbBrandVue size={100}/>
                    </div>
                    <div className={`card`}>
                        <h4>NUXT</h4>
                        <TbBrandNuxt size={100}/>
                    </div>

                </div>
            </div>

            <div>
                <h3>Programming</h3>
                <div className={`cardlist`}>

                    <div className={`card`}>
                        <h4>Java</h4>
                        <LiaJava size={100}/>
                    </div>
                    <div className={`card`}>
                        <h4>Python</h4>
                        <TbBrandPython size={100}/>
                    </div>
                    <div className={`card`}>
                        <h4>Lua</h4>
                        <SiLua size={100}/>
                    </div>

                </div>
            </div>

            <div>
                <h3>Databases</h3>
                <div className={`cardlist`}>

                    <div className={`card`}>
                        <h4>SQL</h4>
                        <SiPostgresql size={100}/>
                    </div>
                    <div className={`card`}>
                        <h4>MongoDB</h4>
                        <TbBrandMongodb size={100}/>
                    </div>

                </div>
            </div>

            <div>
                <h3>Testing</h3>
                <div className={`cardlist`}>

                    <div className={`card`}>
                        <h4>Selenium</h4>
                        <SiSelenium size={100}/>
                    </div>
                    <div className={`card`}>
                        <h4>Cypress</h4>
                        <SiCypress size={100}/>
                    </div>
                    <div className={`card`}>
                        <h4>Robot Framework</h4>
                        <SiRobotframework size={100}/>
                    </div>

                </div>
            </div>
        </section>


        <section>
            <h3>Projects</h3>
            <div className={`list_third`}>

                <div className={`card_third`}>
                    <h4>TeaEnchants</h4>
                    <p>Minecraft plugin for adding new enchantments</p>
                    <Image src="./images/minecraft.jpg" alt="Plugin TeaEnchants" width={600} height={200}/>
                    <a href="https://github.com/ThibaultLombart/teaenchants" target="_blank">
                        <button className="button">Go see on Github</button>
                    </a>
                </div>
                <div className={`card_third`}>
                    <h4>Portfolio</h4>
                    <p>Website Portfolio made in Laravel with HTML/CSS</p>
                    <Image src="./images/site.jpg" alt="SITE" width={600} height={200}/>
                    <a href="https://thibault-lombart.com" target="_blank">
                        <button className="button">Go see directly</button>
                    </a>
                </div>

                <a href="https://github.com/ThibaultLombart" target="_blank">
                    <button className="button">Find out more ...</button>
                </a>

            </div>
        </section>
    </main>

  );
}
