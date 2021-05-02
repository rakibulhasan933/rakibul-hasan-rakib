import React from 'react';
import Blog from '../Blog/Blog';

export const blogData = [
    {
        name: '10 JavaScript Topics That You Should Know - Part 1',
        img: 'https://i.ibb.co/TrrYTq0/blog1.jpg',
        description: 'Today I am going to talk about 10 JavaScript tricky topics that you must know for better learning JavaScript...',
        link: 'https://rokydas.medium.com/10-javascript-topics-that-you-should-know-270d2c289057',
    },
    {
        name: '10 JavaScript Topics That You Should Know - Part 2',
        img: 'https://i.ibb.co/xLZRQY7/blog2.jpg',
        description: 'Hello guys. I am Roky Das. I am here to share with you some important topics of JavaScript that...',
        link: 'https://rokydas.medium.com/10-javascript-topics-that-you-should-know-part-2-214570140235',
    },
    {
        name: '10 JavaScript Interview Questions',
        img: 'https://i.ibb.co/WD516mR/blog3.jpg',
        description: 'Hello, I am Roky. I am here to share some common JavaScript interview questions. So, let’s start.Null Vs Undefined...',
        link: 'https://rokydas.medium.com/10-javascript-interview-questions-d4bb05839169',
    },
];

const Blogs = () => {
    return (
        <div style={{ backgroundColor: "#1a3d5d", color: "white" }}>
            <h1 className="heading text-center pb-3 mt-5 pt-5"><span style={{ borderBottom: '5px solid #0bc2c2' }} className="">My <span style={{ color: '#0bc2c2' }}>Blogs</span></span></h1>
            <h1 className="text-center" style={{ color: 'red' }} >COMING SOON</h1>
            {/* <div className="custom-container">
                <div className="row mt-5 mb-5 ml-2 mr-2">
                    {
                        blogData.map(blog => <Blog blog={blog} />)
                    }
                </div>
            </div> */}
        </div>
    );
};

export default Blogs;