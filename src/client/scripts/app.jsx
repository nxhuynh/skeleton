import React from 'react';
import {Bond, TimeBond} from 'oo7';
import {Rspan} from 'oo7-react';
import {InputBond} from 'parity-reactive-ui';
import {bonds} from 'oo7-parity';

const computeColor = t => t.match(/^[0-9]+$/) ? {color: 'red'} : {color: 'black'}
const format = ([msg, t]) => `${new Date(t)}: ${msg}`

export class App extends React.Component {
    constructor() {
        super();
        window.bonds = bonds;
    }

	render() {
		return (<div>
            Latest block's timestamp is:&nbsp;
            <Rspan style={{fontWeight: 'bold'}}>
                {bonds.head.timestamp.map(_=>_.toString())}
	        </Rspan>
		</div>);
	}
}
