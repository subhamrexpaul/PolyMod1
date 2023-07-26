const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const tokenAddress = "0xd29b26F664f44ac794659242E64551fc99450F27"; // place your public address for your wallet here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x0215C3BF05d1114b3A9D496F91d8999ea1643796"; // place your erc721 contract address here

async function main() {

    const myContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const count = await myContract.balanceOf(walletAddress); // It will return number of NFTs in wallet

    for (let i = 0; i < count; i++) {
        const tokenID = await myContract.tokenOfOwnerByIndex(walletAddress, i);
        const prompt = await myContract.promptDescription(tokenID);
        console.log(`NFT with TokenID ${tokenID.toString()} has prompt: ${prompt}`);
      }

  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });


