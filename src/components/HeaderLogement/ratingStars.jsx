import './ratingStars.css'

const RatingStars = ({ note }) => {
    const roundedNote = Math.round(note);
  
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} role="img" aria-label="star">
        {index < roundedNote ? '★' : '☆'}
      </span>
    ));
  
    return <div>{stars}</div>;
  };
  
  export default RatingStars;