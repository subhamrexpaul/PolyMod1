const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const tokenAddress = "0x5ddF5B40e6880fa07cFd58626D6cCC15D04409c2"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xf773B5bB9844516A49375d17cD6592784C32d0c1"; 

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


