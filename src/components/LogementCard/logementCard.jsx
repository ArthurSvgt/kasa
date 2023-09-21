import React, { useState } from 'react';
import Collapse from '../Collapse/collapse';
import './logementCard.css'

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
      <Collapse
        title='Description'
        content={props.descValue}
        isOpen={isOpenDesc}
        toggle={toggleDescription}
      />
      <Collapse
        title='Equipements'
        content={props.equipmentsValue.map((equipment, index) => (
          <p className='p-text' key={index}>{equipment}</p>
        ))}
        isOpen={isOpenEquip}
        toggle={toggleEquipments}
      />
    </div>
  );
}

export default LogementCard;
