import { Routes, Route } from 'react-router-dom';
import Donate from './Donate';
import About from './About';
import Events from './Events';
import NavBar from './NavBar';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/donate" element={<Donate />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </>
        
    );
}

export default App;