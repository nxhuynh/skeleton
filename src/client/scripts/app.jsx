import React from 'react';
import {Rspan} from 'oo7-react';
import {bonds, formatBalance} from 'oo7-parity';

export class App extends React.Component {
    constructor() {
        super();
        window.bonds = bonds;
    }

    render() {
        return (<div>
            Accounts available:&nbsp;
            <Rspan>{bonds.accounts.map(_=>_.join(', '))}</Rspan>
            <br/>
            Default account:&nbsp;
            <Rspan>{bonds.me}</Rspan>
            <br/>
            With a balance of&nbsp;
            <Rspan>{bonds.balance(bonds.me).map(formatBalance)}</Rspan>
        </div>);
    }
}
