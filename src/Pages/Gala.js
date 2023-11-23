import Event from '../Components/Event'

// Event Images
import galaImg from '../Resources/GalaPhoto.jpg'

function Events() {
    return (
        <>
            <Event name='Gala' imgSrc={galaImg} numRegistered='500' pplRegistered='Person 1, Person 2, Person 3'/>
            <Event />
            <Event />
            <Event />
            <Event />
        </>
    );
}

export default Events;