import styles from "../styles/Section.module.css";

const Section = (props) => {

    return (
        <>  
            <section className={styles["section"]}>

            <div className={`${"row"} ${"section-header"} ${"has-bottom-sep"}`} data-aos="fade-up">
            <div className={"col-full"}>
                    <h3 className={`${styles["subhead"]} ${styles["subhead--dark"]}`} >{props.subhead}</h3>
                    <h1 className={`${"display-2"} ${"display-2--light"}`}>{props.title}</h1>
                </div>
            </div> 


            {props.children}

            <div className={styles["section-line"]}></div>

            </section>
      </>
      )
}

export default Section;