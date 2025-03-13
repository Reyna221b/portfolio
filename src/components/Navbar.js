import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Function to toggle menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav ref={menuRef}>
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navbar Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <div className={`tab ${location.pathname === "/" ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <div className="tab-preview">
            <img
              src={isDarkMode ? "/images/HD.png" : "/images/HL.png"}
              alt="Home Preview"
            />
          </div>
        </div>
        <div className={`tab ${location.pathname === "/about" ? "active" : ""}`}>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <div className="tab-preview">
            <img
              src={isDarkMode ? "/images/AD.png" : "/images/AL.png"}
              alt="About Preview"
            />
          </div>
        </div>
        <div className={`tab ${location.pathname === "/projects" ? "active" : ""}`}>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <div className="tab-preview">
            <img
              src={isDarkMode ? "/images/PD.png" : "/images/PL.png"}
              alt="Projects Preview"
            />
          </div>
        </div>
        <div className={`tab ${location.pathname === "/contact" ? "active" : ""}`}>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="tab-preview">
            <img
              src={isDarkMode ? "/images/CD.png" : "/images/CL.png"}
              alt="Contact Preview"
            />
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: isDarkMode ? '#fff' : '#333',
          color: isDarkMode ? '#333' : '#fff',
          padding: '5px',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '50%',
          fontSize: '1.2rem',
        }}
      >
        {isDarkMode ? "☀️" : "🌜"}
      </button>
    </nav>
  );
};

export default Navbar;