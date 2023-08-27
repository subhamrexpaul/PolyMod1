# Transferring REX (NFTs) from Georli to Mumbai using fxPortal's ERC721 Bridge

This project showcases the functionality of a bridge designed to facilitate the seamless transfer of digital assets such as NFTs from the Georli Network to the Mumbai Network, utilizing the fxPortal solution.

This project is used to demonstrate the purpose of `fxPortal Bridge` and how it can be used to transfer digital assets i.e. NFTs from Ethereum chain to Polygon Chain. To make this project scalable, `ERC721` is used.

## Project Overview
The primary objective of this project is to provide a practical demonstration of the capabilities of the fxPortal Bridge and its application in transferring digital assets, particularly NFTs, from the Ethereum chain (Georli Network) to the Polygon Chain (Mumbai Network). To ensure the scalability of the project, the ERC721 token standard is employed.

## Getting Started
### Installing

Begin by cloning this repository and installing all the necessary dependencies:

* Execute the command npm i to install the required dependencies.
* Create a .env file and input your PRIVATE_KEY within.
* Replace the placeholders walletAddress and tokenAddress with your respective public addresses.

### Running the Program

To make the project operational, you need to follow these steps:
1. Deploy the contract by executing the following command:
```
$ npx hardhat run scripts/deploy.js --network goerli
```
This command will deploy the contract and provide you with an address. This address should be used in other scripts.

2. Mint the REX (NFTs) by running the following command:
```
$ npx hardhat run scripts/mint.js --network goerli
```
Adjust the values for `CIDs` and `prompt` based on your REXs.

3. Generate the promptDescription function by running the given command:

```
$ npx hardhat run scripts/getPrompt.js --network goerli
```

4. Approve and deposit the NFTs to fxPortal by running the script:
```
 $ npx hardhat run scripts/approveDeposit.js --network goerli
```
5. After approximately 15-25 minutes, the NFTs will be transferred to the Mumbai Testnet. You can verify your wallet's balance by executing the following command:
```
 $ npx hardhat run scripts/getBalance.js --network mumbai
```

## Assistance

Before executing these commands, ensure that you have both `GeoETH` and `MATIC` tokens in your account. If needed, you can claim these tokens using faucets.

## Contributing

🛡️ This repository treasures personal assignments; contributions are reserved. Yet, share ideas through issues - your voice matters! 🌟

## Author

SUBHAM PAUL

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the MIT License. You are free to modify and distribute the code for personal and educational purposes.


