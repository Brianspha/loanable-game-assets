import EmbarkJS from '../embarkjs';

const CountersConfig = {"abiDefinition":[],"deployedAddress":"0x2A4fD39F2EA7dce9e593ef77CEbC852Af80b9cCA","className":"Counters","args":[],"gas":74657,"gasPrice":"20000000000","silent":false,"track":true,"deploy":true,"realRuntimeBytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea265627a7a72305820f1a116914c65c11f28","realArgs":[],"code":"60556023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea265627a7a72305820f1a116914c65c11f28cca922abc16a6e9368f32b8870aa0e472e53e729b9a9f664736f6c634300050a0032","runtimeBytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea265627a7a72305820f1a116914c65c11f28cca922abc16a6e9368f32b8870aa0e472e53e729b9a9f664736f6c634300050a0032","linkReferences":{},"swarmHash":"cca922abc16a6e9368f32b8870aa0e472e53e729b9a9f664736f6c634300050a","gasEstimates":{"creation":{"codeDepositCost":"17000","executionCost":"94","totalCost":"17094"},"internal":{"current(struct Counters.Counter storage pointer)":"infinite","decrement(struct Counters.Counter storage pointer)":"infinite","increment(struct Counters.Counter storage pointer)":"infinite"}},"functionHashes":{},"filename":"C:/Users/user-pc/Documents/Github/loanable-game-assets/.embark/node_modules/@openzeppelin/contracts-ethereum-package/contracts/drafts/Counters.sol","originalFilename":"contracts/C:/Users/user-pc/Documents/Github/loanable-game-assets/.embark/node_modules/@openzeppelin/contracts-ethereum-package/contracts/drafts/Counters.sol","path":"C:\\Users\\user-pc\\Documents\\Github\\loanable-game-assets\\contracts\\C:\\Users\\user-pc\\Documents\\Github\\loanable-game-assets\\.embark\\node_modules\\@openzeppelin\\contracts-ethereum-package\\contracts\\drafts\\Counters.sol","type":"file","deploymentAccount":"0x34E3b297408Ab64f3609C765eA56a545eaAe7d34","transactionHash":"0x0cb261aa738c10a82086405229895e686a275b5fc308198cb8c7a5b086932723"};
const Counters = new EmbarkJS.Blockchain.Contract(CountersConfig);

export default Counters;
