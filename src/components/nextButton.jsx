import styles from './nextButton.module.css'

export default function NextButton({handleClick}){
    return(
        <div className={styles.actions}>
            <button className={styles.advanceButton} onClick={handleClick} >Sortear equipo</button>
        </div>
    )
}

function makeDraw(){
    alert("Sorteo iniciado");

}

/*addRow = () => {
    // Clonamos el array de filas actual y agregamos una nueva fila
    const nuevasFilas = [...this.state.filas, <tr key={this.state.filas.length}><td>Nueva Fila</td></tr>];
    this.setState({ filas: nuevasFilas });
};*/