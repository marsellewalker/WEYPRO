// Import necessary React components and styles
import { useState } from "react";
import { Link } from "react-router-dom";
// Functional component for the header
const Header2 = () => {
  // State to track the visibility of the menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="c">
      
      {/* Render hamburger menu icon when screen width is 600px or less */}
          <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-line ${isMenuOpen ? "open" : ""}`}></div>
        </div>
      
      {/* Render menu items */}
      <div className={`menu-items ${isMenuOpen ? "open" : ""}`}>
        <header>
          <div>
            <nav className="nav2">
              <a>
                <Link to="/" className="linkStyle">Home</Link>
              </a>
              <a>
                <Link to="/Gallery" className="linkStyle">Gallery</Link>
              </a>
              <a>
                <Link to="/Contact" className="linkStyle">Contact</Link>
              </a>
              <a>
                <Link to="/About" className="linkStyle">About</Link>
              </a>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header2;
