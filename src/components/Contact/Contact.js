import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router';


emailjs.init("user_oz15Tk6nWHeMHzXbS2WJo");

const Contact = () => {
    const history = useHistory();

    const [userInfo, setUserInfo] = useState({});

    const handleSubmit = (e) => {

        e.preventDefault();

        emailjs.send('rakibulmd933', 'template_2eqgegn', userInfo)
            .then((response) => {
                history.replace('/');
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message is sent  successfully');
            }, (err) => {
                console.log('FAILED...', err);
                alert('Something went wrong. Please try again later');
            });
    }

    const handleBlur = (e) => {
        const newUserInfo = { ...userInfo };
        newUserInfo[e.target.name] = e.target.value;
        setUserInfo(newUserInfo);
    }
    return (
        <div style={{ backgroundColor: "green", color: "white", height: '1000px' }}>
            <h1 className="heading text-center pb-3 pt-5 mt-5"><span style={{ borderBottom: '5px solid #0bc2c2' }} className="">Contact <span style={{ color: '#0bc2c2' }}>With Me</span></span></h1>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                    <h5>Your Name</h5>
                    <input onBlur={handleBlur} name="from_name" type="text" className="form-control" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                    <h5>Your Email address</h5>
                    <input onBlur={handleBlur} type="email" name="from_email" className="form-control" placeholder="Email" required />
                </div>
                <div className="form-group p-5">
                    <h5>Your Message</h5>
                    <textarea onBlur={handleBlur} rows="5" name="message" type="text" className="form-control" placeholder="Message" required />
                </div>
                <button type="submit" className="custom-btn ">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;