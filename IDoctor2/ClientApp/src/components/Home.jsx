import React, { Component } from 'react';
//import {Link } from 'reactstrap';
import { Link } from 'react-router-dom';
import './main.css';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>

                <div className="container-contact100">
                    <div className="wrap-contact100">
                        <form className="contact100-form validate-form">
                            <span className="contact100-form-title">
                                IDoctor
                      </span>

                            <div
                                className="wrap-input100 validate-input bg1"
                                data-validate="Please Type Your Name"
                            >
                                <span className="label-input100">FULL NAME *</span>
                                <input
                                    className="input100"
                                    type="text"
                                    id="fullName"
                                    name="name"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <Link to="/counter" className="container-form-btn">
                    

                                    <button className="form-btn" id="search" >
                                        <span>
                                            Submit
                                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </span>
                                    </button>

                    
                            </Link >
                            <Link to="/NewPatient" className="container-form-btn">
                                <button className="form-btn" id="new">
                                    <span>
                                        New Patient
                                  <i className="fa fa-plus" aria-hidden="true"></i>
                                    </span>
                                </button>

                        </Link >
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
