// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {
    }

    function mint(address to) public {
        _mint(to, 200 * 10 ** uint(decimals()));
    }
}
