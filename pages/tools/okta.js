import SolutionSheet from "../../components/solutionsheet.js";

const Okta = () => {

    return (
        <>  

            <SolutionSheet id="okta" title="Okta" subhead="access and protect data">
                <services>
                    <h5>Implementatie</h5>

                        <p>Okta is in een handomdraait beschikbaar en in de basis ingesteld. De implementatie
                            bestaat uit het uitdenken en instellen van beveiligingsbeleid. Als je werkt volgens
                            een ISMS, dan moet het beleid daaruit gereflecteerd worden in Okta. Het gaat 
                            bijvoorbeeld om eisen die gesteld worden aan wachtwoorden en eisen aan het gebruik
                            van multi-factor authenticatie.
                        </p>

                        <p>
                            Daarna worden zoveel mogelijk applicaties gekoppeld met Okta. Om je gebruikers 
                            optimaal te ondersteunen kun je ervoor kiezen alle toepassingen beschikbaar te maken
                            op het Okta dashboard, maar de waarde neemt natuurlijk toe als Okta ook voor hen
                            inlogt via Single Sign On en informatie over hen vanuit Okta wordt gedeeld met de toepassingen
                            via provisioning.
                        </p>


                    <h5>Training en ondersteuning</h5>
                        <p>
                            Okta functioneert eenvoudig en voor een groot deel transparant voor je medewerkers,
                            klanten en partners. In veel gevallen is de grootste verandering voor hen dat ze 
                            alle toepassingen waar ze vanuit hun rol toegang toe hebben ook beschikbaar zien 
                            on hun dashboard. In projectnieuwsberichten leggen we uit wat de aankomende 
                            veranderingen zijn, welke acties nodig zijn en wat ze van Okta kunnen verwachten.
                        </p>
                        <p>
                            We helpen bij het installeren van de Okta plugin en Verify app, zodat alle 
                            gebruikers de optimale ervaring en maximaal nut ervaren.
                        </p>

                    <h5>Integratie en ontwikkeling</h5>
                    <p>
                        Hoewel Okta duizenden integraties aanbiedt, worden soms wel eisen gesteld aan de toepassingen
                        die je wilt ontsluiten. We helpen bij het invullen van die randvoorwaarden, zodat je 
                        maximaal rendement uit Okta zult halen. Wanneer een toepassing geen provisioning 
                        (uitwisseling van gebruikersgegevens) ondersteunt, dan kunnen we die in sommige gevallen 
                        realiseren.
                    </p>

                </services>
                <vendor>
                    <img src="/images/partners/okta.png"/>
                        
                    <p>Met duizenden integraties in het Okta Integration Network vormt Okta het fundament de wendbare
                    organisatie. Okta zorgt ervoor dat je medewerkers, klanten en partners toegang krijgen tot de 
                    functies en gegevens die ze nodig hebben. En doet dat bovendien met de beveiligingsmaatregelen
                    die je functies en data vereisen. </p>

                    <p>Okta is in 2009 opgericht en onderscheidt zich met haar cloud-native aanpak, de duizenden
                    beschikbare integraties en mogelijkheden om zelfs on-premise toepassingen toegankelijk te maken
                    en te beveiligen.</p>
                    

                </vendor>

            </SolutionSheet>
        </>
)}

export default Okta;
