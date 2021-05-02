import React from 'react';
import Services from '../Services/Services';
import './Home.css';
import Intro from './Intro/Intro';

const Home = () => {
    return (
        <div className="header">
            <Intro></Intro>
            <Services></Services>
        </div>
    );
};

export default Home;