import React, { Component } from 'react';

export class Treatment extends Component {
    static displayName = Treatment.name;
    

  render () {
    return (
        <div
            className="wrap-input100 validate-input bg0 rs1-alert-validate"
            data-validate="Please Type Treatment"
        >
            <span className="label-input100">treatment</span>
            <textarea
                className="input100"
                name="message2"
                placeholder="Your  here..."
            ></textarea>
        </div>
    );
  }
}
export default Treatment;
