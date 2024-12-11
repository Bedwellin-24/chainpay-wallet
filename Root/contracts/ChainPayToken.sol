// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChainPayToken {
    string public name = "ChainPayToken";
    string public symbol = "CPT";
    uint8 public decimals = 18;
    uint public totalSupply;

    mapping(address => uint) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint value);

    constructor(uint _initialSupply) {
        totalSupply = _initialSupply * (10 ** uint(decimals));
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}
