const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const rexAddress = "0x5b269675455f7C9B670226b42F16888aDe496c40"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x44D0Df1C9CCdFD2e2EdD3085B326c966765C280f"; 

async function main() {

    const myContract = await hre.ethers.getContractAt(tokenABI, rexAddress);
    const balance = await myContract.balanceOf(walletAddress); // It will return number of Rex in wallet

    for (let i = 0; i < balance; i++) {
        const rexID = await myContract.tokenOfOwnerByIndex(walletAddress, i);
        const prompt = await myContract.promptDescription(rexID);
        console.log(`NFT with rexID ${rexID.toString()} has prompt: ${prompt}`);
      }

  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });


