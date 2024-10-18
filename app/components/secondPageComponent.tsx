import React from 'react';
import Image from "next/image";

const SecondPageComponent: React.FC = () => {
    return (
        <section className={`secondpage`}>
        <h2>Skills</h2>
        <div>
          <h3>Web</h3>
          <div className={`cardlist`}>

            <div className={`card`}>
              <h4>HTML</h4>
              <Image src="./images/html.svg" alt="HTML" width={100} height={100} />
            </div>
            <div className={`card`}>
              <h4>CSS</h4>
              <Image src="./images/css.svg" alt="CSS" width={100} height={100} />
            </div>
            <div className={`card`}>
              <h4>JS</h4>
              <Image src="./images/javascript.svg" alt="javascript" width={100} height={100} />
            </div>
            <div className={`card`}>
              <h4>TS</h4>
              <Image src="./images/typescript.svg" alt="typescript" width={100} height={100} />
            </div>
            <div className={`card`}>
              <h4>VUE</h4>
              <Image src="./images/vue.svg" alt="vue" width={100} height={100} />
            </div>
            <div className={`card`}>
              <h4>NUXT</h4>
              <Image src="./images/nuxt.svg" alt="nuxt" width={100} height={100} />
            </div>
            <div className={`card`}>
              <h4>LARAVEL</h4>
              <Image src="./images/laravel.svg" alt="laravel" width={100} height={100} />
            </div>

          </div>
        </div>

        <div>
          <h3>Programming</h3>
          <div className={`cardlist`}>

            <div className={`card`}>
              <h4>Java</h4>
              <Image src="./images/java.svg" alt="JAVA" width={100} height={100} />
            </div>
            <div className={`card`}>
              <h4>Python</h4>
              <Image src="./images/python.svg" alt="PYTHON" width={100} height={100} />
            </div>
            <div className={`card`}>
              <h4>Lua</h4>
              <Image src="./images/lua.svg" alt="LUA" width={100} height={100} />
            </div>
            <div className={`card`}>
              <h4>Bash</h4>
              <Image src="./images/bash.svg" alt="BASH" width={100} height={100} />
            </div>

          </div>
        </div>

        <div>
          <h3>Databases</h3>
          <div className={`cardlist`}>

            <div className={`card`}>
              <h4>SQL</h4>
              <Image src="./images/sql.svg" alt="SQL" width={100} height={100} />
            </div>
            <div className={`card`}>
              <h4>MongoDB</h4>
              <Image src="./images/mongodb.svg" alt="MONGODB" width={100} height={100} />
            </div>
            <div className={`card`}>
              <h4>Redis</h4>
              <Image src="./images/redis.svg" alt="REDIS" width={100} height={100} />
            </div>

          </div>
        </div>

        <div>
          <h3>Testing</h3>
          <div className={`cardlist`}>

            <div className={`card`}>
              <h4>Selenium</h4>
              <Image src="./images/selenium.svg" alt="SELENIUM" width={100} height={100} />
            </div>
            <div className={`card`}>
              <h4>Cypress</h4>
              <Image src="./images/cypress.svg" alt="CYPRESS" width={100} height={100} />
            </div>
            <div className={`card`}>
              <h4>Robot Framework</h4>
              <Image src="./images/robot.svg" alt="ROBOT FRAMEWORK" width={100} height={100} />
            </div>
            <div className={`card`}>
              <h4>Appium</h4>
              <Image src="./images/appium.svg" alt="APPIUM" width={100} height={100} />
            </div>

          </div>
        </div>
      </section>
    );
};

export default SecondPageComponent;