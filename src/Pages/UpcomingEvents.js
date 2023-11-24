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

            <Event name='Gala' imgSrc={galaImg} date='12/31/2023' numRegistered='500' pplRegistered={['Adam Wang', 'Vipul Bansal', 'Jesse Lan', 'Arnav Singh', 'Harry Le']}/>
            <Event />
            <Event />
            <Event />
            <Event />
        </>
    );
}

export default Events;