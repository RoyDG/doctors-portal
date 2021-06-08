import React from 'react';

const BlogInfo = ({blog}) => {
    return (
        <div className= "details-container col-md-4">
            <div className="d-flex my-5">
                <div>
                    <img src={blog.img} alt="img" />  
                </div>
                <div className="ps-4 pt-3">
                    <p className = "text-primary">{blog.name}</p>
                    <p className = "text-secondary">{blog.date}</p>
                </div>
            </div>
            <h5>{blog.title}</h5>
            <p className="pe-5 text-secondary">{blog.desc}</p>
            
        </div>
    );
};

export default BlogInfo;