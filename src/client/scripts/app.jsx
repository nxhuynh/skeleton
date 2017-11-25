import React from 'react';
import {Bond, TimeBond} from 'oo7';
import {Rspan} from 'oo7-react';
import {InputBond} from 'parity-reactive-ui';
import {bonds, formatBlockNumber, formatBalance, sha3} from 'oo7-parity';

const computeColor = t => t.match(/^[0-9]+$/) ? {color: 'red'} : {color: 'black'}
const format = ([msg, t]) => `${new Date(t)}: ${msg}`

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
