import { Routes, Route } from 'react-router-dom';
import Donate from './Donate';
import About from './About';
import Gala from './Gala';
import NavBar from '../Components/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/donate" element={<Donate />} />
                <Route path="/about" element={<About />} />
                <Route path="/gala" element={<Gala />} />
            </Routes>
        </>
    );
}

export default App;