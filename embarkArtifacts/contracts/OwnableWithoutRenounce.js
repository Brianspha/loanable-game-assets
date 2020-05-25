import EmbarkJS from '../embarkjs';

const OwnableWithoutRenounceConfig = {"abiDefinition":[{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8f32d59b"},{"constant":false,"inputs":[{"name":"sender","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xc4d66de8"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"}],"deployedAddress":"0xFB9DbFeEAf1B3498213aDFF31b0ebbE48B39B1B4","className":"OwnableWithoutRenounce","args":[],"gas":246672,"gasPrice":"20000000000","silent":false,"track":true,"deploy":true,"realRuntimeBytecode":"608060405234801561001057600080fd5b506004361061004c5760003560e01c80638da5cb5b146100515780638f32d59b14610075578063c4d66de814610091578063f2fde38b146100b9575b600080fd5b6100596100df565b604080516001600160a01b039092168252519081900360200190f35b61007d6100ee565b604080519115158252519081900360200190f35b6100b7600480360360208110156100a757600080fd5b50356001600160a01b0316610114565b005b6100b7600480360360208110156100cf57600080fd5b50356001600160a01b031661022d565b6033546001600160a01b031690565b6033546000906001600160a01b031661010561024a565b6001600160a01b031614905090565b600054610100900460ff168061012d575061012d61024e565b8061013b575060005460ff16155b610190576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806102d1602e913960400191505060405180910390fd5b600054610100900460ff161580156101bb576000805460ff1961ff0019909116610100171660011790555b6033805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384811691909117918290556040519116906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a38015610229576000805461ff00191690555b5050565b6102356100ee565b61023e57600080fd5b61024781610254565b50565b3390565b303b1590565b6001600160a01b03811661026757600080fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36033805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039290921691909117905556fe436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a7230582025b499eddb590a7856","realArgs":[],"code":"6080604052610333806100136000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80638da5cb5b146100515780638f32d59b14610075578063c4d66de814610091578063f2fde38b146100b9575b600080fd5b6100596100df565b604080516001600160a01b039092168252519081900360200190f35b61007d6100ee565b604080519115158252519081900360200190f35b6100b7600480360360208110156100a757600080fd5b50356001600160a01b0316610114565b005b6100b7600480360360208110156100cf57600080fd5b50356001600160a01b031661022d565b6033546001600160a01b031690565b6033546000906001600160a01b031661010561024a565b6001600160a01b031614905090565b600054610100900460ff168061012d575061012d61024e565b8061013b575060005460ff16155b610190576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806102d1602e913960400191505060405180910390fd5b600054610100900460ff161580156101bb576000805460ff1961ff0019909116610100171660011790555b6033805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384811691909117918290556040519116906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a38015610229576000805461ff00191690555b5050565b6102356100ee565b61023e57600080fd5b61024781610254565b50565b3390565b303b1590565b6001600160a01b03811661026757600080fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36033805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039290921691909117905556fe436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a7230582025b499eddb590a7856e61f431402868030f13665814baf6ce13ee0b99e46984b64736f6c634300050a0032","runtimeBytecode":"608060405234801561001057600080fd5b506004361061004c5760003560e01c80638da5cb5b146100515780638f32d59b14610075578063c4d66de814610091578063f2fde38b146100b9575b600080fd5b6100596100df565b604080516001600160a01b039092168252519081900360200190f35b61007d6100ee565b604080519115158252519081900360200190f35b6100b7600480360360208110156100a757600080fd5b50356001600160a01b0316610114565b005b6100b7600480360360208110156100cf57600080fd5b50356001600160a01b031661022d565b6033546001600160a01b031690565b6033546000906001600160a01b031661010561024a565b6001600160a01b031614905090565b600054610100900460ff168061012d575061012d61024e565b8061013b575060005460ff16155b610190576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806102d1602e913960400191505060405180910390fd5b600054610100900460ff161580156101bb576000805460ff1961ff0019909116610100171660011790555b6033805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384811691909117918290556040519116906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a38015610229576000805461ff00191690555b5050565b6102356100ee565b61023e57600080fd5b61024781610254565b50565b3390565b303b1590565b6001600160a01b03811661026757600080fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36033805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039290921691909117905556fe436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a7230582025b499eddb590a7856e61f431402868030f13665814baf6ce13ee0b99e46984b64736f6c634300050a0032","linkReferences":{},"swarmHash":"e61f431402868030f13665814baf6ce13ee0b99e46984b64736f6c634300050a","gasEstimates":{"creation":{"codeDepositCost":"163800","executionCost":"184","totalCost":"163984"},"external":{"initialize(address)":"infinite","isOwner()":"483","owner()":"415","transferOwnership(address)":"22646"},"internal":{"_transferOwnership(address)":"22064"}},"functionHashes":{"initialize(address)":"c4d66de8","isOwner()":"8f32d59b","owner()":"8da5cb5b","transferOwnership(address)":"f2fde38b"},"filename":"C:/Users/user-pc/Documents/Github/loanable-game-assets/.embark/contracts/shared-contracts/lifecycle/OwnableWithoutRenounce.sol","originalFilename":"contracts\\shared-contracts\\lifecycle\\OwnableWithoutRenounce.sol","path":"C:\\Users\\user-pc\\Documents\\Github\\loanable-game-assets\\contracts\\shared-contracts\\lifecycle\\OwnableWithoutRenounce.sol","type":"file","deploymentAccount":"0x34E3b297408Ab64f3609C765eA56a545eaAe7d34","transactionHash":"0x1a48dc4ceef49f96cfa42d0496742622d62d19eaa868c1d95bed204358fd2004"};
const OwnableWithoutRenounce = new EmbarkJS.Blockchain.Contract(OwnableWithoutRenounceConfig);

export default OwnableWithoutRenounce;