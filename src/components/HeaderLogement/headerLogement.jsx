import './headerLogement.css'

function HeaderLogement(props) {
    const imgStyle = { width: '100%', height: '600px', objectFit: 'cover', borderRadius: '25px' };
    return (
        <div>
            <div className='header-logement'>
                <img src={props.imgSrc} alt='Cover' style={imgStyle} />
            </div>
            <div className='header-info'>
                <div className='header-info-left'>
                    <h1>{props.titleValue}</h1>
                    <h2>{props.locationValue}</h2>
                    {props.tagsValue.map((tag, index) => (
    <h2 key={index}>{tag}</h2>
    ))}
                </div>
                <div className='header-info-right'>
                    <h2>{props.nameHost}</h2>
                    <img src={props.imgHost} alt='Avatar utilisateur' />
                    <p>{props.ratingValue}</p>
                </div>
            </div>
        </div>
    )


}

export default HeaderLogement


