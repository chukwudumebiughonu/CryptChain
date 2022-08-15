require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Ei1He5HLvwDHjFUEtCzAYRIF1k4xLpx5',
      accounts: ['502cc8d96c5c77478178c6312e82351384d0f5b0405556652cce7d33a1175ac9']
    }
  }
}

// Ei1He5HLvwDHjFUEtCzAYRIF1k4xLpx5
// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
// };

// https://eth-goerli.g.alchemy.com/v2/Ei1He5HLvwDHjFUEtCzAYRIF1k4xLpx5