pragma solidity 0.8.0;

contract Sender {
    function transfer(address _address, uint _amount) public payable {
        (bool status,) = _address.call{value: _amount}("");
        require(status, "Forwarded call failed.");
    }
}