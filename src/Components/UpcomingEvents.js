import galaImg from '../Resources/GalaPhoto.jpg'
import defaultImg from '../Resources/DefaultImage.jpg'

function UpcomingEvents(){
  return (
    <div class="text-center">
      <div className="carousel w-1/2 h-96 m-5 rounded-2xl aspect-video">
        <div id="slide1a" className="carousel-item relative w-full">
          <img src={galaImg} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4a" className="btn btn-circle">❮</a> 
            <a href="#slide2a" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2a" className="carousel-item relative w-full">
          <img src={defaultImg} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1a" className="btn btn-circle">❮</a> 
            <a href="#slide3a" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3a" className="carousel-item relative w-full">
          <img src={defaultImg}  className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2a" className="btn btn-circle">❮</a> 
            <a href="#slide4a" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4a" className="carousel-item relative w-full">
          <img src={defaultImg} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3a" className="btn btn-circle">❮</a> 
            <a href="#slide1a" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  )   
}

export default UpcomingEvents;