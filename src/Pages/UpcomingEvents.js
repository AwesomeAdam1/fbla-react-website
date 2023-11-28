// Styling
import './stylesheets/UpcomingEvents.css'

// Component Imports
import Event from '../components/Event'

// Event Images
import galaImg from '../resources/GalaPhoto.jpg'
import defaultImg from '../resources/DefaultImage.jpg'

function Events() {
    return (
        <>
            <h1>Upcoming Events</h1>

            <Event
                name='Gala'
                imgSrc={galaImg}
                date='12/31/2023'
                pplRegistered={['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5']}
            />
            
            <Event
                name='Fall Festival'
                imgSrc={defaultImg}
                date='11/27/2023'
                pplRegistered={['Person 1', 'Person 2']}
            />

            <Event />
            <Event />
            <Event />
        </>
    );
}

export default Events;