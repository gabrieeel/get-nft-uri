const { ethers } = require("hardhat");

async function main() {    
    const contractAbi = JSON.parse(process.env.CONTRACT_ABI);
    const contractAddress = process.env.CONTRACT_ADDRESS;
    const tokenId = process.env.TOKEN_ID;

    const contract = await ethers.getContractAt(contractAbi, contractAddress)

    console.log(`Contract name: ${await contract.name()}`)
    // console.log(`Symbol: ${await contract.symbol()}`);
    // console.log(`Owner: ${await contract.owner()}`);
    // console.log(`Version: ${await contract.version()}`);
    console.log(`Token URI: ${await contract.uri(tokenId)}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
