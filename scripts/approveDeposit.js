const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const tokenAddress = "0x5ddF5B40e6880fa07cFd58626D6cCC15D04409c2"; 
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0xf773B5bB9844516A49375d17cD6592784C32d0c1"; 


async function main() {

    const myNFTContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);
    const transferNFTs = 3;

    for (let i = 0; i < transferNFTs; i++) {

      const tokenID = await myNFTContract.tokenOfOwnerByIndex(walletAddress, i);
      // Approve the FxPortal Bridge to transfer the NFT on your behalf

      const approveTx = await myNFTContract.approve(fxERC721RootAddress, tokenID);
      await approveTx.wait();
  
      console.log('Approval confirmed for NFT with Token ID:', tokenID.toString());
  
      // Deposit the NFT to the FxPortal Bridge
      const depositTx = await fxContract.deposit(
        tokenAddress,
        walletAddress,
        tokenID,
        "0x6556"
      );
      await depositTx.wait();
  
      console.log("NFT with Token ID:", tokenID.toString(), "deposited to the FxPortal Bridge");
    }
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });