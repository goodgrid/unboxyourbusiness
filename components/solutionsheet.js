import { Children } from "react";
import styles from "../styles/SolutionSheet.module.css";

const SolutionSheet = (props) => {

    return (
        <>  

            <section id={props.id} className={styles["s-contact"]}>   

                <div className={styles["overlay"]}></div>
                <div className={styles["contact__line"]}></div>

                <div className={`${"row"} ${"section-header"} `} data-aos="fade-up">
                    <div className={"col-full"}>
                        <h3 className={`${"subhead"} `}>{props.subhead}</h3>
                        <h1 className={`${"display-2"} ${"display-2--light"}`}>{props.title}</h1>
                    </div>
                </div> 

 
                <div className={`${"row"} ${styles["contact-content"]}`} data-aos="fade-up">
                    
                    <div className={styles["contact-primary"]}>

                        {props.children[0]}
                    </div>

                    <div className={styles["contact-secondary"]}>
                        <div className={styles["contact-info"]}>
                        {props.children[1]}
                        </div>
                    </div>

                </div> 

            </section> 

  
      </>
      )
}

export default SolutionSheet;