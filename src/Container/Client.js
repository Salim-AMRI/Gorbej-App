import React, { Component } from 'react';
import Acheteur from "../espaceAcheteur";
import Foot from "../foot";

export class Achat extends Component {
    render() {
        return (
            <div>
                <Acheteur />
                <Foot />
            </div>
        )
    }
}

export default Achat