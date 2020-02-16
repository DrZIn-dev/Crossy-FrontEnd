export default [
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
]