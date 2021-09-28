import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import Section from "../../components/section.js";
import Button from "../../components/button.js";
import {ItemList, Item} from "../../components/itemlist.js";


const Tools = () => {

    return (
        <>  
            <Header/>
            <Section title="Ontwerp & Architectuur" subhead="wendbaar blijven met doeltreffend ontwerp">

                <div className={`${"row"} ${"about-desc"}`}  data-aos="fade-up">
                    <div className={"col-full"}>
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
                    </div>
                </div> 


                <ItemList>
                    <Item title="Gegevenslandschap & Informatiearchitectuur" icon="HomeGroup">
                        <p>
                            Om komende verandering in goede banen te leiden is het raadzaam om een manier
                            te hebben om blijvend te weten welke gegevens je organisatie heeft, hoe de verbanden
                            zijn tussen die groepen gegevens en welk belang
                            en welke gevoeligheid ze hebben. Door hier bewust mee om te gaan zet je jezelf
                            op 'pole position' om gegevens eenmalig te bewaren en meervoudig te gebruiken. Dat 
                            heeft als voordeel dat je sneller zult kunnen vernieuwen en minder inspanning en kosten
                            nodig hebt om te beheren wat je hebt.
                        </p>
                        <Button caption="Onze oplossing"/>
                    </Item>
                    <Item title="Applicatielandschap & Integratiearchitectuur" icon="DialShape1">
                        <p>
                            In de applicatiearchitectuur is het leidend principe dat voor elk type gegevens
                            slechts één applicatie wordt gebruikt om die gegevens te beheren. Alle andere 
                            werkprocessen en applicaties die de gegevens nodig hebben ghebruikken die uit de bron
                            via het gebruik van koppelvlakken. 
                        </p>
                        <p>
                            Door op deze manier het applicatielandschap en integraties te ontwerpen, leidt 
                            eenduidigheid tot besparing van kosten en inspanning én tot een goede uitgangspositie
                            voor innovatie en verandering.
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
