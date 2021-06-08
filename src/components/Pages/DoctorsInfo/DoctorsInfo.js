import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DoctorsInfo = ({doctor}) => {
    return (
        <div className= "details-container col-md-4">
            <div className="d-flex my-5">
                <div>
                    <img style = {{height:'320px', width:'auto'}} src={doctor.img} alt="img" />  
                    <h5 className = "text-dark text-center">{doctor.name}</h5>
                    <div className = "d-flex justify-content-center">
                       <div className="me-2">
                            <FontAwesomeIcon className="doctor-icon" icon={doctor.icon} />
                        </div>
                        <div>
                            <p className = "text-secondary text-center">{doctor.number}</p>
                        </div> 
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default DoctorsInfo;