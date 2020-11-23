import React, { Component } from 'react';
import Clients from "../Clients";
import Foot from "../foot";

export class Deshbord extends Component {
    render() {
        return (
            <div>
                <Clients />
                <Foot />
            </div>
        )
    }
}

export default Deshbord