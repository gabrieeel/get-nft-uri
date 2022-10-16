# Get the URI of an NFT

The goal of this project was to find the URI (uniform resource identifier) of an NFT from an unverified smart contract.

To accomplish this we need the contract address, the token ID, the JSON-RPC url (we can use Alchemy or Infura for this) and the contract ABI.

An unverified contract doesn't have its ABI published, so we need to create it from the functions of the contract. We can get these functions with a decompiler such as Online Solidity Decompiler (https://ethervm.io/decompile).

 With that info, and using other ABIs as examples, we can create an ABI as little as:
 ```
 [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "uri",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
```

You can add as many public functions as the contract has to the ABI, for example name(), symbol(), owner(), version(), etc.


## Installation

1. Install dependencies by running 
```
yarn
```

2. Rename .env.example to .env and set:
- API_RPC_URL (you can use Alchemy for this)
- TOKEN_ID 
- CONTRACT_ADDRESS
- CONTRACT_ABI

3. 
```
yarn hardhat run getTokenURI.js
```


The projects is pre-configured for the Polygon (Matic) network, this can be changed in the hardhat.config.js file.
