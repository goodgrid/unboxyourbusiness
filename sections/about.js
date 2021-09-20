const About = () => {

    return (
        <>  
            <section id='about' className="s-about">

            <div className="row section-header has-bottom-sep" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead subhead--dark">Hello There</h3>
                    <h1 className="display-1 display-1--light">We Unbox Your Business</h1>
                </div>
            </div> 

            <div className="row about-desc" data-aos="fade-up">
                <div className="col-full">
                    <p>
                    Pak je bedrijf uit en werk samen met je omgeving. Unboxyourbusiness helpt je om je idee 
                    een bedrijf te maken. Of je nu net begonnen bent of de volgende fase in gaat. Unboxyourbusiness
                    neemt je alles uit handen waar je niet voor koos toen je je bedrijf startte. 
                    </p>
                </div>
            </div> 

            <div className="row about-stats stats block-1-4 block-m-1-2 block-mob-full" data-aos="fade-up">
                    
                <div className="col-block stats__col ">
                    <div className="stats__count">127</div>
                    <h5>Awards Received</h5>
                </div>
                <div className="col-block stats__col">
                    <div className="stats__count">1505</div>
                    <h5>Cups of Coffee</h5>
                </div>
                <div className="col-block stats__col">
                    <div className="stats__count">109</div>
                    <h5>Projects Completed</h5>
                </div>
                <div className="col-block stats__col">
                    <div className="stats__count">102</div>
                    <h5>Happy Clients</h5> 
                </div>

            </div> 

            <div className="about__line"></div>

            </section>
      </>
      )
}

export default About;