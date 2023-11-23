// Styling
import './Stylesheets/UpcomingEvents.css'

// Component Imports
import Event from '../Components/Event'

// Event Images
import galaImg from '../Resources/GalaPhoto.jpg'

function Events() {
    return (
        <>
            <h1>Upcoming Events</h1>

            <Event name='Gala' imgSrc={galaImg} numRegistered='500' pplRegistered='Person 1, Person 2, Person 3'/>
            <Event />
            <Event />
            <Event />
            <Event />
        </>
    );
}

export default Events;