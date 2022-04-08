async function main() {

	const [deployer] = await ethers.getSigners();

	console.log(
	"Deploying contracts with the account:",
	deployer.address
	);

	console.log("Account balance:", (await deployer.getBalance()).toString());

	const NestCoinToken = await ethers.getContractFactory("NestCoinToken");
	const nestCoinToken = await NestCoinToken.deploy();

    await nestCoinToken.deployed();

	console.log("NestCoinToken deployed at:", nestCoinToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
	console.error(error);
	process.exit(1);
  });