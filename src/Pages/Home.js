import Quotes from '../Components/Quotes';
import Slideshow from '../Components/Slideshow';

function Home() {
  return (
    <>
    <div class="flex flex-col w-full">
      <div class="grid h-full card bg-base-300 rounded-box place-items-center">
        <div class="text-center">
          <p class="text-7xl m-12">
            Recent Events
          </p>
        </div>
        <Slideshow />
      </div> 
      <div class="divider"></div> 
      <div class="grid h-full card bg-base-300 rounded-box place-items-center">
        <div class="text-center">
          <p class="text-7xl m-12">
            Upcomming Events
          </p>
        </div>
        <Slideshow />
      </div>
      <div class="divider"></div> 
      <div class="grid h-full card bg-base-300 rounded-box place-items-center">
      <div class="text-center">
          <p class="text-5xl m-12">
            Volunteer Quotes
          </p>
        </div>
        <Quotes />
      </div>
    </div>
    </>   
  );
}

export default Home;
