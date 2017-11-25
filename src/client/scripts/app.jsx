import React from 'react';
import {Bond} from 'oo7';
import {Rspan} from 'oo7-react';
import {InputBond} from 'parity-reactive-ui';
import {bonds, formatBalance} from 'oo7-parity';

export class App extends React.Component {
    constructor() {
        super();
        window.bonds = bonds;
        this.bond = new Bond;
    }

   	render() {
        return(<div>
            Address of <InputBond bond={this.bond} placeholder='Lookup a name' /> is:<br/>
			<Rspan>{bonds.registry.lookupAddress(this.bond, 'A')}</Rspan>
            <br/>
			Its balance is&nbsp;
            <Rspan>
			    {bonds.balance(bonds.registry.lookupAddress(this.bond, 'A')).map(formatBalance)}
			</Rspan>
        </div>);
	}
}
