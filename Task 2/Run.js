import { MetaMaskSDK } from '@metamask/sdk';
import Web3 from 'web3';
import ABI from './ABI.json' assert  { type: "json" };

const MMSDK = new MetaMaskSDK({dappMetadata: {name: "aave connect"}});
await MMSDK.init();
const ethereum = MMSDK.getProvider();

await ethereum.request({ method: 'eth_requestAccounts', params: [] });

let aave_contract_address = '0xC558DBdd856501FCd9aaF1E62eae57A9F0629a3c';
const web3 = new Web3(ethereum);
const contract = new web3.eth.Contract( 
    ABI, 
    aave_contract_address 
);

contract.methods.deposit().send({from: '0xf93d9092b1b69f2788843d4afd4452a7f4881334', gas: 5000000, value: 1000000000000000}).then(console.log)
.catch(console.log);