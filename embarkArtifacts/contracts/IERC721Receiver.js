import EmbarkJS from '../embarkjs';

const IERC721ReceiverConfig = {"abiDefinition":[{"constant":false,"inputs":[{"name":"operator","type":"address"},{"name":"from","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"data","type":"bytes"}],"name":"onERC721Received","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"className":"IERC721Receiver","args":[],"gas":"auto","silent":false,"track":true,"deploy":false,"realRuntimeBytecode":"","realArgs":[],"code":"","runtimeBytecode":"","linkReferences":{},"swarmHash":"","gasEstimates":null,"functionHashes":{"onERC721Received(address,address,uint256,bytes)":"150b7a02"},"filename":"C:/Users/user-pc/Documents/Github/loanable-game-assets/.embark/node_modules/@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/IERC721Receiver.sol","originalFilename":"contracts/C:/Users/user-pc/Documents/Github/loanable-game-assets/.embark/node_modules/@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/IERC721Receiver.sol","path":"C:\\Users\\user-pc\\Documents\\Github\\loanable-game-assets\\contracts\\C:\\Users\\user-pc\\Documents\\Github\\loanable-game-assets\\.embark\\node_modules\\@openzeppelin\\contracts-ethereum-package\\contracts\\token\\ERC721\\IERC721Receiver.sol","type":"file","deploymentAccount":"0x278582Ee01c47C7DC003de41d709B5dCa498Dbf4"};
const IERC721Receiver = new EmbarkJS.Blockchain.Contract(IERC721ReceiverConfig);

export default IERC721Receiver;
