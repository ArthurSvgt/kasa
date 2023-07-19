import './thumb.css'



function Card(props) {
    const divStyle = {
        backgroundImage: 'url(' + props.imgValue + ')',
      };
    const title = props.titleValue
        return <div className='loc-square' style={divStyle}>
                <h2 className='loc-title'>{title}</h2>
    </div>
}



export default Card