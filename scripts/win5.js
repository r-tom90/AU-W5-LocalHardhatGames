// add the game address here and update the contract name if necessary
const gameAddr = "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:
  //! Need to get an allowance first than be able to mint to the balance.
  await game.giveMeAllowance(10000);
  await game.mint(10000);
  const tx = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
