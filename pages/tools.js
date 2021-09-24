import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Section from "../components/section.js";
import {ItemList, Item} from "../components/itemlist.js";


const Tools = () => {

    return (
        <>  
            <Header/>
            <Section title="Tools & Systemen" subhead="handen uit de mouwen en voeten in de modder">

                <div className={`${"row"} ${"about-desc"}`}  data-aos="fade-up">
                    <div className={"col-full"}>
                        <p>
                            We selecteren de oplossing die bij jou past gegeven jouw manier van werken, jouw stakeholders en jouw data. Om wendbaar te blijven en je groei te kunnen faciliteren zul je vaak kiezen voor 'cloud born' toepassingen van bijvoorbeeld Okta, Box, Atlassian en Salesforce. Als jouw situatie on-premise of maatwerk -oplossingen vraagt, dan richten we daarvoor het platform en de infrastructuur in. Om in zo'n situatie wendbaar te blijven is het toepassen van container-technologie essentieel. Wij zorgen voor een selectie van leveranciers en implementatie die doelmatig, to-the-point en duurzaam is. We implementeren geen functies die nog niet aan de orde zijn, maar zorgen dat de mogelijkheden beschikbaar blijven voor volgende iteraties of fases.
                        </p>
                    </div>
                </div> 


                <ItemList>
                    <Item title="Okta" icon="Badge">
                        <p>
                            <b>Cloud Foundation: Identity & Access Management</b><br/>
                            Met duizenden integraties in het Okta Integration Network vormt Okta het fundament de wendbare
                            organisatie. Okta zorgt ervoor dat je medewerkers, klanten en partners toegang krijgen tot de 
                            functies en gegevens die ze nodig hebben. En doet dat bovendien met de beveiligingsmaatregelen
                            die je functies en data vereisen. 
                        </p>
                        Onze diensten:<br/>
                        <ul>
                            <li className={"mi mi-ArrowRight8"}>Business/Informatie analyse</li><br/>
                            <li className={"mi mi-ArrowRight8"}>Implementatie Okta</li><br/>
                            <li className={"mi mi-ArrowRight8"}>Ontwikkeling Rapportage-bots</li>
                        </ul>
                    </Item>
                    <Item title="Box" icon="ProtectedDocument">
                        <p>
                            <b>Frictionless Collaboration</b><br/>
                            Unbox met Box. Box is bedrieglijk eenvoudig in gebruik maar verrassend veelzijdig in 
                            mogelijkheden voor samenwerking, afscherming, ontsluiting en zelfs records management. Box
                            maakt documenten en notities naadloos toegankelijk voor je medewerkers, klanten en partners oplossing
                            mobiele telefoon, tablet en pc.
                        </p>
                        Onze diensten:<br/>
                        <ul>
                            <li className={"mi mi-ArrowRight8"}>Business/Informatie analyse</li><br/>
                            <li className={"mi mi-ArrowRight8"}>Ontwerp content model (mappen, classificaties, metadata)</li><br/>
                            <li className={"mi mi-ArrowRight8"}>Implementatie Box</li><br/>
                            <li className={"mi mi-ArrowRight8"}>Ontwikkeling bots, tools en apps</li>
                        </ul>

                    </Item>
                    <Item title="Salesforce" icon="Safe">
                        
                    </Item>
                    <Item title="Atlassian" icon="Work">
                        <b>Cloud Foundation: Identity & Access Management</b><br/>
                        SSO, Lifecycle Management, MFA, Authentication, Authorization
                        Workforce + Customer Identity Use Cases
                    </Item>

                </ItemList>



            </Section>
            <Footer/>
        </>
    )
}

export default Tools;
