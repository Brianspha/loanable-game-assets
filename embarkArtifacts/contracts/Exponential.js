import EmbarkJS from '../embarkjs';

const ExponentialConfig = {"abiDefinition":[],"deployedAddress":"0x40d3ed865BB11CD16eeb69b455d7144F34b340d3","className":"Exponential","args":[],"gas":72621,"gasPrice":"20000000000","silent":false,"track":true,"deploy":true,"realRuntimeBytecode":"6080604052600080fdfea265627a7a72305820f83a6903b8e466f52f","realArgs":[],"code":"6080604052348015600f57600080fd5b50603e80601d6000396000f3fe6080604052600080fdfea265627a7a72305820f83a6903b8e466f52fc45caf5ba1b73c9c69d5f574acf7d9b9a76ba9af31bc4764736f6c634300050a0032","runtimeBytecode":"6080604052600080fdfea265627a7a72305820f83a6903b8e466f52fc45caf5ba1b73c9c69d5f574acf7d9b9a76ba9af31bc4764736f6c634300050a0032","linkReferences":{},"swarmHash":"c45caf5ba1b73c9c69d5f574acf7d9b9a76ba9af31bc4764736f6c634300050a","gasEstimates":{"creation":{"codeDepositCost":"12400","executionCost":"66","totalCost":"12466"},"internal":{"addExp(struct Exponential.Exp memory,struct Exponential.Exp memory)":"infinite","divExp(struct Exponential.Exp memory,struct Exponential.Exp memory)":"infinite","divScalar(struct Exponential.Exp memory,uint256)":"infinite","divScalarByExp(uint256,struct Exponential.Exp memory)":"infinite","divScalarByExpTruncate(uint256,struct Exponential.Exp memory)":"infinite","getExp(uint256,uint256)":"infinite","greaterThanExp(struct Exponential.Exp memory,struct Exponential.Exp memory)":"infinite","isZeroExp(struct Exponential.Exp memory)":"infinite","lessThanExp(struct Exponential.Exp memory,struct Exponential.Exp memory)":"infinite","lessThanOrEqualExp(struct Exponential.Exp memory,struct Exponential.Exp memory)":"infinite","mulExp(struct Exponential.Exp memory,struct Exponential.Exp memory)":"infinite","mulExp(uint256,uint256)":"infinite","mulExp3(struct Exponential.Exp memory,struct Exponential.Exp memory,struct Exponential.Exp memory)":"infinite","mulScalar(struct Exponential.Exp memory,uint256)":"infinite","mulScalarTruncate(struct Exponential.Exp memory,uint256)":"infinite","mulScalarTruncateAddUInt(struct Exponential.Exp memory,uint256,uint256)":"infinite","subExp(struct Exponential.Exp memory,struct Exponential.Exp memory)":"infinite","truncate(struct Exponential.Exp memory)":"infinite"}},"functionHashes":{},"filename":"C:/Users/user-pc/Documents/Github/loanable-game-assets/.embark/contracts/shared-contracts/compound/Exponential.sol","originalFilename":"contracts\\shared-contracts\\compound\\Exponential.sol","path":"C:\\Users\\user-pc\\Documents\\Github\\loanable-game-assets\\contracts\\shared-contracts\\compound\\Exponential.sol","type":"file","deploymentAccount":"0x34E3b297408Ab64f3609C765eA56a545eaAe7d34","transactionHash":"0xc94d58cf0fbe161fccbd24c08cd5e1fefaa625c4cd560f546944647782d8316c"};
const Exponential = new EmbarkJS.Blockchain.Contract(ExponentialConfig);

export default Exponential;