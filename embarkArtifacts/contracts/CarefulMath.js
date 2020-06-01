import EmbarkJS from '../embarkjs';

const CarefulMathConfig = {"abiDefinition":[],"deployedAddress":"0x75E38AE9814dD1CD333Ca906a3E757b7670b7212","className":"CarefulMath","args":[],"gas":71208,"gasPrice":"20000000000","silent":false,"track":true,"deploy":true,"realRuntimeBytecode":"6080604052600080fdfea265627a7a72305820c27ac91df2d0f2addd","realArgs":[],"code":"6080604052348015600f57600080fd5b50603e80601d6000396000f3fe6080604052600080fdfea265627a7a72305820c27ac91df2d0f2addd70a94a58191b0b505a6060b08a11f6b8cfd8c0ca54eec164736f6c634300050a0032","runtimeBytecode":"6080604052600080fdfea265627a7a72305820c27ac91df2d0f2addd70a94a58191b0b505a6060b08a11f6b8cfd8c0ca54eec164736f6c634300050a0032","linkReferences":{},"swarmHash":"70a94a58191b0b505a6060b08a11f6b8cfd8c0ca54eec164736f6c634300050a","gasEstimates":{"creation":{"codeDepositCost":"12400","executionCost":"66","totalCost":"12466"},"internal":{"addThenSubUInt(uint256,uint256,uint256)":"infinite","addUInt(uint256,uint256)":"infinite","divUInt(uint256,uint256)":"infinite","mulUInt(uint256,uint256)":"infinite","subUInt(uint256,uint256)":"infinite"}},"functionHashes":{},"filename":"C:/Users/user-pc/Documents/Github/loanable-game-assets/.embark/contracts/shared-contracts/compound/CarefulMath.sol","originalFilename":"contracts\\shared-contracts\\compound\\CarefulMath.sol","path":"C:\\Users\\user-pc\\Documents\\Github\\loanable-game-assets\\contracts\\shared-contracts\\compound\\CarefulMath.sol","type":"file","deploymentAccount":"0x34E3b297408Ab64f3609C765eA56a545eaAe7d34","transactionHash":"0x8d0cf64c7725897a98aa4c1c6aef06a14cd531f299394a5cdac432ae4dfd3de4"};
const CarefulMath = new EmbarkJS.Blockchain.Contract(CarefulMathConfig);

export default CarefulMath;
