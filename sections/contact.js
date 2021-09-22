import styles from "../styles/Contact.module.css";

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

                        <h3 className={"h6"}>Stuur een bericht</h3>

                        <form name="contactForm" id="contactForm" method="post" action="" novalidate="novalidate">
                            <fieldset>
            
                            <div className={styles["form-field"]}>
                                <input name="contactName" type="text" id="contactName" placeholder="Je naam" value="" minlength="2" required="" aria-required="true" className={"full-width"}/>
                            </div>
                            <div className={styles["form-field"]}>
                                <input name="contactEmail" type="email" id="contactEmail" placeholder="Je email" value="" required="" aria-required="true" className="full-width"/>
                            </div>
                            <div className={styles["form-field"]}>
                                <input name="contactSubject" type="text" id="contactSubject" placeholder="Onderwerp" value="" className="full-width"/>
                            </div>
                            <div className={styles["form-field"]}>
                                <textarea name="contactMessage" id="contactMessage" placeholder="Je bericht" rows="10" cols="50" required="" aria-required="true" className="full-width"></textarea>
                            </div>
                            <div className={styles["form-field"]}>
                                <button className={`${"full-width"} ${"btn--primary"}`}>Sturen</button>
                                <div className={styles["submit-loader"]}>
                                    <div className={styles["text-loader"]}>Sturen...</div>
                                    <div className={styles["s-loader"]}>
                                        <div className={styles["bounce1"]}></div>
                                        <div className={styles["bounce2"]}></div>
                                        <div className={styles["bounce3"]}></div>
                                    </div>
                                </div>
                            </div>
            
                            </fieldset>
                        </form>


                        <div className={styles["message-warning"]}>
                            Er ging iets fout. Probeer het nog eens?
                        </div> 
                    

                        <div className={styles["message-success"]}>
                            Verstuurd! Bedankt voor je bericht.<br/>
                        </div>

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