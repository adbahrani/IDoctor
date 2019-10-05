import React, { Component } from 'react';

export class Diagnosis extends Component {
    static displayName = Diagnosis.name;



  render () {
    return (
        <div
            className="wrap-input100 validate-input bg0 rs1-alert-validate"
            data-validate="Please Type Diagnosis"
        >
            <span className="label-input100">Diagnosis</span>
            <textarea
                className="input100"
                name="message1"
                placeholder="Your  here..."
            ></textarea>
        </div>
    );
  }
}
export default Diagnosis;
