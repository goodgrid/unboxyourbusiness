const Contact = () => {

    return (
        <>  

            <section id="contact" class="s-contact">   

                <div class="overlay"></div>
                <div class="contact__line"></div>

                <div class="row section-header" data-aos="fade-up">
                    <div class="col-full">
                        <h3 class="subhead">Contact</h3>
                        <h1 class="display-2 display-2--light">Start een nieuw project of zeg gewoon even Hoi</h1>
                    </div>
                </div>

                <div class="row contact-content" data-aos="fade-up">
                    
                    <div class="contact-primary">

                        <h3 class="h6">Stuur een bericht</h3>

                        <form name="contactForm" id="contactForm" method="post" action="" novalidate="novalidate">
                            <fieldset>
            
                            <div class="form-field">
                                <input name="contactName" type="text" id="contactName" placeholder="Je naam" value="" minlength="2" required="" aria-required="true" class="full-width"/>
                            </div>
                            <div class="form-field">
                                <input name="contactEmail" type="email" id="contactEmail" placeholder="Je email" value="" required="" aria-required="true" class="full-width"/>
                            </div>
                            <div class="form-field">
                                <input name="contactSubject" type="text" id="contactSubject" placeholder="Onderwerp" value="" class="full-width"/>
                            </div>
                            <div class="form-field">
                                <textarea name="contactMessage" id="contactMessage" placeholder="Je bericht" rows="10" cols="50" required="" aria-required="true" class="full-width"></textarea>
                            </div>
                            <div class="form-field">
                                <button class="full-width btn--primary">Sturen</button>
                                <div class="submit-loader">
                                    <div class="text-loader">Sturen...</div>
                                    <div class="s-loader">
                                        <div class="bounce1"></div>
                                        <div class="bounce2"></div>
                                        <div class="bounce3"></div>
                                    </div>
                                </div>
                            </div>
            
                            </fieldset>
                        </form>


                        <div class="message-warning">
                            Er ging iets fout. Probeer het nog eens?
                        </div> 
                    

                        <div class="message-success">
                            Verstuurd! Bedankt voor je bericht.<br/>
                        </div>

                    </div>

                    <div class="contact-secondary">
                        <div class="contact-info">

                            <h3 class="h6 hide-on-fullwidth">Contactgegevens</h3>

                            <div class="cinfo">
                                <h5>Waar kun je ons vinden</h5>
                                <p>
                                Mr Treublaan 7<br/>
                                1097 DP Amsterdam
                                </p>
                            </div>

                            <div class="cinfo">
                                <h5>Mail ons op:</h5>
                                <p>
                                    info@unboxyourbusiness.nl<br/>
                                </p>
                            </div>

                            <div class="cinfo">
                                <h5>Bel ons op:</h5>
                                <p>
                                    +31 (0) 84 873 5177<br/>
                                </p>
                            </div>

                            <ul class="contact-social">
                                <li>
                                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
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