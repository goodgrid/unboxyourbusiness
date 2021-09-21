
//import axios from 'axios';
import Image from "next/image";
import React, {useState} from "react";
import Header from "../components/header.js";
import Landing from "../sections/landing.js";
import About from "../sections/about.js";
import Services from "../sections/services.js";
import Contact from "../sections/contact.js";
import Footer from "../components/footer.js";
//import { Config } from "../components/config.js";
import Link from "next/link"



const Home = ( props, error ) => {
    return (
        <>
            <Header />
            <Landing />
            <About />
            <Services />
            <Contact />
            <Footer />
        </>
    );
};



export default Home;