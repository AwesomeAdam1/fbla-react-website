// Styling
import './Stylesheets/UpcomingEvents.css'

// Component Imports
import Event from '../Components/Event'

// Event Images
import galaImg from '../Resources/GalaPhoto.jpg'
import defaultImg from '../Resources/DefaultImage.jpg'

function Events() {
    return (
        <>
            <h1 class="text-3xl">Upcoming Events</h1>

            <Event
                name='Gala'
                imgSrc={galaImg}
                date='12/31/2023'
            />
            
            <Event
                name='Fall Festival'
                imgSrc={defaultImg}
                date='11/27/2023'
            />
        </>
    );
}

export default Events;