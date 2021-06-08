import React from 'react';
import care from '../../../images/care.png';

const FeaturedService = () => {
    return (
        <section  className = "featured-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img  className="img-fluid" src={care} alt="care" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>
                            Exceptional Dental <br /> Care, on Your Terms
                        </h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos repudiandae mollitia iure fugiat odit cupiditate consequatur quos, culpa recusandae dolore dignissimos nesciunt maxime magni temporibus esse deserunt explicabo magnam totam hic ex! Assumenda repellat numquam animi voluptas quod laboriosam voluptatum sunt ad quaerat unde accusantium tenetur praesentium temporibus nobis quibusdam corporis libero sequi ipsum quisquam iste dolorem, blanditiis earum molestias enim! Provident neque nihil, magnam temporibus molestiae ad, eius ipsa amet delectus error veritatis eveniet maxime facere quidem consectetur. Illo!
                        </p>
                        <button className = "btn btn-info">Learn More</button>
                    </div>
                </div> 
            </div>   
        </section>
        
    );
};

export default FeaturedService;