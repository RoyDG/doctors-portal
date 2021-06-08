import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
      <section className="contact">
        <div className="container">
          <div className="contact-header text-center">
            <h5 className="text-info my-3 text-uppercase">CONTACT US</h5>
            <h1 className = "text-white">Always Connect With Us</h1>
          </div>
          <div className="container row justify-content-center">
            <div className="w-75">
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                ></label>
                <div>
                  <input
                    style={{ height: "80px" }}
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email address"
                  ></input>
                </div>
                <label
                  for="exampleFormControlInput2"
                  className="form-label"
                ></label>
                <div>
                  <input
                    style={{ height: "80px" }}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Subject"
                  ></input>
                </div>
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  className="form-label"
                ></label>
                <textarea
                  style={{ height: "200px" }}
                  className="form-control"
                  placeholder="Message"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="my-3 row justify-content-center">
                <button type="submit" className="btn btn-info w-25 text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Contact;