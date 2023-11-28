# Assignment

## Task 1

Files description:
- Test.sol contains the code of the deployed smart contract.
- Sender.sol contains the code which will be called by the deployed smart contract(that contains Testnet BNB to be transferred) through delegateCall.
- Run.sol contains the code which calls the transferFunds method of the deployed smart contract at given address.

To transfer the Testnet BNB available in a contract to your BSC address, please follow the below mentioned steps:
- Deploy the Sender.sol smart contract.
- Deploy the Run.sol smart contract.
- Call the runTransfer method of the deployed Run smart contract passing address of the deployed Sender.sol smart contract, along with your BSC address(to which BNB has to be transferred) and amount.

## Task 2

Files description:
- Run.js contains the code which execute a transaction using Metamask which interacts with Aave’s smart contract and deposits ERC20 token to the Aave’s smart contract.
- ABI.json contains the Application Binary Interface of the Aave's smart contract.

Please follow the below mentioned steps to execute a transaction using script in JS using Metamask:
- Install the metamask dependency in Node using:

    `npm i @metamask/sdk`
- Install the web3 dependency in Node using:

    `npm i web3`
- Run the script using following command:

    `node Run.js`

- Please connect the metamask wallet following the instructions given on runtime and approve the transaction.