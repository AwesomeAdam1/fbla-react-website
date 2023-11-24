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
    
    if (props.pplRegistered === 'Nobody :(' || props.pplRegistered.length === 0) {
        return (
            <div className="event" style={eventStyle}>
                <div className="event-info">
                    <h1>{props.name}</h1>
                    <p className="date">{props.date}</p>
                </div>
                <div className='registration-info'>
                        <p>Number Registered: 0</p>
                        <p>People Registered: Nobody :(</p>
                </div>
            </div>
        )
    } else {

        return (
            <div className="event" style={eventStyle}>
                <div className="event-info">
                    <h1>{props.name}</h1>
                    <p className="date">{props.date}</p>
                </div>
                <div className='registration-info'>
                        <p>Number Registered: {props.pplRegistered.length}</p>

                        <div>
                            <p>People Registered</p>
                            <div className='registered-person-table'>
                                <table>
                                    {props.pplRegistered.map(person => (
                                        <tr>{person}</tr>
                                    ))}
                                </table>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Event