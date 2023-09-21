import './headerLogement.css';
import RatingStars from './ratingStars';

function HeaderLogement(props) {
  
  return (
    <div>
      <div className='header-info'>
        <div className='header-info-left'>
          <h1>{props.titleValue}</h1>
          <h2>{props.locationValue}</h2>
          <div className='tagsList'>
            {props.tagsValue.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
        </div>
        <div className='header-info-right'>
          <div className='userInfo'>
            <h2>{props.nameHost}</h2>
            <img src={props.imgHost} alt='Avatar utilisateur' />
          </div>
          <div className='stars'>
            <RatingStars note={props.ratingValue} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderLogement


