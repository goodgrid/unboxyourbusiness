import styles from "../styles/Partners.module.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Partners = () => {

    return (
        <> 
            <section id="clients" className={styles["s-clients"]}>

                <div className={`${"row"} ${"section-header"} `} data-aos="fade-up">
                    <div className={"col-full"}>
                        <h3 className={"subhead"}>Onze partners</h3>
                        <h1 className={"display-2"}>
                            Werken met vertrouwde partners en best-of-breed platforms.
                        </h1>
                    </div>
                </div> 


                <div className={`${"row"} ${styles["clients-outer"]}`} data-aos="fade-up">
                    <div className={"col-full"}>
                        <div className={styles["col-full"]}>

                        <Carousel responsive={responsive}>

                            <a href="#0" title="" className={styles["clients__slide"]}><img className={styles["partner-icon"]} src="images/partners/okta.png" /></a>
                            <a href="#0" title="" className={styles["clients__slide"]}><img className={styles["partner-icon"]} src="images/partners/box.png" /></a>
                            <a href="#0" title="" className={styles["clients__slide"]}><img className={styles["partner-icon"]} src="images/partners/salesforce.png" /></a>
                            <a href="#0" title="" className={styles["clients__slide"]}><img className={styles["partner-icon"]} src="images/partners/atlassian.png" /></a>
                            <a href="#0" title="" className={styles["clients__slide"]}><img className={styles["partner-icon"]} src="images/partners/cloudguide.png" /></a>
                            <a href="#0" title="" className={styles["clients__slide"]}><img className={styles["partner-icon"]} src="images/partners/moneypenny.svg" /></a>
                            {/*                            
                            <a href="#0" title="" className={styles["clients__slide"]}><img className={styles["partner-icon"]} src="images/partners/indocs.png" /></a>
                            <a href="#0" title="" className={styles["clients__slide"]}><img className={styles["partner-icon"]} src="images/partners/incompanion.png" /></a>
                            */}

                        </Carousel>                        
                            
                        </div> 
                    </div> 
                </div> 

  

            </section>
        </>

        )
    }
    
    export default Partners;

