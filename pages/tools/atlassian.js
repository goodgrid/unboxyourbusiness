import SolutionSheet from "../../components/solutionsheet.js";

const Atlassian = () => {

    return (
        <>  

            <SolutionSheet id="atlassian" title="Atlassian" subhead="Open work">
                <services>
                <h5>Selectie en begeleiding</h5>
                        <p>
                            We helpen je met de afweging of Atlassian op de beste manier jouw zorgen 
                            adresseert. Zodra je hebt gekozen voor Atlassian voert een Atlassian partner
                             de implememntatie uit.
                        </p>

                        <p>
                            Wij helpen je met het formuleren van eisen en wensen voor de implementatie in de rol
                            van business-/informatieanalist en architect. We zorgen ervoor dat de processen die je 
                            gaat ondersteunen met Atlassian aansluiten op je data- en applicatielandschap.
                        </p>


                    <h5>Integratie</h5>
                    <p>
                        Waar zinvol integreren we Atlassian met de andere delen uit je landschap, zoals bijvoorbeeld
                        <a href="#okta">Okta</a>, <a href="#box">Box</a> en <a href="#salesforce">Salesforce</a>.
                    </p>


                </services>
                <vendor>
                    <img src="/images/partners/atlassian.png"/>
                        
                    <p>
                        Atlassian is bekend van Jira om activiteiten mee te beheersen en van Confluence om 
                        kennis mee te beheren en ontsluiten. Atlassian heeft inmiddels ook Trello aan haar 
                        portfolio toegevoegd. 
                    </p>
                    <p>
                        Met deze producten ben je in staat om je processen en projecten op een navolgbare
                        manier uit te voeren en de betrokkenen te voorzien van alle kennis die ze nodig hebben.
                    </p>
                </vendor>

            </SolutionSheet>
        </>
)}

export default Atlassian;
