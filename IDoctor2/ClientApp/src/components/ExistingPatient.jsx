import React, { Component } from "react";
import $ from "jquery"
import Diagnosis from "./Diagnosis";
import Treatment from "./Treatment";
import moment from 'moment'

import './main.css';


export class ExistingPatient extends Component {
   

    state = {
        existingPatient: [
            { id: 1, value: "4321" },
            { id: 2, value: "123" }
        ]
    };




    componentDidMount() {
        const urlParams = new window.URLSearchParams(window.location.search);
        const myParam = urlParams.get("name");

        $("#fullName").val(myParam);
    }


    addDiagnosis() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    handleClick() {

        var timeSnapShot = moment().format("DD/MM/YY  HH:MM:SS");
        var data = $("#myForm").serializeArray();

        var savedForms = JSON.parse(localStorage.getItem("savedForms"));


        let currentFrom = {
            formName: data[0].value,
            formData: data,
            formTime: timeSnapShot
        };


        if (!savedForms) {
            localStorage.setItem("savedForms", JSON.stringify([]));
            savedForms = JSON.parse(localStorage.getItem("savedForms"));
        }

        savedForms.push(currentFrom);

        localStorage.setItem("savedForms", JSON.stringify(savedForms));

        var storedNames = JSON.parse(localStorage.getItem("savedForms"));

        console.log(storedNames);
    }


    render() {
        return (
            <div className="container-contact100">
                <div className="wrap-contact100">
                    <form className="contact100-form" id="myForm">

                        <span className="contact100-form-title">
                            Existing
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
                                id="fullName"/>
                        </div>

                        <div className="wrap-input100 bg1 rs1-wrap-input100">
                            <span className="label-input100">Phone</span>
                            <input
                                className="input100"
                                type="text"
                                name="phone"
                                placeholder="Enter Number Phone"/>
                        </div>

                        <div className="wrap-input100 bg1 rs1-wrap-input100">
                            <span className="label-input100">Age</span>
                            <input
                                className="input100"
                                type="text"
                                name="phone"
                                placeholder="Enter Age"/>
                        </div>

                        <div className="wrap-input100 bg1">
                            <span className="label-input100">Needed Services *</span>
                            <div>
                                <select className="js-select2" name="service">
                                    <option>Service 1</option>
                                    <option>Service 2</option>
                                </select>
                                <div className="dropDownSelect2"></div>
                            </div>
                        </div>

            

                        {this.state.existingPatient.map(diagnosis => (
                            <Diagnosis
                                key={diagnosis.id}
                                diagnosis={diagnosis}
                            ></Diagnosis>

                        ))}

                        <Treatment/>

                        <div className="container-form-btn">
                            <button className="form-btn" onClick={this.handleClick} type="button">

                                Submit

                            </button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}