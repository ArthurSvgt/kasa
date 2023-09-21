import './thumb.css'
import { Link } from 'react-router-dom';



function Card(props) {
    const divStyle = {
        backgroundImage: ' linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(' + props.imgValue + ')',
      };
    const title = props.titleValue
    const id = props.id
    return (
      <Link to={`/logement/${id}`} className='card-link'>
        <div className='loc-square' style={divStyle}>
          <h2 className='loc-title'>{title}</h2>
        </div>
      </Link>
    );
  }
  



export default Card