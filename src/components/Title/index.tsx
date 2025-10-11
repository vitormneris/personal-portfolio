import styles from "./style.module.css"

type TitleProps = {
    text: string
}

export const Title = ({ text }: TitleProps) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}> {text} </h1>
            <div className={styles.line} />
        </div>
    )
}