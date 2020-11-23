import React, { Component } from 'react';
import Vente from "../espaceVendeur";
import Foot from "../foot";

export class Vendre extends Component {
    render() {
        return (
            <div>
                <Vente />
                <Foot />
            </div>
        )
    }
}

export default Vendre