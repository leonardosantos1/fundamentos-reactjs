import styles from "./Header.module.css";
import appLogo from "../assets/gamepad-svgrepo-com.svg"

export function Header(){

    return(
        <header className={styles.header}>
           <img src={appLogo} alt="Application Logodawdawdwda"/>
        </header>
        
    )
}