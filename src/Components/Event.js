// React Imports
import React, { useState, useEffect } from 'react'

// Component Import
import EventForm from './EventForm'

// Firebase Imports
import { doc, addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config'

function Event(props) {
    // Create Firebase docs
    const createEventDoc = async (personName) => {
        await addDoc(collection(db, props.name, props.personName), {
            personName: props.personName,
        })
    }

    function createEventDocs() {
        props.pplRegistered.foreach(person => {
            createEventDoc(person)
        })
    }

    // Styling
    const eventStyle = {
        backgroundImage: `url(${props.imgSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '20rem',
        backgroundPosition: 'center'
    }

    // EventForm Display Status
    const [displayStatus, setDisplayStatus] = useState('none')

    function handleClick() {
        setDisplayStatus(prevStatus => (prevStatus === 'none' ? 'block' : 'none'))
    }

    // Firebase Stuff
    const[registeredPeople, setRegisteredPeople] = useState([])
    const[name, setName] = useState("")

    const eventCollectionRef = collection(db, props.name)

    useEffect(() => {
        const getRegisteredPeopleData = async () => {
            const data = await getDocs(eventCollectionRef)
            setRegisteredPeople(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
        }
        
        getRegisteredPeopleData()
    }, [])

    // Return Statements
    if (registeredPeople.length === 0) {
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
                            <p>Number Registered: {registeredPeople.length}</p>
                            <button className='event-registration-button' onClick={handleClick}>Register for {props.name}</button>
                        </div>

                        <div>
                            <p>People Registered</p>
                            <div className='registered-person-table'>
                                <table>
                                    {registeredPeople.map(person => {
                                        return <tr>{person.name}</tr>
                                    })}
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
}

export default Event