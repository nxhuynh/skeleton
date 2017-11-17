import React from 'react';
import {Rspan} from 'oo7-react';
import {bonds} from 'oo7-parity';

export class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<div>
            <Rspan>{bonds.height}</Rspan>
        </div>);
    }
}
