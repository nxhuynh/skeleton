import React from 'react';
import {Bond} from 'oo7';
import {Rspan} from 'oo7-react';
import {InputBond, HashBond, BButton, TransactionProgressLabel, TransactButton} from 'parity-reactive-ui';
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
            <TransactButton
                content={this.name.map(n => `Give ${n} 1 ETH`)}
                disabled={this.recipient.map(isNullData)}
                tx={{
                    to: this.recipient,
                    value: 100 * 1e16
                }}
            />
            <br/>
            <TransactionProgressLabel value={this.state.current}/>
        </div>);
	}
}
