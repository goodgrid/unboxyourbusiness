import Head from "next/head";
import Script from "next/script";
import React, {useState} from "react";
import { slide as Menu } from 'react-burger-menu'
import styles from "../styles/Header.module.css"

var menuStyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#9DF75C'
    },
    bmBurgerBarsHover: {
      background: '#39b54a'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: 'white'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  
  
const Header = () => {

    return (
        <>
            <Head>
                <meta name="description" content="Wij ontwerpen en implementeren betekenisvolle digitale ervaringen voor medewerkers, klanten en partners van startende en groeiende organisaties."/>
                <meta http-equiv = "content-language" content = "nl"/>
                <title>Start unboxing your business</title>

                <link rel="shortcut icon" href="/favicon.ico"/>
                <link rel="icon" href="/favicon.ico"/>

                <script type="text/javascript" src="/js/pace.min.js"></script>
                <script type="text/javascript" src="/js/jquery-3.2.1.min.js"></script>
                <script type="text/javascript" src="/js/client.js"></script>
                <script type="text/javascript" src="/js/parallax.js"></script>

            </Head>

            <header className="s-header">
                <div className="header-logo">
                    <a className="site-logo" href="/">
                        <img src="/images/unboxlogo.png" alt="Homepage"/>  
                    </a>
                </div>

                <Menu right styles={menuStyles} itemListElement="a" disableAutoFocus >
                    <div className={styles["header-nav__content"]}>
                        <h3>Menu</h3>

                        <ul className={styles["header-nav__list"]}>
                            <li className="current"><a className="smoothscroll"  href="/#home" title="home">Start</a></li>
                            <li><a className="smoothscroll"  href="/#about" title="about">Over ons</a></li>
                            <li><a className="smoothscroll"  href="/#services" title="services">Diensten</a></li>
                            <ul className={styles["header-nav__sublist"]}>
                              <li><a className="smoothscroll"  href="/business" title="services">Organisatie & Processen</a></li>
                              <li><a className="smoothscroll"  href="/architecture" title="services">Ontwerp & Architectuur</a></li>
                              <li><a className="smoothscroll"  href="/data" title="services">Data & Veiligheid</a></li>
                              <li><a className="smoothscroll"  href="/tools" title="services">Tools & Systemen</a></li>
                            </ul>
                            <li><a className="smoothscroll"  href="/#clients" title="clients">Partners</a></li>
                            <li><a className="smoothscroll"  href="/#contact" title="contact">Contact</a></li>
                        </ul>
                    </div> 
                </Menu>


            </header> 

            

        </>
    )
}



   

export default Header;