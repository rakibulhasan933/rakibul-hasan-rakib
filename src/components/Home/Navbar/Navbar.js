import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Photos/logo.jpg';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light custom-navbar">
            <Link className="navbar-brand" to="/"><img width="50px" src={logo} alt="" /></Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item p-3">
                        <Link className="text-decoration-none" to="/"><h5 className="custom-nav-item mr-5 ">Home</h5></Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="text-decoration-none" to="/about"><h5 className="custom-nav-item mr-5">About Me</h5></Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="text-decoration-none" to="/portfolio"><h5 className="custom-nav-item mr-5">Portfolio</h5></Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="text-decoration-none" to="/blogs"><h5 className="custom-nav-item mr-5">Blog</h5></Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="text-decoration-none" to="/contact"><h5 className="custom-nav-item mr-5">Contact</h5></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;