import styles from "../styles/Services.module.css";

const Services = () => {

    return (
        <>  
            <section id='services' className={styles["s-services"]}>

            <div className={`${"row"} ${"section-header"} ${"has-bottom-sep"}`} data-aos="fade-up">
                <div className={"col-full"}>
                    <h3 className={"subhead"}>Wat we doen</h3>
                    <h1 className={"display-2"}>We hebben alles in huis om je business te starten én te professionaliseren.</h1>
                </div>
            </div> 

            <div className={`${"row"} ${styles["services-list"]} ${"block-1-2"} ${"block-tab-full"}`}>

            <div className={`${"col-block"} ${styles["service-item"]}`} data-aos="fade-up">
                    <div className={`${styles["service-icon"]}`}>
                        <i className={`${"icon-paint-brush"}`}></i>
                    </div>
                    <div className={`${styles["service-text"]}`}>
                        <h3 className="h2">Organisatie & Processen</h3>
                        <p>ddd
                        </p>
                    </div>
                </div>

                <div className={`${"col-block"} ${styles["service-item"]}`} data-aos="fade-up">
                    <div className={`${styles["service-icon"]}`}>
                        <i className={`${"icon-group"}`}></i>
                    </div>
                    <div className={`${styles["service-text"]}`}>
                        <h3 className="h2">Ontwerp & Architectuur</h3>
                        <p>ddd
                        </p>
                    </div>
                </div>


                <div className={`${"col-block"} ${styles["service-item"]}`} data-aos="fade-up">
                    <div className={`${styles["service-icon"]}`}>
                        <i className={`${"icon-map"}`}></i>
                    </div>
                    <div className={`${styles["service-text"]}`}>
                        <h3 className="h2">Data & Informatie</h3>
                        <p>ddd
                        </p>
                    </div>
                </div>

                <div className={`${"col-block"} ${styles["service-item"]}`} data-aos="fade-up">
                    <div className={`${styles["service-icon"]}`}>
                        <i className={`${"icon-mobile"}`}></i>
                    </div>
                    <div className={`${styles["service-text"]}`}>
                        <h3 className="h2">Tools & Systemen</h3>
                        <p>ddd
                        </p>
                    </div>
                </div>

                <div className={`${"col-block"} ${styles["service-item"]}`} data-aos="fade-up">
                    <div className={`${styles["service-icon"]}`}>
                        <i className={`${"icon-wrench"}`}></i>
                    </div>
                    <div className={`${styles["service-text"]}`}>
                        <h3 className="h2">Beheer & Ondersteuning</h3>
                        <p>ddd
                        </p>
                    </div>
                </div>

                <div className={`${"col-block"} ${styles["service-item"]}`} data-aos="fade-up">
                    <div className={`${styles["service-icon"]}`}>
                        <i className={`${"icon-user"}`}></i>
                    </div>
                    <div className={`${styles["service-text"]}`}>
                        <h3 className="h2">Consultancy & Tactiek</h3>
                        <p>ddd
                        </p>
                    </div>
                </div>



            </div> 

            </section>
      </>
      )
}

export default Services;