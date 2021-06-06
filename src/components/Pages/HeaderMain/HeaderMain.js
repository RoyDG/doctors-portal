import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style = {{height: '600px'}} className = "row d-flex align-items-center">
            <div className = "col-md-4 offset-md-1">
                <h1>Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum vitae officiis saepe, in nam labore fugiat adipisci itaque corporis voluptate nostrum asperiores, eveniet dolores?
                </p>
                <button className="btn btn-info">
                        GET APPOINTMENT
                </button>
            </div>
            <div className="div col-md-6">
                <img src={chair} alt="chair" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;