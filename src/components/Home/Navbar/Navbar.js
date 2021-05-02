import React from 'react';
import logo from '../../../Photos/logo.jpg';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light custom-navbar">
            <a className="navbar-brand" href="/"><img width="50px" src={logo} alt="" /></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item p-3">
                        <a className="text-decoration-none" href="/"><h5 className="custom-nav-item mr-5 ">Home</h5></a>
                    </li>
                    <li className="nav-item p-3">
                        <a className="text-decoration-none" href="/about"><h5 className="custom-nav-item mr-5">About Me</h5></a>
                    </li>
                    <li className="nav-item p-3">
                        <a className="text-decoration-none" href="/portfolio"><h5 className="custom-nav-item mr-5">Portfolio</h5></a>
                    </li>
                    <li className="nav-item p-3">
                        <a className="text-decoration-none" href="/blogs"><h5 className="custom-nav-item mr-5">Blog</h5></a>
                    </li>
                    <li className="nav-item p-3">
                        <a className="text-decoration-none" href="/contact"><h5 className="custom-nav-item mr-5">Contact</h5></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;