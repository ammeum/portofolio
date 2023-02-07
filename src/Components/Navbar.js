import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/Graphic">Graphic design</Link>
            <Link to="/Web">Web</Link>
            <Link to="/about">Other</Link>
        </nav>
    )
}

export default Navbar;