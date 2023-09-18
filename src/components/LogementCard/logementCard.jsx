import React, { useState } from 'react';
import './logementCard.css';

function LogementCard(props) {
    const [isOpenDesc, setIsOpenDesc] = useState(false);
    const [isOpenEquip, setIsOpenEquip] = useState(false);

    const toggleDescription = () => {
        setIsOpenDesc(!isOpenDesc);
    };

    const toggleEquipments = () => {
        setIsOpenEquip(!isOpenEquip);
    };

    return (
        <div className='flex-container'>
            <details className={`flex-card ${isOpenDesc ? 'open' : ''}`} onClick={toggleDescription}>
                <summary className='summ-title'>Description<i className={`fas fa-chevron-up ${isOpenDesc ? 'rotate' : ''}`}></i></summary>
                <p className='p-text'>{props.descValue}</p>
            </details>
            <details className={`flex-card ${isOpenEquip ? 'open' : ''}`} onClick={toggleEquipments}>
                <summary className='summ-title'>Equipements<i className={`fas fa-chevron-up ${isOpenEquip ? 'rotate' : ''}`}></i></summary>
                {props.equipmentsValue && props.equipmentsValue.map((equipment, index) => (
                    <p className='p-text' key={index}>{equipment}</p>
                ))}
            </details>
        </div>
    );
}

export default LogementCard;
