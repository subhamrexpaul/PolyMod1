// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    mapping(uint256 => string) private tokenPrompts;

    constructor() ERC721("NFTVerse", "NFTs") {}

    function setPrompt(uint256 tokenId, string memory prompt) external onlyOwner {
        tokenPrompts[tokenId] = prompt;
    }

    function promptDescription(uint256 tokenId) external view returns (string memory) {
        return tokenPrompts[tokenId];
    }

    function mint(address , string memory ctoid) external onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _mint(to, tokenId);
        tokenPrompts[tokenId] = cid;
        _tokenIdCounter.increment();
    }
}
