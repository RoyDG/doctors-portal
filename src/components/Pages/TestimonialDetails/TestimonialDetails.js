import React from 'react';

const TestimonialDetails = ({testimonial}) => {
    return (
        <div className= "details-container col-md-4">
            <p className="pe-5">{testimonial.quote}</p>
            <div className="d-flex my-5">
                <div>
                    <img src={testimonial.img} alt="img" />  
                </div>
                <div className="ps-4 pt-3">
                    <p className = "text-primary">{testimonial.name}</p>
                    <p>{testimonial.from}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;