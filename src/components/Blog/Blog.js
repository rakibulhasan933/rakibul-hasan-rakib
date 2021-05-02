import React from 'react';

const Blog = ({ blog }) => {
    const { name, img, description, link } = blog;
    return (
        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-xm-12 d-flex justify-content-center mb-3">
            <a href={link} target="blank">
                <div class="card blog" data-aos="zoom-out">
                    <img className="card-img-top border" style={{ height: '300px' }} src={img} />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Blog;