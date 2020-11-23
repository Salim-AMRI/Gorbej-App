import React, { Component } from 'react';
import Produit from "../produit";
import Foot from "../foot";

export class Carte extends Component {
    render() {
        return (
            <div>
                <Produit />
                <Foot />
            </div>
        )
    }
}

export default Carte
