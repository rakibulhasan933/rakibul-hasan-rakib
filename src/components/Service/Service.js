import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description } = service;
    return (
        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-xm-12 d-flex justify-content-center mb-3" data-aos="fade-up" data-aos-duration="1000">
            <div className="card service">
                <img className="card-img-top border" height="300px" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;