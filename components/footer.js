import styles from "../styles/Footer.module.css";

const Footer = () => {

    return (
        <>  
            <footer className={styles["footer"]}>
                <div className={`${"row"} ${styles["footer-main"]}`} >
                    <div className="col-six tab-full left footer-desc">
                        <a className="site-logo" href="/">
                            <img src="/images/unboxlogo.png" width="80px" alt="Homepage"/>
                        </a>

                        <div>Unboxyourbusiness opent je organisatie om de potentie optimaal te kunnen benutten. 
                            Door grenzen en belemmeringen te slechten, stel je jezelf in staat om perfect samen te werken
                            met medewerkers, klanten en partners. We doen dit door processen, structuren en tools te 
                            ontwerpen, te ontwikkelen en te implementeren.</div>
                    </div>

                    <div className="col-six tab-full right footer-subscribe">
                        <h4 className={styles["h4"]}>Get Notified</h4>
                        <p>Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.</p>
                        <div className={styles["subscribe-form"]}>
                            <form id="mc-form" className={"group"} novalidate="true">
                                <input type="email" value="" name="EMAIL" className="email" id="mc-email" placeholder="Email Address" required=""/>
                                <input type="submit" name="subscribe" value="Subscribe"/>
                                <label for="mc-email" className="subscribe-message"></label>
                            </form>
                        </div>

                    </div>

                </div>

                <div className={`${"row"} ${styles["footer-bottom"]}`} >

                    <div className={"col-twelve"}>
                        <div className={styles["copyright"]}>
                            <span>© Copyright Unboxyourbusiness 2021</span> 
                            
                        </div>

                        <div className={"go-top"}>
                            <a className={`${styles["link"]} ${"smoothscroll"}`} title="Back to Top" href="#top"><i className={"icon-arrow-up"} aria-hidden="true"></i></a>
                        </div>
                    </div>

                </div>

            </footer>
      </>
      )
}


export default Footer;