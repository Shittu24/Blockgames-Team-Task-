//SPDX-License-Identifier:MIT

pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NestCoinToken is ERC20, Ownable {
    constructor() ERC20("NestCoin Token", "NCT") {
      _mint(msg.sender, 1000 * 10 ** 18);
    }

    function distributeRewards(address[] memory _addresses  ) public onlyOwner {
        for(uint256 i = 0; i < _addresses.length; i++) {
            _mint(_addresses[i], 10);
        }
    }
}