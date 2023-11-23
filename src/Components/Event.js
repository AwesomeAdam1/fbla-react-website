import DefaultImage from '../Resources/DefaultImage.jpg'

function Event(props) {
    Event.defaultProps = {
        name: 'Event',
        imgSrc: {DefaultImage},
        numRegistered: '0',
        pplRegistered: 'Nobody :('
    }
    
    return (
        <div className='Event'>
            <h1>{props.name}</h1>
            <img src={props.imgSrc} />
            
            <section id="registered">
                <h2>Number of People Registered: {props.numRegistered}</h2>
                <h3>People Registered for this Event: {props.pplRegistered}</h3>
            </section>
        </div>
    )
}

export default Event