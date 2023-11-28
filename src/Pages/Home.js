import Quotes from '../components/Quotes';
import RecentEvents from '../components/RecentEvents';
import UpcomingEvents from '../components/UpcomingEvents';
import habitatLogo from '../resources/HabitatLogo.jpeg';

import './stylesheets/Home.css'

function Home() {
  return (
    <>
    <img src={habitatLogo} className='logo'></img>
    <div class="flex flex-col w-full">
      <div class="grid h-full card bg-base-300 rounded-box place-items-center m-10">
        <div class="text-center">
          <p class="text-7xl m-12">
            Upcoming Events
          </p>
        </div>
        <UpcomingEvents />
      </div> 
      <div class="divider w-2/3 mx-auto"></div> 
      <div class="grid h-full card bg-base-300 rounded-box place-items-center m-10">
        <div class="text-center">
          <p class="text-7xl m-12">
            Recent Events
          </p>
        </div>
        <RecentEvents />
      </div>
      <div class="divider w-2/3 mx-auto"></div> 
      <div class="grid h-full card bg-base-300 rounded-box place-items-center m-10">
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
