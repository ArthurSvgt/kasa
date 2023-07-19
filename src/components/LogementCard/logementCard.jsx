import './logementCard.css'

function LogementCard(props) {
    return (
        <div className='flex-card'>
            <h2>Description</h2>
            <p>{props.descValue}</p>
        </div>
    )
}

export default LogementCard