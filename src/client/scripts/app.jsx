import React from 'react';
import {Bond} from 'oo7';
import {Rspan} from 'oo7-react';
import {InputBond, HashBond, BButton} from 'parity-reactive-ui';
import {bonds, formatBalance, isNullData} from 'oo7-parity';

export class App extends React.Component {
    constructor() {
        super();
        window.bonds = bonds;
        this.name = new Bond;
        this.recipient = bonds.registry.lookupAddress(this.name, 'A');
        this.state = { current: null };
    }

    give() {
        this.setState({
            current: bonds.post({
                to: this.recipient,
                value: 100 * 1e16
            })
        })
    }

   	render() {
        return(<div>
            <InputBond bond={this.name} placeholder='Name of recipient' />
            <BButton
                content={this.name.map(n => `Give ${n} 1 ETH`)}
                disabled={this.recipient.map(isNullData)}
                onClick={this.give.bind(this)}
            />
            <br/>
            <Rspan>{this.state.current && this.state.current.map(JSON.stringify)}</Rspan>
        </div>);
	}
}
