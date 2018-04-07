const GradientToken = artifacts.require("GradientToken");
const TokenAuction = artifacts.require("TokenAuction");
const util = require("util");
const fs = require("fs");
const path = require("path");
const writeFile = util.promisify(fs.writeFile);

module.exports = async function(deployer) {
  const gradientToken = await deployer.deploy(GradientToken);
  const addresses = {
    tokenAddress: GradientToken.address
  };

  deployer.deploy(TokenAuction, tokenAddress)

  await writeFile(
    path.join(__dirname, "..", "front", "src", "addresses.json"),
    JSON.stringify(addresses)
  );
};
