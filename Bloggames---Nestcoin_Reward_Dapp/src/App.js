import React, { useEffect } from "react";
import NestCoinToken from "./artifacts/contracts/NestCoinToken.sol/NestCoinToken.json";
import { ethers } from "ethers";
import Input from "./components/Input";
import Nav from "./components/Nav";

function App() {
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      fetchNestCoinToken();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNestCoinToken = async () => {
    let contractAddress = "YOUR_CONTRACT_ADDRESS";
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      NestCoinToken.abi,
      provider
    );

    // const nestCoinToken = await contract.greet();
    // console.log(greeting);
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div>
      <Nav />
      <Input />
    </div>
  );
}

export default App;
