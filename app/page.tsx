import React from "react";

import { Sedgwick_Ave, Secular_One } from "next/font/google";
import Image from "next/image";

import { TbBrandTypescript, TbBrandVue, TbBrandNuxt } from "react-icons/tb";

const secular_one = Secular_One({subsets: ["latin"],display: "swap", weight: "400"});
const sedgwick_ave = Sedgwick_Ave({subsets: ["latin"],display: "swap", weight: "400"});

export default function Home() {
  return (
    <main>
        <section className="firstpage">
            <div>
                <h1 className={secular_one.className}>Lombart Thibault</h1>
                <h2>Junior <span className={`${sedgwick_ave.className} foreground2`}>Developper</span></h2>
                <p>French Junior Developper. <span className={secular_one.className}>Apprenticeship</span> in Testing
                    and Automation at <a href="https://worldline.com/fr-fr/home" target="_blank">@Worldline</a></p>
            </div>

            <div className="logo">
                <Image src="./images/logo.png" alt="Logo Lombart Thibault" width={500} height={500}/>
            </div>
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
                        <Image src="./images/java.svg" alt="JAVA" width={100} height={100}/>
                    </div>
                    <div className={`card`}>
                        <h4>Python</h4>
                        <Image src="./images/python.svg" alt="PYTHON" width={100} height={100}/>
                    </div>
                    <div className={`card`}>
                        <h4>Lua</h4>
                        <Image src="./images/lua.svg" alt="LUA" width={100} height={100}/>
                    </div>

                </div>
            </div>

            <div>
                <h3>Databases</h3>
                <div className={`cardlist`}>

                    <div className={`card`}>
                        <h4>SQL</h4>
                        <Image src="./images/sql.svg" alt="SQL" width={100} height={100}/>
                    </div>
                    <div className={`card`}>
                        <h4>MongoDB</h4>
                        <Image src="./images/mongodb.svg" alt="MONGODB" width={100} height={100}/>
                    </div>

                </div>
            </div>

            <div>
                <h3>Testing</h3>
                <div className={`cardlist`}>

                    <div className={`card`}>
                        <h4>Selenium</h4>
                        <Image src="./images/selenium.svg" alt="SELENIUM" width={100} height={100}/>
                    </div>
                    <div className={`card`}>
                        <h4>Cypress</h4>
                        <Image src="./images/cypress.svg" alt="CYPRESS" width={100} height={100}/>
                    </div>
                    <div className={`card`}>
                        <h4>Robot Framework</h4>
                        <Image src="./images/robot.svg" alt="ROBOT FRAMEWORK" width={100} height={100}/>
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
