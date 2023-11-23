import { Routes, Route } from 'react-router-dom';
import Donate from './Pages/Donate';
import About from './Pages/About';
import Gala from './Pages/Gala';
import NavBar from './Components/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/donate" element={<Donate />} />
                <Route path="/about" element={<About />} />
                <Route path="/gala" element={<Gala />} />
            </Routes>
            <Gala />
        </>
        
    );
}

export default App;