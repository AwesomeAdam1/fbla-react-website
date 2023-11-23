import { Routes, Route } from 'react-router-dom';
import Donate from './Donate';
import About from './About';
import Gala from './Gala';
import Home from './Home';
import NavBar from '../Components/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/about" element={<About />} />
                <Route path="/gala" element={<Gala />} />
            </Routes>
            <div class="bg-blue-600">
                <p class="text-red-500"> 
                    abc
                </p>
            </div>
            
        </>
    );
}

export default App;