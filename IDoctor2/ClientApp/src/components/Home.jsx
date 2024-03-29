import React, { Component } from "react";
import $ from "jquery"
import { Link } from "react-router-dom";
import toastr from "toastr";
 

export class Home extends Component {
    static displayName = Home.name;

    handleClick = (e) => {

        console.log();
        var savedForms = JSON.parse(localStorage.getItem("savedForms"));
        let found = null;
        console.log(savedForms);
        if (savedForms) {
            const names = savedForms.map(x => x.formName);
            found = names.find(x => x === $("#fullName").val());
        }
        if (found) {
            toastr.success("Patient exist");
            this.props.history.push(`ExistingPatient?name=${$("#fullName").val()}`);
        } else {
            toastr.warning("Patient doesn't exist");
        }


    }


    render() {
        return (
            <div>

                <div className="container-contact100">
                    <div className="wrap-contact100">

                        <span className="contact100-form-title">
                            IDoctor
                        </span>

                        <div
                            className="wrap-input100 validate-input bg1"
                            data-validate="Please Type Your Name">
                            <span className="label-input100">FULL NAME *</span>
                            <input
                                className="input100"
                                type="text"
                                id="fullName"
                                name="name"
                                placeholder="Enter Your Name" required/>
                        </div>


                        <button className="form-btn" id="search" onClick={this.handleClick}>
                     
                                Search
                     
                        </button>


                        <Link to="/NewPatient" className="container-form-btn">
                            <button className="form-btn" id="new">
                            
                                    New Patient
                                
                      
                            </button>

                        </Link >

                    </div>
                </div>
            </div>
        );
    }
}