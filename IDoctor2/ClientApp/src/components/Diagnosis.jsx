import React, { Component } from "react";

const spanStyle = {
    cursor: "pointer"
};

export class Diagnosis extends Component {
    static displayName = Diagnosis.name;



    componentDidMount() {
        console.log(this.props.diagnosis.value);

    }

    render () {
        return (
            <div
                className="wrap-input100 validate-input bg0 rs1-alert-validate"
                data-validate="Please Type Diagnosis">
                <span className="label-input100">Diagnosis</span>


                <span className="float-right" style={spanStyle}>
                    <i className="fa fa-plus-circle fa-2x" aria-hidden="true"/>
                </span>


                <textarea
                className="input100"
                name="message1"
                placeholder="Your  here..."
                defaultValue={this.props.diagnosis.value}></textarea>
            </div>
        );
    }
}

export default Diagnosis;