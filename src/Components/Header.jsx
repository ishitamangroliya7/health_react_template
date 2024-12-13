import React, { useEffect } from 'react';
import '../assets/css/style.css';
import logo from '../assets/logo.png';

const Header = () => {

    const handleScroll = () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        const button = document.querySelector(".navbar-toggler");
        const navOverlay = document.querySelector(".nav-overlay");
        const navbarCollapse = document.querySelector(".navbar-collapse");
        const dropdown = document.querySelector(".nav-item.dropdown");

        const toggleOverlay = () => {
            navOverlay.classList.toggle("active");
        };

        const handleOverlayClick = (event) => {
            if (event.target === navOverlay) {
                navOverlay.classList.remove("active");
                navbarCollapse.classList.remove("show");
            }
        };

        const handleDropdownMouseLeave = () => {
            const dropdownMenu = dropdown.querySelector(".dropdown-menu");
            dropdownMenu.classList.remove("show");
        };

        button.addEventListener("click", toggleOverlay);
        navOverlay.addEventListener("click", handleOverlayClick);
        dropdown.addEventListener("mouseleave", handleDropdownMouseLeave);

        // Cleanup event listeners on component unmount
        return () => {
            button.removeEventListener("click", toggleOverlay);
            navOverlay.removeEventListener("click", handleOverlayClick);
            dropdown.removeEventListener("mouseleave", handleDropdownMouseLeave);
        };
    }, []);


    return (
        <>
            <nav className="navbar navbar-expand-lg" id='navbar'>
                <div className="container-fluid">
                    <div>
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="nav-overlay"></div>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link navlink" href="#banner">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navlink" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navlink" href="#services">Services</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#pages" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#page1">Page 1</a></li>
                                    <li><a className="dropdown-item" href="#page2">Page 2</a></li>
                                    <li><a className="dropdown-item" href="#page3">Page 3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navlink" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-green header-btn">Book Session</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
