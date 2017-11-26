import React from 'react';
import {Bond} from 'oo7';
import {Rspan} from 'oo7-react';
import {InputBond, HashBond, BButton, TransactionProgressLabel, TransactButton} from 'parity-reactive-ui';
import {bonds, formatBalance, isNullData} from 'oo7-parity';
import {equals} from 'bignumber.js';

const LinkedListABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "length",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "total",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_number",
        "type": "uint256"
      },
      {
        "name": "_name",
        "type": "bytes32"
      }
    ],
    "name": "addEntry",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "setTotal",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "head",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "bytes32"
      }
    ],
    "name": "getEntry",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "writtenTotal",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "objects",
    "outputs": [
      {
        "name": "next",
        "type": "bytes32"
      },
      {
        "name": "number",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "resetTotal",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "head",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "number",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "name",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "next",
        "type": "bytes32"
      }
    ],
    "name": "AddEntry",
    "type": "event"
  }
];


export class App extends React.Component {
    constructor() {
        super();
        this.linkedlist = bonds.makeContract('0x4B906e65401AEc3722ce007b51d5B547fc336fD6', LinkedListABI);
        //this.prevVote = this.counter.Voted({ who: bonds.me });
        //this.linkedlist.total().log();
        this.head = this.linkedlist.head();
        this.node_is = new Bond;
        this.cur_node = this.head;
        console.log(typeof this.linkedlist.length().c);
        console.log(this.linkedlist.length().c.constructor.name);
        console.log(this.linkedlist.length().c[0] == 2);
        var len = this.linkedlist.length();
        len.then(b => console.log(b.equals('2')));
        //len.log();
    }

   	render() {
        //this.head.log();
        console.log('====');
        //this.linkedlist.getEntry(this.head).log();
        console.log('*****');
/*
        var total = this.linkedlist.total().c[0];
        console.log(total);
        console.log(head.constructor.name);
*/
        /*
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
                        onClick={() => this.setState({tx: this.counter.vote(i)})}
                    >
                        {n}
                    </a>
                </Rspan>
            </div>))}
            <div style={{marginTop: '1em'}}>
                <TransactionProgressLabel value={this.state.tx}/>
            </div>
            <Rspan>
                {this.prevVote.map(v => v.length > 0 ? `Already voted for ${Options[v[0].option]}` : '')}
            </Rspan>
        </div>);
        */
        return(<div>
            <a onClick={() => {
                var cur_node = this.linkedlist.objects(this.cur_node);
                cur_node.then(cur => {
                    console.log(cur[0] != '');
                    if (cur[0] != '')) {
                        cur.log();
                        //this.cur_node = cur_node[0];
                    } else {
                        console.log('reached the end of linked list');
                    }
                });
            }>
                getEntry
            </a>
        </div>);
	}
}
