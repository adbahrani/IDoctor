import React, { Component } from "react";
import Diagnosis from "./Diagnosis";
import Treatment from "./Treatment";
import './main.css';


export class NewPatient extends Component {
    static displayName = NewPatient.name;

    //incrementCounter () {
    //  this.setState({
    //    currentCount: this.state.currentCount + 1
    //  });
    //}

    render() {
        return (
            <div className="container-contact100">
                <div className="wrap-contact100">
                    <form className="contact100-form validate-form" id="myForm">
                        <span className="contact100-form-title">
                            Details
                        </span>

                        <div
                            className="wrap-input100 validate-input bg1"
                            data-validate="Please Type Your Name">
                            <span className="label-input100">FULL NAME *</span>
                            <input
                                className="input100"
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                id="fullName" />
                        </div>

                        <div className="wrap-input100 bg1 rs1-wrap-input100">
                            <span className="label-input100">Phone</span>
                            <input
                                className="input100"
                                type="text"
                                name="phone"
                                placeholder="Enter Number Phone" />
                        </div>

                        <div className="wrap-input100 bg1 rs1-wrap-input100">
                            <span className="label-input100">Age</span>
                            <input
                                className="input100"
                                type="text"
                                name="phone"
                                placeholder="Enter Age" />
                        </div>

                        <div className="wrap-input100 input100-select bg1">
                            <span className="label-input100">Needed Services *</span>
                            <div>
                                <select className="js-select2" name="service">
                                    <option>Service 1</option>
                                    <option>Service 2</option>
                                </select>
                                <div className="dropDownSelect2"></div>
                            </div>
                        </div>

                        <Diagnosis />

                        <Treatment />

                        <div className="container-form-btn">
                            <button className="form-btn">

                                Submit
                           
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}