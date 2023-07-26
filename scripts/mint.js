const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
require('dotenv').config()

const tokenAddress = "0xd29b26F664f44ac794659242E64551fc99450F27"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x0215C3BF05d1114b3A9D496F91d8999ea1643796"; 

async function main() {

    const nftData = [
      {
        cid: "QmWdrcSKQBR6MxNcXW7HSQruDssjmNE7S59sjNQiH956s4",
        prompt: "A geek solving coding problems",
      },
      {
        cid: "QmRmVnh6RieKNVcaq6mFxcsSmcPm66wK5jNRfXHJ77P1EF",
        prompt: "Ancient man trying laptops",
      },
      {
        cid: "QmTF9y1QJ5KRhinAoucBda7zGrdFF2F38vDTshf1gNJQJQ",
        prompt: "Ancient men playing Multiplayer games",
      },
      {
        cid: "QmTcGoBXUDLFMpTUo379KM925mqhBd8LKMCMwXFAL4LknX",
        prompt: "Blockchain ruling the world in 2025 ",
      },
      {
        cid: "QmeQNnNFi4BF7dv4kwkwkEvE7xxj2b9tVHu7YKuiMpw8Ku",
        prompt: "Ethereum fighting with polygon",
      }
    ]

    const myContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    let tokenID = 0;
    for(const {cid, prompt} of nftData){
      // Minting NFTs
      const tx = await myContract.mint(walletAddress, cid);
      await tx.wait();
      console.log("NFT minted with CID: ", cid);

      // Setting Prompts
      const setPromptTx = await myContract.setPrompt(tokenID, prompt);
      await setPromptTx.wait();

      console.log(`Prompt set for NFT with tokenID ${tokenID.toString()}!`);
      tokenID++;
    }

  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });