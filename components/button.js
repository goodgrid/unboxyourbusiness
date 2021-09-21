import styles from "../styles/Button.module.css"

const Button = (props) => {

    return (
        <>  
            <a href={props.href} className={`${"smoothscroll"} ${styles["btn"]} ${styles["btn--stroke"]}`}>
                {props.caption}
            </a>

      </>
      )
}

export default Button;