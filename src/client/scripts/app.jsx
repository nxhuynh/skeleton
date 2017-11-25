import React from 'react';
import {Bond} from 'oo7';
import {Rspan} from 'oo7-react';
import {InputBond, HashBond, BButton, TransactionProgressLabel, TransactButton} from 'parity-reactive-ui';
import {bonds, formatBalance, isNullData} from 'oo7-parity';

const CounterABI = [
          {
            "constant": false,
            "inputs": [{"name": "_option", "type": "uint256"}],
            "name": "vote",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [{"name": "", "type": "address"}],
            "name": "hasVoted",
            "outputs": [{"name": "", "type": "bool"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [{"name": "", "type": "uint256"}],
            "name": "votes",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "anonymous": false,
            "inputs": [
                {"indexed": true, "name": "who", "type": "address"},
                {"indexed": true, "name": "option", "type": "uint256"}
            ],
            "name": "Voted",
            "type": "event"
          }
        ];

    const Options = ['Red', 'Green', 'Blue'];

export class App extends React.Component {
    constructor() {
        super();
        this.counter = bonds.makeContract('0x2f164799a258c1F65DD3B551ed16C53Dd844410c', CounterABI);
        console.log('got here');
    }

   	render() {
        return(<div>
            {Options.map((n, i) => (<div key={i}>
                <Rspan style={{
                    borderLeft: this.counter
                        .votes(i)
                        .map(v => `${1 + v * 10}px black solid`)
                }}>
                    <a
                        style={{float: 'left', minWidth: '3em'}}
                        href='#'
                        onClick={() => this.counter.vote(i)}
                    >
                        {n}
                    </a>
                </Rspan>
            </div>))}
        </div>);
	}
}
