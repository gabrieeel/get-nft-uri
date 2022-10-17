/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require("@nomiclabs/hardhat-waffle")

module.exports = {
  defaultNetwork: "polygon",
  networks: {
    polygon: {
      url: process.env.API_RPC_URL
    }
  },
  solidity: "0.8.17",
};
