import styles from './header.module.css'

export default function Header(){
    return(
            <div className={styles.header}>
                <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/UEFA_Champions_League.svg/1200px-UEFA_Champions_League.svg.png" />
            </div>
    );
}
