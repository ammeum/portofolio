import './App.scss';
import Navbar from './Components/Navbar';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Graphic from './pages/Graphic';
import Home from './pages/Home';
import Web from './pages/Web';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="graphic" element={<Graphic />} />
        <Route path="web" element={<Web />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
