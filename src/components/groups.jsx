import styles from './groups.module.css';

export default function Groups({teams}) {
    const groups = ["A", "B", "C", "D","E","F","G","H"];

    const loadGroupsTeams = (group) => {
        const groupsTeams = teams.filter(team=>team.group === group);

        return(
            groupsTeams.map(team =>(
                <tr key={team.name}><td><img class={styles.teamLogo} src={team.logo} alt={team.name}/> {team.name} </td></tr>
            ))
        );
    }

    return (
        <div className={styles.content}>
            <h1>Grupos</h1>
            <div className={styles.tables}>
                {groups.map(group => (
                    <div key={group}>
                        <h2>Grupo {group}</h2>
                        <table>
                            {
                                loadGroupsTeams(group)
                            }
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}