import React, {useState} from 'react'
import EventForm from './EventForm'

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

    const [displayStatus, setDisplayStatus] = useState('none')

    function handleClick() {
        setDisplayStatus(prevStatus => (prevStatus === 'none' ? 'block' : 'none'))
    }

    if (props.pplRegistered === 'Nobody :(' || props.pplRegistered.length === 0) {
        return (
            <div className="event" style={eventStyle}>
                <div className="event-info">
                    <h1>{props.name}</h1>
                    <p className="date">{props.date}</p>
                </div>

                <div className='registration-info'>
                    <div>
                        <p>Number Registered: 0</p>
                        <button className='event-registration-button' onClick={handleClick}>Register for {props.name}</button>
                    </div>
                    <p>People Registered: Nobody :(</p>
                </div>

                <EventForm displayStatus={displayStatus}/>
            </div>
        )
    } else {

        return (
            <div className="event" style={eventStyle}>
                <section className="event-info">
                    <h1>{props.name}</h1>
                    <p className="date">{props.date}</p>
                </section>

                <section className='registration-info'>
                        <div>
                            <p>Number Registered: {props.pplRegistered.length}</p>
                            <button className='event-registration-button' onClick={handleClick}>Register for {props.name}</button>
                        </div>

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
                </section>

                <EventForm displayStatus={displayStatus}/>
            </div>
        )
    }
}

export default Event