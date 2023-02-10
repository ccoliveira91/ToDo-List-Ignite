import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocketLogo} alt="Logotipo" />
            <h1>
                <span className={styles.span1}>to</span>
                <span className={styles.span2}>do</span>
            </h1>
        </header>
    );
}