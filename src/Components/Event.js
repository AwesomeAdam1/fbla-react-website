import DefaultImage from '../Resources/GalaPhoto.jpg'

function Event(props) {
    return (
        <>
            <h1>{props.name}</h1>
            {props.img}
            
            <section id="registered">
                <h2>Number of People Registered: {props.numRegistered}</h2>
            </section>

        </>
    )

    Event.defaultProps = {
        name: Event,
        img: DefaultImage,
        numRegistered: '0'
    }
}

export default Event