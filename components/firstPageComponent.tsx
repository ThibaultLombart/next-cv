import React from 'react';

import styles from '../app/ui/firstPage.module.css';

import { Sedgwick_Ave, Secular_One } from "next/font/google";
import Logo from './logo';

const secular_one = Secular_One({subsets: ["latin"],display: "swap", weight: "400"});
const sedgwick_ave = Sedgwick_Ave({subsets: ["latin"],display: "swap", weight: "400"});


const FirstPageComponent: React.FC = () => {
    return (
        <section className={styles.firstpage}>
            <div>
                <h1 className={secular_one.className}>Lombart Thibault</h1>
                <h2>Junior <span className={`${sedgwick_ave.className} foreground2`}>Developper</span></h2>
                <p>French Junior Developper. <span className={secular_one.className}>Apprenticeship</span> in Testing and Automation at <a href="https://worldline.com/fr-fr/home" target="_blank">@Worldline</a></p>
            </div>

            <Logo />
        </section>
    );
};

export default FirstPageComponent;