import styles from "../styles/Button.module.css"

const Button = (props) => {
    let classes = styles["btn"] + " " + styles["btn--primary"]

    if (props.type == "stroke") {
        classes = classes + " " + styles["btn--stroke"]
    }

    console.log(classes);
    return (
        
        <>  
            <a href={props.href} className={classes}>
                {props.caption}
            </a>

      </>
      )
}

export default Button;