// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/JobEscrow.sol"; 

contract DeployJobEscrow is Script {
    function run() external {
        // Load private key from environment variable
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        // Deploy contract
        JobEscrow jobEscrow = new JobEscrow();

        console.log("JobEscrow deployed at:", address(jobEscrow));

        vm.stopBroadcast();
    }
}
