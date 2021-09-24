import styles from "../styles/Landing.module.css";
import Button from "../components/button.js";

const Landing = () => {

    return (
        <>

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

            <section id="home" className={`${styles["s-home"]} ${"target-section"}`} data-parallax="scroll" data-image-src="/images/hero-bg.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y="center">

                <div className={styles["overlay"]}></div>
                <div className={styles["shadow-overlay"]}></div>

                <div className={styles["home-content"]}>

                    <div className={`${"row"} ${styles["home-content__main"]}`}>

                        <h3>Let's start unboxing your business</h3>

                        <h1>
                            Wij ontwerpen en implementeren <br/>
                            betekenisvolle digitale ervaringen <br/>
                            voor medewerkers, klanten en partners <br/>
                            van startende en groeiende organisaties.
                        </h1>

                        <div className={styles["home-content__buttons"]}>
                            <Button type="stroke" href="#contact" caption="Start een project"/>
                            <Button type="stroke" href="#about" caption="Meer over ons"/>
                        </div>

                    </div>

                    <div className={styles["home-content__scroll"]}>
                        <a href="#about" className="scroll-link smoothscroll">
                            <span>Scroll Down</span>
                        </a>
                    </div>

                    <div className={styles["home-content__line"]}></div>

                </div> 


                {/*
                <ul className="home-social">
                    <li>
                        <a href="#0"><i className="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></a>
                    </li>
                    <li>
                        <a href="#0"><i className="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></a>
                    </li>
                    <li>
                        <a href="#0"><i className="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></a>
                    </li>
                    <li>
                        <a href="#0"><i className="fa fa-behance" aria-hidden="true"></i><span>Behance</span></a>
                    </li>
                    <li>
                        <a href="#0"><i className="fa fa-dribbble" aria-hidden="true"></i><span>Dribbble</span></a>
                    </li>
                </ul> 
                */}


            </section>  
        </>
        )
}



   

export default Landing;