import Quotes from '../Components/Quotes';
import RecentEvents from '../Components/RecentEvents';
import UpcomingEvents from '../Components/UpcomingEvents';
import habitatLogo from '../Resources/HabitatLogo.jpeg';

import './Stylesheets/Home.css'

function Home() {
  return (
    <>
    <img src={habitatLogo} className='logo'></img>
    <div class="flex flex-col w-full">
      <div class="grid h-full card bg-base-300 rounded-box place-items-center m-10">
        <div class="text-center">
          <p class="text-5xl m-12">
            Upcoming Events
          </p>
        </div>
        <UpcomingEvents />
      </div> 
      <div class="divider w-2/3 mx-auto"></div> 
      <div class="grid h-full card bg-base-300 rounded-box place-items-center m-10">
        <div class="text-center">
          <p class="text-5xl m-12">
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
