const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const rexAddress = "0x5b269675455f7C9B670226b42F16888aDe496c40"; 
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0x44D0Df1C9CCdFD2e2EdD3085B326c966765C280f"; 


async function main() {

    const myNFTContract = await hre.ethers.getContractAt(tokenABI, rexAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);
    const transferNFTs = 3;

    for (let i = 0; i < transferNFTs; i++) {

      const RexID = await myNFTContract.tokenOfOwnerByIndex(walletAddress, i);
      // Approve the FxPortal Bridge to transfer the NFT on your behalf

      const approveTx = await myNFTContract.approve(fxERC721RootAddress, RexID);
      await approveTx.wait();
  
      console.log('Approval confirmed for NFT with Token ID:', RexID.toString());
  
      // Deposit the NFT to the FxPortal Bridge
      const depositTx = await fxContract.deposit(
        rexAddress,
        walletAddress,
        RexID,
        "0x6556"
      );
      await depositTx.wait();
  
      console.log("NFT with Token ID:", RexID.toString(), "deposited to the FxPortal Bridge");
    }
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });