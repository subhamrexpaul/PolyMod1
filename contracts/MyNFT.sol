// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _rexIdCounter;

    mapping(uint256 => string) private rexPrompts;

    constructor() ERC721("SubhamVerse", "Rex") {}

    function setPrompt(uint256 RexID, string memory prompt) external onlyOwner {
        rexPrompts[RexID] = prompt;
    }

    function promptDescription(uint256 RexID) external view returns (string memory) {
        return rexPrompts[RexID];
    }

    function mint(address to , string memory cid) external onlyOwner {
        uint256 RexID = _rexIdCounter.current();
        _mint(to, RexID);
        rexPrompts[RexID] = cid;
        _rexIdCounter.increment();
    }
}
