import styles from "../styles/ItemList.module.css";


const ItemList = (props) => {

    return (
        <>  

            <div className={`${"row"} ${styles["services-list"]} ${"block-1-2"} ${"block-tab-full"}`}>
                {props.children}
            </div>


      </>
      )
}


const Item = (props) => {

    return (
        <>  

            <div className={`${"col-block"} ${styles["service-item"]}`} data-aos="fade-up">
            <div className={`${styles["service-icon"]}`}>
                <i className={`${"mi"} ${"mi-" + props.icon}`}></i>
            </div>
            <div className={`${styles["service-text"]}`}>
                <h3 className={styles["item-title"]}>{props.title}</h3>
                <p>
                    {props.children}
                </p>
            </div>
            </div>
        </>
    )
}

export {
    ItemList,
    Item
};
