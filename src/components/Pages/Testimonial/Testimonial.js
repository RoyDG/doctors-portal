import React from 'react';
import ema from '../../../images/ema.png';
import roy from '../../../images/roy.png';
import ena from '../../../images/ena.png';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';


const TestimonialData = [
    {
        quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate esse! Nostrum porro neque.',
        name:'Ema Watson',
        from:'California',
        img: ema
    },
    {
        quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate esse! Nostrum porro neque.',
        name:'Roy Will',
        from:'Texas',
        img: roy
    },
    {
        quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate esse! Nostrum porro neque deleniti.Lorem ipsum dolor sit amet consectetur adipisicing elit.!',
        name:'Ena Baron',
        from:'Florida',
        img: ena
    }
]

const Testimonial = () => {
    return (
        <section className = "testimonial my-5 py-5">
            <div className="section-header ms-5">
                <h5 className="text-primary my-3 text-uppercase">
                    Testimonials
                </h5>
                <h1>What's Our Patients <br /> Says</h1>
            </div>

            <div className= "container">          
                <div className="card-deck mt-5 row">
                    {
                        TestimonialData.map(testimonial => <TestimonialDetails 
                        testimonial = {testimonial}>
                        </TestimonialDetails> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;