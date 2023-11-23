import DefaultImage from '../Resources/GalaPhoto.jpg'

function Event(props) {
    return (
        <>
            <h1>{props.name}</h1>
            {props.img}

        </>
    )

    Event.defaultProps = {
        name: Event,
        img: DefaultImageSrc
    }
}

export default Event