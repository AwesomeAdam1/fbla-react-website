import React from 'react'

function EventForm(props) {
    return(
        <section className='EventForm' style={{display: props.displayStatus}}>
            <form>
                <label>
                    Name: <input type='text' />
                </label>
                <label>
                    Phone Number: <input type='number' />
                </label>
                <label>
                    Email: <input type='email' />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default EventForm