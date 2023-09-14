import styles from './pots.module.css'

export default function Pots({teams, handleClick}){
    const pots=[1, 2, 3, 4];

    const loadPotsTeams = (pot) => {
        const potsTeams = teams.filter(team=>team.pot === pot)

        return(
            potsTeams.map(team =>(
                <p key={team.name}><img className={styles.teamLogo} src={team.logo} alt={team.name}/>{team.name}</p>
            ))
        );
    }

    return(
        <div className={styles.content}>
            <h1>Bombos</h1>
            <div className={styles.tables}>
                {
                    pots.map(pot =>(
                        <div key={pot}>
                            <h2>Bombo {pot}</h2>
                            {
                                loadPotsTeams(pot)
                            }
                        </div>
                    ))    
                }
            </div>
        </div>
    );
}
