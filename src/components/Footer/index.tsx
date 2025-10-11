import { MdAlternateEmail } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";

import styles from "./style.module.css"

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <p className={styles.title}>Entre em contato comigo</p>
                <div className={styles.container_text}>
                    <MdAlternateEmail className={styles.icon}/>
                    <p className={styles.text}>joaomoreiraneris0@gmail.com</p>
                </div>
                <div className={styles.container_text}>
                    <FiSmartphone className={styles.icon}/>
                    <p className={styles.text}>+55 (11) 91616-5849</p>
                </div>
            </div>
            <p className={styles.text_final}>© 2025 João Vítor Moreira dos Santos Neris — Todos os direitos reservados.</p>
        </div >
    )
}