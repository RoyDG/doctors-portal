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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique praesentium impedit corporis qui minus voluptates cumque sit minima doloribus sint inventore quia saepe ipsa, cupiditate quis architecto labore nostrum?
                        </p>
                        <button className = "btn btn-info">Learn More</button>
                    </div>
                </div>
                
            </div>
            
                
            
        </section>
        
    );
};

export default FeaturedService;