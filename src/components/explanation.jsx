import React, { useState } from 'react';
import styles from './explanation.module.css';

function AlertOnFirstRender() {

    const explanation = `¡Bienvenido! este es un simulador del sorteo de la UEFA Champions league.
    El objetivo del sorteo de la fase de grupos es dividir a los 32 clubes en 8 grupos de 4 equipos. 
    
    Los grupos se designarán con las letras A a H. Los condicionantes a tener en cuenta son las siguientes:
    • Los clubes de un mismo país no deben quedar encuadrados en el mismo grupo. 
    
    Para el sorteo de la fase de grupos, los 32 clubes participantes están repartidos en cuatro grupos de ocho equipos.
    
    El primer bombo está compuesto por el campeón (Manchester City), el campeón de la UEFA Europa League (Sevilla FC) y los campeones 
    nacionales de España, Italia, Alemania, Francia, Portugal y Países Bajos.
    
    Los otros tres bombos se componen de acuerdo con la clasificación por coeficientes de clubes establecida al principio de la 
    temporada.
    
    Al hacer click en sortear equipo, se sorteará un equipo y será acomodado en un grupo, respetando las reglas establecidas del sorteo`

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        isVisible &&
        <div className={styles.elementToHide}>
            <div className={styles.customAlert}>
                <div className={styles.customAlertContent}> 
                    <span className={styles.closeButton} onClick={toggleVisibility}>X Cerrar</span>
                    <p>{explanation}</p>
                </div>
            </div>
        </div>

    ); 
    
     
}

export default AlertOnFirstRender;
