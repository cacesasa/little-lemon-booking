import styles from "./Main.module.css";

export default function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.left}>Left</div>
            <div className={styles.rightWrapper}>
                <div className={styles.right}>Right</div>
            </div>
        </main>
    );
}