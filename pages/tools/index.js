import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import Section from "../../components/section.js";
import Button from "../../components/button.js";
import {ItemList, Item} from "../../components/itemlist.js";
import Box from "./box.js";
import Okta from "./okta.js";
import Salesforce from "./salesforce.js";
import Atlassian from "./atlassian.js";
import Contact from "../../sections/contact.js";


const Tools = () => {

    return (
        <>  
            <Header/>
            <Section title="Tools & Systemen" subhead="handen uit de mouwen en voeten in de modder">

                <div className={`${"row"} ${"about-desc"}`}  data-aos="fade-up">
                    <div className={"col-full"}>
                        <p>
                            We selecteren de oplossing die bij jou past gegeven jouw manier van werken, jouw 
                            stakeholders en jouw data. Om wendbaar te blijven en je groei te kunnen faciliteren 
                            zul je vaak kiezen voor 'cloud born' toepassingen van bijvoorbeeld Okta, Box, Atlassian 
                            en Salesforce. Als jouw situatie on-premise of maatwerk -oplossingen vraagt, dan richten 
                            we daarvoor het platform en de infrastructuur in. Om in zo'n situatie wendbaar te 
                            blijven is het toepassen van container-technologie essentieel. Wij zorgen voor een 
                            selectie van leveranciers en implementatie die doelmatig, to-the-point en duurzaam is. 
                            We implementeren geen functies die nog niet aan de orde zijn, maar zorgen dat de 
                            mogelijkheden beschikbaar blijven voor volgende iteraties of fases.
                        </p>
                    </div>
                </div> 


                <ItemList>
                    <Item title="Cloud Foundation: Identity & Access Management" icon="Badge">
                        <p>
                            Identity- en Accessmanagement zorgt ervoor dat de applicaties en data die je gebruikt
                            in je organisatie toegankelijk zijn voor de juiste mensen op het juiste moment. Het geeft
                            je medewerkers, klanten en partners toegang met veilige inlogmethoden. Dat kan een complex 
                            wachtwoord zijn, maar natuurlijk gebruik je meerdere 'factors' (MFA). Identity- en 
                            accessmanagement is het fundament van je digital business omdat het je mensen voorziet
                            van eenduidige toegang tot alles wat ze nodig hebben voor hun samenwerking met je.
                        </p>
                        <p>
                            Iedere medewerker, klant of partner heeft een bepaalde levenscyclus in de samenwerking 
                            met je organisatie. Vanaf 'onboarding' in het HR- of CRM-systeem via actief gebruik tot
                            'offboarding'. On- en ofboarding houdt in dat op basis van de rol in je organisatie 
                            toegang wordt gegeven en weer ingetrokken tot alle relevante applicaties en data. Op deze
                            manier wordt het verschaffen van toegang tot de juiste applicaties en data onderdeel van 
                            een proces dat in ieder organisatie per definitie al bestaat. Het vereenvoudigt 
                            het werk, vermindert fouten en verkleint risico's op datalekken terwijl de employee en 
                            customer experience drastisch verbetert.
                        </p>
                        <Button href="#okta" caption="Onze oplossing"/>
                    </Item>
                    <Item title="Frictionless Collaboration & Document Management" icon="ProtectedDocument">
                        <p>
                            Samenwerking begint met samenbrengen van mensen en het delen van ideeën. Het is 
                            cruciaal om het gezamenlijk over dezelfde informatie te beschikken en
                            natuurlijk is het ongewenst om informatie voortijdig te delen met het verkeerde publiek. 
                        </p>
                        <p>
                            De resultaten van dit werk moeten zowel beschermd als ontsloten worden.  Hier begint 
                            het dilemma van document management. Vrije samenwerking leidt tot resultanten die 
                            minitieus bewaard, ontsloten en beheerd moeten worden. Informatie mag niet langer 
                            bewaard worden dan nodig of toegestaan. Ook informatie heeft een levenscyclus van
                            onstaan tot verwijdering. Dit heeft voordelen voor de vindbaarheid van actuele 
                            informatie, maar is vaak ook verplichting vanuit wet- en regelgeving variërend van de 
                            Algemene Verordening Gegevensbescherming tot de Archiefwet.
                        </p>

                        <Button href="#box" caption="Onze oplossing"/>
                    </Item>
                    <Item title="Data Centric Apps" icon="Safe">
                        <p>
                            Iedere organisatie bouwt een enorme verzameling aan gegevens op. Vaak gaat het om gegevens
                            over projecten, klanten en prospects, maar soms ook over leveranciers, contracten, bezittingen
                            of gegevens uit je primaire processen. Door die gegevens
                            gestructureerd en goed afgeschermd te bewaren worden ze herbruikbaar in alle processen
                            waar ze nodig zijn. 
                        </p>
                        <p>
                            Ontsluiting van gegevens naar processen kan via applicaties die je specifiek voor dat proces
                            hebt, maar soms is een specifieke applicatie niet nodig. Het is dan een valkuil om je 
                            gegevens bij te houden in Excel. De kans is om de gegevens centraal en veilig te bewaren
                            en beheren en te ontsluiten naar het werkproces via eenvoudige schermen.
                        </p>
                        <Button href="#salesforce" caption="Onze oplossing"/>
                        
                    </Item>
                    <Item title="Workload management" icon="Work">
                        <p>
                            Na het fundament, oplossingen voor samenwerking en documentbeheer en oplossingen voor het 
                            beheer en gebruik van je gegevens, ontbreekt alleen nog het faciliteren van werkprocessen. 
                            Alle werkprocessen die je wilt controleren en die niet ondersteund worden door een specifieke
                            applicatie kunnen hier ondergebracht worden. Je kunt denken aan begeleiden van verandering 
                            via projecten of ontwikkelsprints, het afhandelen van HR-verzoeken van medewerkers of het
                            beantwoorden van vragen van je klanten.
                        </p>
                        <p>
                            In plaats van processen tot op de laatste letter uit te spellen, wordt vaak gebruik gemaakt van
                            werkeenheden die een aantal statussen doorlopen. Medewerkers of partners die een activiteit
                            toegewezen krigjen, voeren die activiteit op basis van hun expertise en profesonaliteit uit. 
                            Eventueel kan verwezen worden naar generieke werkinstructies.
                        </p>
                        <Button href="#atlassian" caption="Onze oplossing"/>
                    </Item>

                </ItemList>



            </Section>

            <Okta/>
            <Box/>
            <Salesforce/>
            <Atlassian/>
            <Contact/>

            <Footer/>
        </>
    )
}

export default Tools;
