import React from 'react';
import Social from '../../Social/Social';
import Rakibul from '../../../Photos/rakibul.JPG';
import './Intro.css';

const Intro = () => {
    return (
        <div className="d-flex align-items-center intro">
            <div className="row">
                <div className="col-md-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 d-flex align-items-center" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <div >
                        <h1 className="intro-description">Hello, <br /> I am <span style={{ color: 'black' }}>Rakibul Hasan</span></h1>
                        <h4>
                            Front End Developer",<br /> "React Developer"
                        </h4>
                        <p>I am  JavaScript developer with knowing some framework for the frontend and the backend. I know a MERN developer. </p>
                        <Social />
                        <a href="https://drive.google.com/file/d/1AkimUeiAuahd0hRXVurl95EzB2ZA_B37" target="blank"><button className="custom-btn">Resume</button></a>
                    </div>
                </div>
                <div className="col-md-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" data-aos="zoom-in-up">
                    <div className="intro-img text-center">
                        <img width="100%" className="img-fluid" src={Rakibul} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;