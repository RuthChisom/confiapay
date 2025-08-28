import { ethers } from "ethers";
import abi from "./JobEscrow.json"; // ABI from Foundry build

const contractAddress = "0x41E151B9b18d06D1e7848Ad624f20c2e39aD5137";

export function getContract(signerOrProvider) {
  return new ethers.Contract(contractAddress, abi, signerOrProvider);
}
