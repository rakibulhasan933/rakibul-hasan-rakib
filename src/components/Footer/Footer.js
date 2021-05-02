import React from 'react';
import Social from '../Social/Social';
import './Footer.css';

const Footer = () => {
    return (
        <div className="mt-5 footer text-center d-flex align-items-center">
            <div className="m-auto">
                <p className="text-white">Copyright © <span>{new Date().getFullYear()}</span> | rakibulhasan</p>
                <h6 className="text-white pb-3">Address: Bhurugamari, Kurigram, Rangpur, Bangladesh.</h6>
                <Social />
            </div>
        </div>
    );
};

export default Footer;