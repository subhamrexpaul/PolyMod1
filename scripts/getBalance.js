const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const tokenAddress = "0x4b28297797019aCdcA1BB68b7F21e6BC1A2bfeBE"; // place your erc721 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xf773B5bB9844516A49375d17cD6592784C32d0c1"; // place your public address for your wallet here

async function main() {

    const myContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const count = await myContract.balanceOf(walletAddress); // It will return number of NFTs in wallet

    console.log("You now have: " + count.toString() + " NFTs in your Wallet!");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });