import styles from "../styles/About.module.css";

const About = () => {

    return (
        <>  
            <section id='about' className={styles["s-about"]}>

            <div className={`${"row"} ${"section-header"} ${"has-bottom-sep"}`} data-aos="fade-up">
            <div className={"col-full"}>
                    <h3 className={`${"subhead"} ${"subhead--dark"}`} >Hey Mr. President</h3>
                    <h1 className={`${"display-1"} ${"display-1--light"}`}>Tear down those walls</h1>
                </div>
            </div> 

            <div className={`${"row"} ${"about-desc"}`}  data-aos="fade-up">
                <div className={"col-full"}>
                    <p>
                        Wij geloven dat organiseren niet ingewikkeld hoeft te zijn. Een van onze grootste 
                        waarden is 'gewoon dóén' (niet te verwarren met 'gewóón doen' waarmee we weinig mee op hebben). 
                        Door op basis van enkele eenvoudige basisprincipes aan de 
                        gang te gaan, heb je het snelst inzicht op in de volgende stappen. In een onzekere
                        omgeving is het zinloos om de onzekerheid te lijf te gaan, maar is de vaardigheid
                         om altijd in een situatie te blijven waar je nog kunt veranderen. Wij denken dat 
                         we die vaardigheid bezitten en daarmee je organisatie snel kunnen laten starten 
                         én groeien.
                    </p>
                    <p>
                        De tijd dat een organisatie alles zelf deed ligt ver achter ons. Net zoals 
                        het beheer van een eigen wagenpark fronzende blikken oplevert, laten we op veel meer
                        fronten andere organisaties doen waar ze goed in zijn. Dat gebeurt in een klant-leverancierrelatie 
                        maar steeds vaker ook in een gelijkwaardige partnerrelatie. De hoeveelheid relaties 
                        die je organisatie op deze manier opbouwt neemt enorm toe. Samenwerken is het nieuwe organiseren. 
                        Wij vinden dat samenwerking zo frictieloos als mogelijk moet plaatsvinden. We 
                        selecteren daarvoor graag de partners, maken heldere afspraken en implementeren de juiste
                        voorzieningen om dit te realiseren.
                    </p>
                    <p>
                        Unboxyourbusiness helpt 
                        je om van je idee een profesionele organisatie te maken. Of je nu net begonnen bent of de 
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