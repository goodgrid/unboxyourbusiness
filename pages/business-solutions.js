import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Section from "../components/section.js";
import Button from "../components/button.js";
import {ItemList, Item} from "../components/itemlist.js";


const Tools = () => {

    return (
        <>  
            <Header/>
            <Section title="Organisatie & Processen" subhead="de basis professioneel geregeld">

                <div className={`${"row"} ${"about-desc"}`}  data-aos="fade-up">
                    <div className={"col-full"}>
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
                    </div>
                </div> 


                <ItemList>
                    <Item title="Finance & HR" icon="PenWorkspace">
                        <p>
                            Het voeren van een administratie is natuurlijk verplicht. Maar je hoeft het niet 
                            zelf te doen. Een eenvoudig proces voor het beheren van contracten en het kunnen
                            versturen van facturen is voor de meeste organisaties relevant. 

                        </p>
                        <Button caption="Onze oplossing"/>
                    </Item>
                    <Item title="Sales & Marketing" icon="Touch">
                        <p>
                            Je bedrijf heeft een website nodig en misschien basale aanwezigheid
                            op social media. Je kunt je producten of diensten onder de aandacht
                            brengen via content marketing, maar natuurlijk ook met advertenties,
                            webinars of events.
                        </p>
                        <Button caption="Onze oplossing"/>
                        
                    </Item>
                    <Item title="Bereikbaarheid & Mobiliteit" icon="Headset">
                        <p>
                            Iedere organisatie heeft basisvoorzienignen nodig, zoals email, chat, agenda en 
                            videovergaderen. Maar mogelijk ook voorzieningen voor mobiliteit, een postadres, een 
                            beleefd beantwoord 
                            telefoonnummer of een fysiek kantoor. Zelfs een secretariaat of personal assistent 
                            behoort tot de mogelijkheden.

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
