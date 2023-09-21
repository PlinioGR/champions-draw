import styles from './nextButton.module.css'

export default function NextButton({handleClick}){
    return(
        <div className={styles.actions}>
            <button className={styles.advanceButton} onClick={handleClick} >Sortear equipo</button>
        </div>
    )
}