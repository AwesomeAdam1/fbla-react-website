// React Import
import React, { useState } from 'react'

// FontAwesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

// Firebase Imports
import { doc, setDoc, updateDoc, addDoc, collection, arrayUnion} from 'firebase/firestore'
import { db } from '../firebase-config'

const EventForm = (props) => {
    const displayStatus = props.displayStatus
    const handleClick = props.handleClick
    const event = props.event

    const [nameInput, setNameInput] = useState('')
    const [phoneInput, setPhoneInput] = useState('')
    const [emailInput, setEmailInput] = useState('')

    function nameInputHandler(e) {
        setNameInput(e.target.value)
    }
    function phoneInputHandler(e) {
        setPhoneInput(e.target.value)
    }
    function emailInputHandler(e) {
        setEmailInput(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        if (nameInput) {
                setDoc(doc(db, props.event, nameInput), {
                name: nameInput,
            })
            setNameInput('')
        }
        const newDoc = doc(db, props.event, nameInput)
        if (phoneInput) {
            updateDoc(newDoc, {
                phone: phoneInput,        
            })
            setPhoneInput('')
        }
        if (emailInput) {
            updateDoc(newDoc, {
                email: emailInput
            })
            setEmailInput('')
        }

        handleClick()
    }

    return(
        <section className='EventForm' style={{display: displayStatus}}>
            <FontAwesomeIcon icon={ faXmark } className='x' onClick={handleClick}/>
            <h1>Register for {event}</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name: </label>
                    <input type='text' placeholder='John Doe' value={nameInput} onChange={nameInputHandler}/>
                </div>

                <div>
                    <label>Phone Number: </label>
                    <input type='tel' placeholder='(123) 456-7890' value={phoneInput} onChange={phoneInputHandler}/>
                </div>

                <div>
                    <label>Email: </label>
                    <input type='email' placeholder='example@example.com' value={emailInput} onChange={emailInputHandler}/>
                </div>
                <button type='submit' className='submit'>Submit</button>
            </form>
        </section>
    )
}

export default EventForm