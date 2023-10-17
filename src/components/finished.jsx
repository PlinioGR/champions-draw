import React, { useState } from 'react';
import styles from './explanation.module.css';

function Finished() {

    const text = "¡El sorteo ha finalizado!"

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
                    <p>{text}</p>
                </div>
            </div>
        </div>

    ); 
    
     
}

export default Finished;