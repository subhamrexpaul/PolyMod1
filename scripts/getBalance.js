const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const rexAddress = "0x0F05e21Aad1A4516c5fD639C67215EF504033BEe"; // place your erc721 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x44D0Df1C9CCdFD2e2EdD3085B326c966765C280f"; // place your public address for your wallet here

async function main() {

    const myContract = await hre.ethers.getContractAt(tokenABI, rexAddress);
    const count = await myContract.balanceOf(walletAddress); // It will return number of NFTs in wallet

    console.log("You now have: " + count.toString() + " REXs in your Wallet!");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });