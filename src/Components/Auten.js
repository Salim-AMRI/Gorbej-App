import React, { Component } from 'react';
import Foot from "./foot";
import SignUp from './SignUp';

export class Auten extends Component {
    render() {
        return (
            <div>
                <SignUp />
                <Foot />
            </div>
        )
    }
}

export default Auten
