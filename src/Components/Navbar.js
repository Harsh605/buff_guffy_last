import React, { useState } from 'react';
import './Navbar.css';
import Brand from "../brand2.png"

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const handleLinkClick = () => {
    if (isNavbarOpen) {
      setNavbarOpen(false);
    }
  };

  return (
    <header className="banner">
      <div className="container">
        <nav className="nav-primary navbar navbar-expand-lg justify-content-center">
          <button className="navbar-toggler p-0 " type="button" onClick={toggleNavbar}>
            <i style={{ color: "rgb(241, 85, 44)" }} className="fa-solid fa-bars fs-4"></i>
          </button>
          <div className={`navbar-collapse offcanvas-collapse ${isNavbarOpen ? 'show' : ''}`}>
            <ul id="menu-main"  className={`navbar-nav h-[100vh] lg:h-auto align-items-center justify-content-${isNavbarOpen ? 'center' : 'around'} w-100`}>
              <li id="menu-item-26" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26 nav-item">
                <a href="#ecosystem" title="Ecosystem" className={`nav-link no-underline ${isNavbarOpen ? 'text-black' : 'text-white'}`} onClick={handleLinkClick}>Ecosystem</a>
              </li>
              <li id="menu-item-27" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27 nav-item">
                <a href="#howToBuy" title="How to Buy" className={`nav-link ${isNavbarOpen ? 'text-black' : 'text-white'}`} onClick={handleLinkClick}>How to Buy</a>
              </li>
              <li id="menu-item-28" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28 nav-item">
                <a href="#roadmap" title="Roadmap" className={`nav-link ${isNavbarOpen ? 'text-black' : 'text-white'}`} onClick={handleLinkClick}>Roadmap</a>
              </li>
              <li id="menu-item-32" className="LOGO menu-item menu-item-type-custom menu-item-object-custom menu-item-32 nav-item">
                <a href="#" className={`nav-link menu-image-title-after menu-image-not-hovered ${isNavbarOpen ? 'text-black' : 'text-white'}`} onClick={handleLinkClick}>
                  <img width="123"  src={Brand} className="menu-image menu-image-title-after" alt="" loading="lazy" />
                  <span className="menu-image-title-after menu-image-title"></span>
                </a>
              </li>
              <li id="menu-item-142" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-142 nav-item">
                <a href='#blockchains' title="BLOCKCHAINS"  className={`nav-link ${isNavbarOpen ? 'text-black' : 'text-white'}`} onClick={handleLinkClick}>BLOCKCHAINS</a>
              </li>
              <li id="menu-item-30" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-30 nav-item">
                <a href="#tokenomics" title="Community" className={`nav-link ${isNavbarOpen ? 'text-black' : 'text-white'}`} onClick={handleLinkClick}>Tokenomics</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
