const Web3 = require('web3');
const rpcURL = 'http://127.0.0.1:7545';
const web3 = new Web3(rpcURL);

let abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'issuer',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'duration',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'purchaseName',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'purchaseAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'initialDate',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'enum Forward.State',
        name: 'state',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'currencyRate',
        type: 'uint256'
      }
    ],
    name: 'ContractCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'enum Forward.State',
        name: 'state',
        type: 'uint8'
      }
    ],
    name: 'UpdateState',
    type: 'event'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'contracts',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        internalType: 'string',
        name: 'issuer',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        internalType: 'string',
        name: 'duration',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'purchaseName',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'purchaseAmount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'initialDate',
        type: 'uint256'
      },
      {
        internalType: 'enum Forward.State',
        name: 'state',
        type: 'uint8'
      },
      {
        internalType: 'uint256',
        name: 'currencyRate',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'count',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'string',
        name: '_issuer',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      },
      {
        internalType: 'string',
        name: '_duration',
        type: 'string'
      },
      {
        internalType: 'string',
        name: '_purchase_name',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: '_purchase_amount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_currencyRate',
        type: 'uint256'
      }
    ],
    name: 'createContract',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_setState',
        type: 'uint256'
      }
    ],
    name: 'setState',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getContract',
    outputs: [
      {
        internalType: 'string',
        name: 'issuer',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'purchaseName',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'duration',
        type: 'uint256'
      },
      {
        internalType: 'string',
        name: 'purchaseAmount',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'initialDate',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getContractState',
    outputs: [
      {
        internalType: 'enum Forward.State',
        name: 'state',
        type: 'uint8'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getContractCurrency',
    outputs: [
      {
        internalType: 'uint256',
        name: 'currencyRate',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getCount',
    outputs: [
      {
        internalType: 'uint256',
        name: 'length',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
];
let account = '0x29c8A56Ca7fe79401Aa830B406F3aa2Cd92C6eFF';
let address = '0x0707B506CA656039cc3C64A8c21f52147d3d4C14';

const contract = new web3.eth.Contract(abi, address);

const data_mock = [
  {
    issuer: 'Apextri',
    purchase_name: 'cillum',
    purchase_amount: 2915,
    amount: 7482932,
    duration: 45,
    currency: 30
  },
  {
    issuer: 'Zolavo',
    purchase_name: 'culpa',
    purchase_amount: 5762,
    amount: 3511301,
    duration: 30,
    currency: 33
  },
  {
    issuer: 'Jumpstack',
    purchase_name: 'quis',
    purchase_amount: 2021,
    amount: 3302464,
    duration: 60,
    currency: 33
  },
  {
    issuer: 'Buzzness',
    purchase_name: 'labore',
    purchase_amount: 3290,
    amount: 3529585,
    duration: 30,
    currency: 33
  },
  {
    issuer: 'Frenex',
    purchase_name: 'velit',
    purchase_amount: 8467,
    amount: 6450464,
    duration: 60,
    currency: 34
  },
  {
    issuer: 'Apexia',
    purchase_name: 'deserunt',
    purchase_amount: 4984,
    amount: 6625860,
    duration: 45,
    currency: 35
  },
  {
    issuer: 'Anivet',
    purchase_name: 'et',
    purchase_amount: 7219,
    amount: 3784058,
    duration: 75,
    currency: 34
  },
  {
    issuer: 'Unia',
    purchase_name: 'magna',
    purchase_amount: 6167,
    amount: 1658620,
    duration: 90,
    currency: 33
  },
  {
    issuer: 'Snacktion',
    purchase_name: 'tempor',
    purchase_amount: 478,
    amount: 2961027,
    duration: 75,
    currency: 33
  },
  {
    issuer: 'Kindaloo',
    purchase_name: 'proident',
    purchase_amount: 955,
    amount: 5934920,
    duration: 75,
    currency: 29
  }
];

// contract.methods
//   .createContract("hello", 234, "02", "1234", 1234556)
//   .send({ from: web3.eth.accounts[1], gas: 3000000 });

// data_mock.map(async data => {
//   contract.methods
//     .createContract(
//       data.issuer,
//       data.amount,
//       data.duration.toString(),
//       data.purchase_name,
//       data.purchase_amount,
//       data.currency
//     )
//     .send({ from: "0x5548bd4cf40cF011f543EcCA0ea4470B57F51Ef6", gas: 3000000 });
// });

// for (i = 0; i < 12; i++) {
//   contract.methods.getContract(i).call(async (req, res) => {
//     data = await { ...res };
//     data = JSON.stringify(data);
//     console.log(data);
//   });
// }

// contract.methods.getCount().call((req, res) => {
//   console.log(res);
// });

contract.methods
  .setState(15, 2)
  .send({ from: '0x5548bd4cf40cF011f543EcCA0ea4470B57F51Ef6', gas: 3000000 });

// const subscribedEvents = {};

// const subscribeLogEvent = (contract, eventName) => {
//   const eventJsonInterface = web3.utils._.find(
//     contract._jsonInterface,
//     o => o.name === eventName && o.type === 'event'
//   );

//   const subscription = web3.eth.subscribe(
//     'logs',
//     {
//       address: contract.options.address,
//       topics: [eventJsonInterface.signature]
//     },
//     (error, result) => {
//       if (!error) {
//         const eventObj = web3.eth.abi.decodeLog(
//           eventJsonInterface.inputs,
//           result.data,
//           result.topics.slice(1)
//         );
//         console.log(`New ${eventName}!`, eventObj);
//       }
//     }
//   );

//   subscribedEvents[eventName] = subscription;

//   console.log(
//     `subscribed to event '${eventName}' of contract '${contract.options.address}' `
//   );
// };

// subscribeLogEvent(contract, 'UpdateState');
