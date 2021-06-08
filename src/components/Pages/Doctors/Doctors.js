import React from 'react';
import doctor from '../../../images/doctor.png';
import DoctorsInfo from '../DoctorsInfo/DoctorsInfo';
import {  faPhone } from '@fortawesome/free-solid-svg-icons';

const doctorsData = [
    {
        img: doctor,
        name:'Dr. porter rodriguez',
        icon:faPhone,
        number:'+61 635 857 635'
    },
    {
        img: doctor,
        name:'Dr. petter wills',
        icon:faPhone,
        number:'+61 536 857 635'
    },
    {
        img: doctor,
        name:'Dr. Roy Jonson',
        icon:faPhone,
        number:'+61 122 321 765'
    },
]

const Doctors = () => {
    return (
        <section className = "doctors my-5 py-5">
            <h5 className="text-info text-center text-uppercase">
                    OUR DOCTORS
                </h5>
          <div className= "container">         
                <div className="card-deck mt-5 row">
                    {
                        doctorsData.map(doctor => 
                            <DoctorsInfo 
                                doctor = {doctor}>
                            </DoctorsInfo>
                        
                         )
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;