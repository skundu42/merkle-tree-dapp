import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",

  networks: {
    shardeum: {
      url: `https://sphinx.shardeum.org/`,
      accounts: [``]
    },
    mumbai: {
      url: `https://rpc.ankr.com/polygon_mumbai`,
      accounts: [``]
    }
  }
};

export default config;

