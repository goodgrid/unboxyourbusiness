
import styles from "../styles/Contact.module.css";
import ContactForm from "../components/contactform"

const Contact = () => {

    return (
        <>  
            <section id="contact" className={styles["s-contact"]}>   

                <div className={styles["overlay"]}></div>
                <div className={styles["contact__line"]}></div>

                <div className={`${"row"} ${"section-header"} `} data-aos="fade-up">
                    <div className={"col-full"}>
                        <h3 className={`${"subhead"} `} >Contact</h3>
                        <h1 className={`${"display-2"} ${"display-2--light"}`}>Start een nieuw project of zeg gewoon even Hoi</h1>
                    </div>
                </div> 
 
                <div className={`${"row"} ${styles["contact-content"]}`} data-aos="fade-up">
                    
                    <div className={styles["contact-primary"]}>
                        <ContactForm/>
                    </div>

                    <div className={styles["contact-secondary"]}>
                        <div className={styles["contact-info"]}>

                            <h3 className={`{"h6"} ${"hide-on-fullwidth"}`}>Contactgegevens</h3>

                            <div className={"cinfo"}>
                                <h5>Waar kun je ons vinden</h5>
                                <p>
                                Mr Treublaan 7<br/>
                                1097 DP Amsterdam
                                </p>
                            </div>

                            <div className={"cinfo"}>
                                <h5>Mail ons op:</h5>
                                <p>
                                    info@unboxyourbusiness.nl<br/>
                                </p>
                            </div>

                            <div className={"cinfo"}>
                                <h5>Bel ons op:</h5>
                                <p>
                                    +31 (0) 84 873 5177<br/>
                                </p>
                            </div>


                            <span className={".icon-basket-ball"}></span>

                            <ul className={styles["contact-social"]}>
                                <li>
                                    <a href="#"><i className={`${"fa"} ${"fa-facebook"}`} aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                                </li>
                            </ul> 

                        </div> 
                    </div>

                </div> 

            </section> 

  
      </>
      )
}

export default Contact;

