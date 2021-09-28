import styles from "../styles/Button.module.css"

export default function Button({href, onClick, caption, type})  {

    let classes = styles["btn"] + " " + styles["btn--primary"]

    if (type == "stroke") {
        classes = classes + " " + styles["btn--stroke"]
    }
    
    return (
        
        <>  
            <a href={href} onClick={onClick} className={classes}>
                {caption}
            </a>

      </>
      )
}

