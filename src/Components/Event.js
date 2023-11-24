function Event(props) {
    Event.defaultProps = {
        name: 'Event',
        date: 'DD/MM/YYYY',
        numRegistered: '0',
        pplRegistered: 'Nobody :('
    }

    const eventStyle = {
        backgroundImage: `url(${props.imgSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '20rem',
        backgroundPosition: 'center'
    }
    
    return (
        <div className="event" style={eventStyle}>
            <div className="event-info">
                <h1>{props.name}</h1>
                <p className="date">{props.date}</p>
            </div>
            <div className='registration-info'>
                    <p>Number Registered: {props.numRegistered}</p>
                    <p>People Registered: {props.pplRegistered}</p>
            </div>
        </div>
    )
}

export default Event