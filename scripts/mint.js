const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
require('dotenv').config()

const rexAddress = "0x5b269675455f7C9B670226b42F16888aDe496c40"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x44D0Df1C9CCdFD2e2EdD3085B326c966765C280f";   

async function main() {

    const rexData = [
      {
        cid: "Qmaw6bCRFeWmzLHjHVotcHSZTn3s1H25xXvHkMCi2uFRos",
        prompt: "MCU Indian Superhero",
      },
      {
        cid: "QmR84chCuWRApoo1wte9KXAVwqdtZEsKsvyUVwjNdDx1EY",
        prompt: "Ancient man using laptops",
      },
      {
        cid: "Qmehcd1Dt9VarkzRndqw9Vo7i426LVvuaYsBpMa9M6j9QV",
        prompt: "Indian Spiderman",
      },
      {
        cid: "QmeTm3ote8FW1uPh7iS9Uz7zdPhnELxqxLvCmJZA9uPgG2",
        prompt: "Loki lifting mjonir ",
      },
      {
        cid: "Qmd4rZnUZ3VsFs3pei53wUkM7AS22GePFFdKdqZof6iihC",
        prompt: "Shaktiman",
      }
    ]

    const myContract = await hre.ethers.getContractAt(tokenABI, rexAddress);
    let rexID = 0;
    for(const {cid, prompt} of rexData){
      // Minting NFTs
      const tx = await myContract.mint(walletAddress, cid);
      await tx.wait();
      console.log("NFT minted with CID: ", cid, " To: ", walletAddress);

      // Setting Prompts
      const setPromptTx = await myContract.setPrompt(rexID, prompt);
      await setPromptTx.wait();

      console.log(`Prompt set for NFT with tokenID ${rexID.toString()}!`);
      rexID++;
    }

  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });