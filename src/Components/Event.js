// React Imports
import React, {useState} from 'react'

// Component Import
import EventForm from './EventForm'

// Firebase Imports
import { doc, addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'

function Event(props) {
    // Create Firebase doc
    const createEventDoc = async (personName) => {
        await addDoc(collection(db, props.name, props.personName), {
            personName: props.personName,
        })
    }

    function createEventDocs() {
        props.pplRegistered.foreach(person => {
            createEventDocs(person)
        })
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

                <EventForm displayStatus={displayStatus} event={props.name} handleClick={handleClick}/>
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

                <EventForm displayStatus={displayStatus} event={props.name} handleClick={handleClick}/>
            </div>
        )
    }
}

Event.defaultProps = {
    name: 'Event',
    date: 'DD/MM/YYYY',
    numRegistered: '0',
    pplRegistered: 'Nobody :('
}

export default Event