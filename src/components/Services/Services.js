import React from 'react';
import Service from '../Service/Service';
const serviceData = [
    {
        name: 'PSD to HTML',
        img: 'https://i.ibb.co/RNctVDJ/pds.png',
        description: 'I can covert any PSD design to a responsive webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it.',
    },
    {
        name: 'Web Design',
        img: 'https://i.ibb.co/B3zHz2b/gjkliu.jpg',
        description: 'I am  web designer.I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works below',
    },
    {
        name: 'MERN Stack Web Development',
        img: 'https://i.ibb.co/25wkhFB/download.png',
        description: 'I am a MERN stack Web Developer. I use MongoDB for database and Express JS, Node Js for server side work.',
    },
];

const Services = () => {
    return (
        <div className="custom-container services">
            <h1 className="heading text-center pb-3"><span style={{ borderBottom: '5px solid #0bc2c2' }} className="">Those <span style={{ color: '#0bc2c2' }}>I Provide</span></span></h1>
            <div className="row mt-5 mb-5 ml-2 mr-2">
                {
                    serviceData.map(service => <Service service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;