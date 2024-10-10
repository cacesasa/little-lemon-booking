import  littleLemonLogo from "../../assets/icons_assets/Logo.svg";
import styles from "./Nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li><a href="/" className={styles.logoWrapper} ><img src={littleLemonLogo} alt="logo" className={styles.logo} /></a></li>
                <li><a href="/about" className={styles.about} >About</a></li>
                <li><a href="/menu" className={styles.menu} >Menu</a></li>
                <li><a href="/reservations" className={styles.reservations} >Reservations</a></li>
                <li><a href="/order" className={styles.order} >Order Online</a></li>
                <li><a href="/login" className={styles.login} >Login</a></li>
            </ul>
        </nav>
    );
}