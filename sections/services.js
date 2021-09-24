import styles from "../styles/Services.module.css";
import {ItemList, Item} from "../components/itemlist.js";
import Button from "../components/button.js";

const Services = () => {

    return (
        <>  
            <section id='services' className={styles["s-services"]}>

            <div className={`${"row"} ${"section-header"} ${"has-bottom-sep"}`} data-aos="fade-up">
                <div className={"col-full"}>
                    <h3 className={"subhead"}>Wat we doen</h3>
                    <h1 className={"display-2"}>
                        We hebben alles in huis om je business te helpen starten <br/>
                        én te professionaliseren.
                    </h1>
                </div>
            </div> 

            <ItemList>
                <Item title="Organisatie & Processen" icon="Processing">
                    <p>
                        Een startende of professionaliserende organisatie heeft behoefte
                        aan eenvoudige en doelmatige processen voor haar bedrijfsvoering. 
                        Zaken als het voeren van de administratie, klant- en orderbeheer 
                        en facturatie kunnen goed en simpel worden ingericht als ze geintegreerd
                        zijn met het werk in het primaire proces van je organisatie. Wij 
                        analyseren de behoefte en noodzaak, maken een plan om vanuit
                        de praktijk in de gewenste situatie te komen en voeren dat plan 
                        samen met jou uit.
                    </p>
                    <Button href="/business-subjects" caption="Meer weten"/>

                </Item>
                <Item title="Ontwerp & Architectuur" icon="HomeGroup">
                    <p>
                        Wat ons betreft gaat het ontwerp van de organisatie en de processen hand in hand
                        met de implementatie ervan. We werken het liefst 'agile' om maar zo snel mogelijk
                        gegevens te krijgen over het effect van de beoogde verandering en om tijd bij te 
                        kunnen sturen. We leggen de ontwerpkeuzes, de ratio daarvan en de principes en kaders 
                        die daaruit volgen wel direct vast, bij voorkeur in een dynamische omgeving als een 
                        wiki of knowledge base. Op deze manier is je manier van werken vanaf het eerste moment
                        geborgd en gedocumenteerd. Dat is een enorm voordeel als je organisatie
                        ook gevolgd wordt door bijvoorbeeld investeerders, accountants of IT auditors.

                    </p>
                    <Button href="/architecture-subjects" caption="Meer weten"/>

                </Item>
                <Item title="Data & Veiligheid" icon="Badge">
                  <p>
                        We bepalen voor jouw organisatie welke gegevens cruciaal zijn
                        voor je functioneren en succes en welke gegevens je en 
                        passant verzamelt tijdens de interactie met je omgeving. Voor al
                        die gegevens bepalen we het belang, de gevoeligheid, de 
                        vertrouwelijkheid en de risico's op lekken of verliezen. 
                    </p>
                    <p>

                        Maar het belangrijkste is dat de mensen die 
                        met je gegevens moeten werken ook toegang hebben en het makkelijk 
                        kunnen vinden op basis van criteria die voor hen relevant zijn. Van 
                        hieruit onstaat een 'domeinmodel' van jouw typen data, de 
                        mensen en systemen die er een belang bij hebben en de risico's 
                        die ermee gemoeid zijn. Op basis hiervan kunnen de juiste manieren
                        van toegang via tools ontworpen worden.
                    </p>

                    <Button href="/data-subjects" caption="Meer weten"/>

                </Item>
                <Item title="Tools & Systemen" icon="SearchAndApps">
                    <p>
                        We selecteren de oplossing die bij jou past gegeven jouw manier 
                        van werken, jouw stakeholders en jouw data. Om wendbaar te blijven 
                        en je groei te kunnen faciliteren zul je vaak kiezen voor 'cloud born'
                        toepassingen van bijvoorbeeld Okta, Box, Atlassian en Salesforce. Als 
                        jouw situatie on-premise of maatwerk -oplossingen vraagt, dan richten
                        we daarvoor het platform en de infrastructuur in. Om in zo'n situatie
                        wendbaar te blijven is het toepassen van container-technologie 
                        essentieel. Wij zorgen voor een selectie van leveranciers en 
                        implementatie die doelmatig, to-the-point en duurzaam is. We 
                        implementeren geen functies die nog niet aan de orde zijn, maar
                        zorgen dat de mogelijkheden beschikbaar blijven voor volgende
                        iteraties of fases.

                    </p>
                    <Button href="/technical-subjects" caption="Meer weten"/>

                </Item>

            </ItemList>





            </section>
      </>
      )
}

export default Services;