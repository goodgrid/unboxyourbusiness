//import styles from "../styles/Header.module.css";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React, {useState} from "react";
//import axios from 'axios';
//import { Config } from "../components/config.js";

const Header = () => {

    return (
        <>

            <Head>

                <title>Unbox your business</title>

                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                <link rel="icon" href="/favicon.ico" type="image/x-icon"/>

                <script type="text/javascript" src="/js/pace.min.js"></script>
                <script type="text/javascript" src="/js/modernizr.js"></script>

                <script type="text/javascript" src="/js/jquery-3.2.1.min.js"></script>
                <script type="text/javascript" src="/js/plugins.js"></script>
                <script type="text/javascript" src="/js/main.js"></script>                
            </Head>

            <header className="s-header">
                <div className="header-logo">
                    <a className="site-logo" href="index.html">
                        <img src="/images/logo.png" alt="Homepage"/>
                    </a>
                </div>

                <nav className="header-nav">

                    <a href="#0" className="header-nav__close" title="close"><span>Close</span></a>

                    <div className="header-nav__content">
                        <h3>Navigation</h3>
                        
                        <ul className="header-nav__list">
                            <li className="current"><a className="smoothscroll"  href="#home" title="home">Home</a></li>
                            <li><a className="smoothscroll"  href="#about" title="about">About</a></li>
                            <li><a className="smoothscroll"  href="#services" title="services">Services</a></li>
                            <li><a className="smoothscroll"  href="#works" title="works">Works</a></li>
                            <li><a className="smoothscroll"  href="#clients" title="clients">Clients</a></li>
                            <li><a className="smoothscroll"  href="#contact" title="contact">Contact</a></li>
                        </ul>
            
                        <p>Perspiciatis hic praesentium nesciunt. Et neque a dolorum <a href='#0'>voluptatem</a> porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>
            
                        <ul className="header-nav__social">
                            <li>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-behance"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                            </li>
                        </ul>

                    </div>

                </nav>  

                <a className="header-menu-toggle" href="#0">
                    <span className="header-menu-text">Menu</span>
                    <span className="header-menu-icon"></span>
                </a>

            </header> 

            
            <div id="preloader">
                <div id="loader">
                    <div class="line-scale-pulse-out">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

        </>
    )
}



   

export default Header;