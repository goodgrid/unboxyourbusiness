import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Section from "../components/section.js";
import Button from "../components/button.js";
import {ItemList, Item} from "../components/itemlist.js";


const Tools = () => {

    return (
        <>  
            <Header/>
            <Section title="Data & Veiligheid" subhead="on top of the competition using data">

                <div className={`${"row"} ${"about-desc"}`}  data-aos="fade-up">
                    <div className={"col-full"}>
                        <p>
                        We bepalen voor jouw organisatie welke gegevens cruciaal zijn
                        voor je functioneren en succes en welke gegevens je en 
                        passant verzamelt tijdens de interactie met je omgeving. Voor al
                        die gegevens bepalen we het belang, de gevoeligheid, de 
                        vertrouwelijkheid en de risico's op lekken of verliezen. 
                        </p>
                        <p>

                        Maar het 
                        belangrijkste is dat de mensen die 
                        met je gegevens moeten werken ook toegang hebben en het makkelijk 
                        kunnen vinden op basis van criteria die voor hen relevant zijn. Van 
                        hieruit onstaat een 'domeinmodel' van jouw typen data, de 
                        mensen en systemen die er een belang bij hebben en de risico's 
                        die ermee gemoeid zijn. Op basis hiervan kunnen de juiste manieren
                        van toegang via tools ontworpen worden.



                        </p>
                    </div>
                </div> 


                <ItemList>
                    <Item title="Risico-inventarisatie" icon="HomeGroup">
                        <p>
                        </p>
                        <Button caption="Onze oplossing"/>
                    </Item>
                    <Item title="Informatiebeveiliging & Governance" icon="DialShape1">
                        <p>
                        </p>
                        <Button caption="Onze oplossing"/>
                        
                    </Item>
                </ItemList>



            </Section>
            <Footer/>
        </>
    )
}

export default Tools;
