import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../images/doctor.png'

const MakeAppointment = () => {
    return (
        <section className = "make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="doctor" />
                    </div>
                    <div className=" appointment-details col-md-7 py-5 px-5">
                        <h5 className="text-info text-uppercase">
                            APPOINTMENT
                        </h5>
                        <h1 className="my-4 text-white">
                            Make an Appointment <br /> Today
                        </h1>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates deserunt quidem at labore amet eum rerum maxime itaque reprehenderit recusandae!
                        </p>
                        <button className="btn btn-info">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;