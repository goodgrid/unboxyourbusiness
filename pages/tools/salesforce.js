import SolutionSheet from "../../components/solutionsheet.js";

const Salesforce = () => {

    return (
        <>  

            <SolutionSheet id="salesforce" title="Salesforce" subhead="">
                <services>
                    <h5>Selectie en begeleiding</h5>
                        <p>
                            We helpen je met de afweging of Salesforce op de beste manier jouw zorgen 
                            adresseert. Zodra je hebt gekozen voor Salesforce voert een Salesforce partner
                             de implememntatie uit.
                        </p>

                        <p>
                            Wij helpen je met het formuleren van eisen en wensen voor de implementatie in de rol
                            van business-/informatieanalist en architect. We zorgen ervoor dat de gegevens die je 
                            gaat beheren met Salesforce aansluiten op de rest van je data- en applicatielandschap.
                        </p>

                    <h5>Conversie en migratie</h5>
                    <p>
                        We helpen je met de data die je al hebt te structureren en op de juiste manier in 
                        Salesforce in te lezen en leggen je uit hoe je dit ook zelf kunt doen.
                    </p>

                    <h5>Data-centric apps en integratie</h5>
                    <p>
                        Waar zinvol integreren we Salesforce met de andere delen uit je landschap, zoals bijvoorbeeld
                        <a href="#okta">Okta</a> en <a href="#box">Box</a>.
                    </p>

                </services>
                <vendor>
                    <img src="/images/partners/salesforce.png"/>
                        
                    <p>
                        Salesforce is natuurlijk bekend van haar oplossing voor customer relationship management. 
                    Salesforce' verticale oplossingen zijn aanzienlijk verbreed met Service Cloud en Marketing
                    Cloud, maar bovendien wordt het inmiddels ook erkent als low code platform. Door data vast te
                    leggen, te ontsluiten en te beveiligen ontstaat de mogelijkheid om apps te ontwikkelen voor
                    processen en activiteiten waar een specifiek systeem niet voor bestaat of nog niet aan de orde 
                    is. Op deze manier ondersteun je je medewerkers, klanten en partners op een professionele
                    en duurzame manier zonder voor ieder probleem een aparte applicatie aan te schaffen of zelfs
                    te laten ontwikkelen.                    
                    </p>


                </vendor>

            </SolutionSheet>
        </>
)}

export default Salesforce;
