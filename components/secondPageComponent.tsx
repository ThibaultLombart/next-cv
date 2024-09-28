import React from 'react';
import Image from "next/image";
import { Secular_One } from "next/font/google";
import styles from "../app/ui/secondPage.module.css";

const secular_one = Secular_One({subsets: ["latin"],display: "swap", weight: "400"});

const SecondPageComponent: React.FC = () => {
    return (
        <section className={styles.secondpage}>
        <h2 className={secular_one.className}>Skills</h2>
        <div>
          <h3>Web</h3>
          <div className={styles.cardlist}>

            <div className={styles.card}>
              <h4>HTML</h4>
              <Image src="/svgs/html.svg" alt="HTML" width={100} height={100} />
            </div>
            <div className={styles.card}>
              <h4>CSS</h4>
              <Image src="/svgs/css.svg" alt="CSS" width={100} height={100} />
            </div>
            <div className={styles.card}>
              <h4>JS</h4>
              <Image src="/svgs/javascript.svg" alt="javascript" width={100} height={100} />
            </div>
            <div className={styles.card}>
              <h4>TS</h4>
              <Image src="/svgs/typescript.svg" alt="typescript" width={100} height={100} />
            </div>
            <div className={styles.card}>
              <h4>VUE</h4>
              <Image src="/svgs/vue.svg" alt="vue" width={100} height={100} />
            </div>
            <div className={styles.card}>
              <h4>NUXT</h4>
              <Image src="/svgs/nuxt.svg" alt="nuxt" width={100} height={100} />
            </div>
            <div className={styles.card}>
              <h4>LARAVEL</h4>
              <Image src="/svgs/laravel.svg" alt="laravel" width={100} height={100} />
            </div>

          </div>
        </div>

        <div>
          <h3>Programming</h3>
          <div className={styles.cardlist}>

            <div className={styles.card}>
              <h4>Java</h4>
              <Image src="/svgs/java.svg" alt="JAVA" width={100} height={100} />
            </div>
            <div className={styles.card}>
              <h4>Python</h4>
              <Image src="/svgs/python.svg" alt="PYTHON" width={100} height={100} />
            </div>
            <div className={styles.card}>
              <h4>Lua</h4>
              <Image src="/svgs/lua.svg" alt="LUA" width={100} height={100} />
            </div>
            <div className={styles.card}>
              <h4>Bash</h4>
              <Image src="/svgs/bash.svg" alt="BASH" width={100} height={100} />
            </div>

          </div>
        </div>

        <div>
          <h3>Databases</h3>
          <div className={styles.cardlist}>

            <div className={styles.card}>
              <h4>SQL</h4>
              <Image src="/svgs/sql.svg" alt="SQL" width={100} height={100} />
            </div>
            <div className={styles.card}>
              <h4>MongoDB</h4>
              <Image src="/svgs/mongodb.svg" alt="MONGODB" width={100} height={100} />
            </div>
            <div className={styles.card}>
              <h4>Redis</h4>
              <Image src="/svgs/redis.svg" alt="REDIS" width={100} height={100} />
            </div>

          </div>
        </div>

        <div>
          <h3>Testing</h3>
          <div className={styles.cardlist}>

            <div className={styles.card}>
              <h4>Selenium</h4>
              <Image src="/svgs/selenium.svg" alt="SELENIUM" width={100} height={100} />
            </div>
            <div className={styles.card}>
              <h4>Cypress</h4>
              <Image src="/svgs/cypress.svg" alt="CYPRESS" width={100} height={100} />
            </div>
            <div className={styles.card}>
              <h4>Robot Framework</h4>
              <Image src="/svgs/robot.svg" alt="ROBOT FRAMEWORK" width={100} height={100} />
            </div>
            <div className={styles.card}>
              <h4>Appium</h4>
              <Image src="/svgs/appium.svg" alt="APPIUM" width={100} height={100} />
            </div>

          </div>
        </div>
      </section>
    );
};

export default SecondPageComponent;