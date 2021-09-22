import styles from "../styles/About.module.css";

const About = () => {



    return (
        <>  
            <section id='about' className={styles["s-about"]}>

            <div className={`${"row"} ${"section-header"} ${"has-bottom-sep"}`} data-aos="fade-up">
            <div className={"col-full"}>
                    <h3 className={`${"subhead"} ${"subhead--dark"}`} >Hey daar</h3>
                    <h1 className={`${"display-1"} ${"display-1--light"}`}>Tear down those walls</h1>
                </div>
            </div> 

            <div className={`${"row"} ${"about-desc"}`}  data-aos="fade-up">
                <div className={"col-full"}>
                    <p>
                    Neem je idee uit de verpakking en werk samen met je omgeving. Unboxyourbusiness helpt 
                    je om je idee tot profesionele organisatie te maken. Of je nu net begonnen bent of de 
                    volgende fase in gaat. Unboxyourbusiness neemt je alles uit handen waar je niet voor 
                    koos toen je je bedrijf startte.    
                    </p>
                </div>
            </div> 

            <div className={`${"row"} ${styles["about-stats"]} ${styles["stats"]} ${"block-1-4"} ${"block-m-1-2"} ${"block-mob-full"}`} data-aos="fade-up">
                    
                <div className={`${"col-block"} ${styles["stats__col"]}`} >
                    <div className={styles["stats__count"]}>8</div>
                    <h5>Netwerkpartners</h5>
                </div>
                <div className={`${"col-block"} ${styles["stats__col"]}`} >
                    <div className={styles["stats__count"]}>1505</div>
                    <h5>Koppen koffie</h5>
                </div>
                <div className={`${"col-block"} ${styles["stats__col"]}`} >
                    <div className={styles["stats__count"]}>109</div>
                    <h5>Projecten afgerond</h5>
                </div>
                <div className={`${"col-block"} ${styles["stats__col"]}`} >
                    <div className={styles["stats__count"]}>20</div>
                    <h5>Blije klanten</h5> 
                </div>

            </div> 

            <div className={styles["about__line"]}></div>

            </section>
      </>
      )
}

export default About;