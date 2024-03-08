import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const pk = process.env.pk || ""; 
const config: HardhatUserConfig = {
  solidity: "0.8.20",

  networks: {
    shardeum: {
      url: `https://sphinx.shardeum.org/`,
      accounts: [pk]
    },
    // mumbai: {
    //   url: `https://rpc.ankr.com/polygon_mumbai`,
    //   accounts: [pk]
    // }
  }
};

export default config;

