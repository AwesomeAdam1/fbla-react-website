import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Donate from './Pages/Donate';
import About from './Pages/About';
import UpcomingEvents from './Pages/UpcomingEvents';
import NavBar from './Components/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/about" element={<About />} />
                <Route path="/upcomingevents" element={<UpcomingEvents />} />
            </Routes>
        </>
        
    );
}

export default App;