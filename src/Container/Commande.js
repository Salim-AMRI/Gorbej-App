import React, { Component } from 'react'
import Order from "../Commande";
import Foot from "../foot";

export class Commande extends Component {
    render() {
        return (
            <div>
                <Order />
                <Foot />
            </div>
        )
    }
}

export default Commande
