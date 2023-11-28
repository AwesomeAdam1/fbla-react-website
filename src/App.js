import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Donate from './pages/Donate';
import About from './pages/About';
import UpcomingEvents from './pages/UpcomingEvents';
import NavBar from './components/NavBar';

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