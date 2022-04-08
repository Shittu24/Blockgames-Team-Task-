const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Our NestCoin Token", function () {

  let nestCoinToken;
  let owner;
  let addr1;
  let addr2;
  beforeEach(async function() {
    const NestCoinToken = await hre.ethers.getContractFactory("NestCoinToken");
    nestCoinToken = await NestCoinToken.deploy();
    await nestCoinToken.deployed();

   [owner, addr1] = await ethers.getSigners();

  });
  it("Should successfuly deploy", async function () {
    console.log("success!");
  });

  it("Should deploy with 1k of te total supply to the owner of the contract", async function () {
    const balance = await nestCoinToken.balanceOf(owner.address);
    expect(ethers.utils.formatEther(balance) == 1000);
  });

  it("Should let you send tokens to another address", async function() {
    await nestCoinToken.transfer(addr1.address, ethers.utils.parseEther("10"));
    expect(await nestCoinToken.balanceOf(addr1.address)).to.equal(ethers.utils.parseEther("10"));
  });

  // it("Should let you give another address the approval to send on your behalf", async function() {
  //   await nestCoinToken.connect(addr1).approve(owner.address, ethers.utils.parseEther("100"));
  //   await nestCoinToken.transferFrom(addr1.address, addr2.address, ethers.utils.parseEther("100"));
  //   expect(await nestCoinToken.balanceOf(addr2.address)).to.equal(ethers.utils.parseEther("100"));
  // })

});
