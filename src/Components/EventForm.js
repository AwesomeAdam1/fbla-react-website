import React from 'react'

// FontAwesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function EventForm(props) {
    return(
        <section className='EventForm' style={{display: props.displayStatus}}>
            <FontAwesomeIcon icon={ faXmark } className='x' onClick={props.handleClick}/>
            <h1>Register for {props.event}</h1>
            <form>
                <div>
                    <label>Name: </label>
                    <input type='text' placeholder='John Doe'/>
                </div>

                <div>
                    <label>Phone Number: </label>
                    <input type='number' placeholder='(123) 456-7890'/>
                </div>

                <div>
                    <label>Email: </label>
                    <input type='email' placeholder='example@example.com'/>
                </div>
                <button type='submit' className='submit'>Submit</button>
            </form>
        </section>
    )
}

export default EventForm