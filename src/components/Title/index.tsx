import styles from "./style.module.css"

type TitleProps = {
    text: string
}

export const Title = ({ text }: TitleProps) => {
    return (
        <div className={styles.container}>
            <p className={styles.text}> {text} </p>
            <div className={styles.line} />
        </div>
    )
}