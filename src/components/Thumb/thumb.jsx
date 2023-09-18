import './thumb.css'



function Card(props) {
    const divStyle = {
        backgroundImage: ' linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(' + props.imgValue + ')',
      };
    const title = props.titleValue
        return <div className='loc-square' style={divStyle}>
                <h2 className='loc-title'>{title}</h2>
    </div>
}



export default Card