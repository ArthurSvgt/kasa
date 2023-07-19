import './equipementCard.css'


function EquipementCard(props) {
    console.log(props.equipmentsValue);
    return (
      <div className='flex-card'>
        <h2>Equipements</h2>
        {props.equipmentsValue && props.equipmentsValue.map((equipment, index) => (
          <p key={index}>{equipment}</p>
        ))}
      </div>
    );
  }

export default EquipementCard