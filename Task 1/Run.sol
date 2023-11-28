pragma solidity 0.8.0;
import "./Test.sol";
import "./Sender.sol";

contract Run{
    function runTransfer(address _delegated_address, address _final_wallet_address, uint _amount) external{
        Test testContract = Test(0x320297Cf39e3cFc72F10f576Ee7b9c587a98E712);
        testContract.transferFunds(_delegated_address, abi.encodeWithSelector(Sender.transfer.selector, _final_wallet_address, _amount));
    }
}