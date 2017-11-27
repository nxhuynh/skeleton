import React from 'react';
import {Bond} from 'oo7';
import {Rspan} from 'oo7-react';
import {InputBond, HashBond, BButton, TransactionProgressLabel, TransactButton} from 'parity-reactive-ui';
import {bonds, formatBalance, isNullData} from 'oo7-parity';
import {equals} from 'bignumber.js';
import { GoogleMapLoader, withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

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

const LicenceLinkedListABI = [
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
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
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
        "name": "longitude",
        "type": "string"
      },
      {
        "name": "latitude",
        "type": "string"
      },
      {
        "name": "day",
        "type": "uint256"
      },
      {
        "name": "month",
        "type": "uint256"
      },
      {
        "name": "year",
        "type": "uint256"
      },
      {
        "name": "licence",
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
        "name": "_longitude",
        "type": "string"
      },
      {
        "name": "_latitude",
        "type": "string"
      },
      {
        "name": "_day",
        "type": "uint256"
      },
      {
        "name": "_month",
        "type": "uint256"
      },
      {
        "name": "_year",
        "type": "uint256"
      },
      {
        "name": "_licence",
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
        "name": "longitude",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "latitude",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "day",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "month",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "year",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "licence",
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

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 30.285833, lng: -97.739421 }}
  >
    <Marker position={{ lat: 30.281701, lng: -97.741932 }} /> 
    <Marker position={{ lat: 30.272704, lng: -97.741127 }} />
  </GoogleMap>
));

const MyMapComponent1 = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 30.285833, lng: -97.739421 }}
  >
    {
        props.loc.map((location, i) => <Marker key={i} position={{ lat: location[0], lng: location[1] }} />)
    }
  </GoogleMap>
));

export class App extends React.Component {
    constructor(props) {
        super(props);
        //lorien
        //this.linkedlist = bonds.makeContract('0xaD995dcE761154CB58933CF67be71c36f45D234E', LinkedListABI);
        this.linkedlist = bonds.makeContract('0xE03800CB9735a7f9Cc3FAB4A9D8062fec23e481C', LicenceLinkedListABI);
        //rivendell
        //this.linkedlist = bonds.makeContract('0x4B906e65401AEc3722ce007b51d5B547fc336fD6', LinkedListABI);
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
        this.reached_end = false;
        this.state = { markers: [], read_blockchain: false, };
    }

    print_array(array) {
        var local_markers = [];
        for (var i in array) {
            console.log(array[i]);
            var lat = parseFloat(array[i][1]);
            var lon = parseFloat(array[i][2]);
            var licence = array[i][6];
            local_markers.push([lat, lon, licence]);
            console.log(local_markers.length);
        }
        
        this.setState({
            markers: local_markers,
            read_blockchain: true,
        });
        

    }

    process_next_node(next_id, array) {
        var cur_node = this.linkedlist.objects(next_id);
        cur_node.then(c => {
            array.push(c);
            if (c[0] != '' && c[2] != ''){
                this.process_next_node(c[0], array);
            } else {
                this.print_array(array);
            }
        });
    }

   	render() {
        //this.head.log();
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
        var array = [];
        if (!this.state.read_blockchain) {
            this.process_next_node(this.head, array);
        }
        /*
        var count = 0;
        while (this.reached_end == false || count > 3) {
            var cur_node = this.linkedlist.objects(this.head);
            cur_node.then(c => {
                console.log(c);
                if (c[0] != '' && c[2] != '') {
                    this.cur_node = c[0];
                } else {
                    this.reached_end = true;
                }
                count++;
            });
        }
        */
/*        
        return(<div>
            <a onClick={() => {
                var cur_node = this.linkedlist.objects(this.cur_node);
                cur_node.then(c => {
                    console.log(c);
                    console.log(c[0] != '');
                    if (c[0] != '') {
                        this.cur_node = c[0];
                    } else {
                        console.log('reached the end of linked list');
                    }
                });
            }}>
                get entry
            </a>
        </div>);
*/
var locations = [[30.281701, -97.741932], [30.272704, -97.741127]];

        return(<div>
            <MyMapComponent1
  isMarkerShown
  loc={this.state.markers}
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `800px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
            </div>);
/*
        return(<div>
            <GoogleMapLoader
              containerElement={
                <div
                  style={{
                    height: `100%`
                  }}
                />
              }
              googleMapElement={
                <GoogleMap
                  defaultZoom={10}
                  defaultCenter={{ lat: 30.281701, lng: -97.741932}}
                >
                    <Marker position={{ lat : 30.281701, lng : -97.741932 }}/>
                  
                </GoogleMap>
              }
            />
            </div>);
*/
    }
}
