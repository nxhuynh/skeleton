import React from 'react';
import {Rspan} from 'oo7-react';
import {bonds, formatBalance} from 'oo7-parity';

export class App extends React.Component {
    constructor() {
        super();
        window.bonds = bonds;
    }

   	render() {
        var parity2 = bonds.registry.lookupAddress('parity-2', 'A');
        bonds.namesOf(bonds.me).log();
        return(<div>
            <Rspan>{bonds.registry.lookupAddress('parity-2', 'A')}</Rspan>
            <br/>
            <Rspan>{bonds.balance(parity2).map(formatBalance)}</Rspan>
        </div>);
	}
}
