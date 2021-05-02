import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import logo from '../../Photos/rakibul.JPG';
import './About.css';
import Social from '../Social/Social';
import { Badge } from '@material-ui/core';

const About = () => {
    const expertise = ['React JS', 'React Router', 'React Bootstrap', 'Material UI', 'HTML5', 'CSS3', 'Bootstrap4', 'JavaScript', 'React Spring'];
    const comfortable = ['Redux', 'Node', 'MongoDB'];
    const tools = ['Git', 'VS Code', 'Visual Studio', 'Chrome Dev Tools', 'Heroku', 'Netlify', 'Firebase'];
    return (
        <div style={{ backgroundColor: "#1a3d5d", color: "white" }}>
            <Navbar />
            <div className="custom-container">
                <div className="img-container text-center mt-5 pt-5">
                    <img width="250px" className="img-fluid about-pic" src={logo} alt="" />
                </div>
                <div className="details text-center">
                    <h1 className="heading pb-3 mt-3"><span style={{ borderBottom: '5px solid green' }} className="">I'm <span style={{ color: 'green' }}>RAKIBUL HASAN</span></span></h1>
                    <p>I am JavaScript developer with knowing some framework for the frontend and the backend. I am a MERN developer. I always focus on learning new technology.</p>
                </div>
                <div className="text-center">
                    <Social />
                </div>
                <div className="row mt-5 pt-5 mb-5">
                    <div className="col-md-12 ">
                        <h1 className="heading text-center pb-3"><span style={{ borderBottom: '5px solid #0bc2c2' }} className="">My <span style={{ color: '#0bc2c2' }}>Skills</span></span></h1>
                        <ul>
                            <li>
                                <h4 className="mt-3 mb-3" style={{ color: '#0bc2c2' }}>Expertise:</h4>
                                {
                                    expertise.map(skill => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{skill}</Badge></h5>)
                                }
                            </li>
                            <li>
                                <h4 className="mt-3 mb-3" style={{ color: '#0bc2c2' }}>Comfortable:</h4>
                                {
                                    comfortable.map(skill => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{skill}</Badge></h5>)
                                }
                            </li>
                            <li>
                                <h4 className="mt-3 mb-3" style={{ color: '#0bc2c2' }}>Tools & Softwares:</h4>
                                {
                                    tools.map(skill => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{skill}</Badge></h5>)
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;