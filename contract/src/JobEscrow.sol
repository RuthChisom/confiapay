// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract JobEscrow {
    struct Job {
        address employer;
        address worker;
        uint256 amount;
        bool accepted;
        bool completed;
        bool paid;
    }

    uint256 public jobCount;
    mapping(uint256 => Job) public jobs;

    event JobPosted(uint256 indexed jobId, address employer, uint256 amount);
    event JobAccepted(uint256 indexed jobId, address worker);
    event JobCompleted(uint256 indexed jobId);
    event FundsReleased(uint256 indexed jobId, address worker, uint256 amount);

    // Employer posts a job and locks funds
    function postJob() external payable returns (uint256) {
        require(msg.value > 0, "Funds required");
        jobCount++;
        jobs[jobCount] = Job(msg.sender, address(0), msg.value, false, false, false);
        emit JobPosted(jobCount, msg.sender, msg.value);
        return jobCount;
    }

    // Worker accepts the job
    function acceptJob(uint256 jobId) external {
        Job storage job = jobs[jobId];
        require(!job.accepted, "Already accepted");
        require(job.worker == address(0), "Already has a worker");
        job.worker = msg.sender;
        job.accepted = true;
        emit JobAccepted(jobId, msg.sender);
    }

    // Employer marks as completed
    function markCompleted(uint256 jobId) external {
        Job storage job = jobs[jobId];
        require(msg.sender == job.employer, "Only employer can mark complete");
        require(job.accepted, "Not accepted yet");
        job.completed = true;
        emit JobCompleted(jobId);
    }

    // Employer releases funds
    function releaseFunds(uint256 jobId) external {
        Job storage job = jobs[jobId];
        require(msg.sender == job.employer, "Only employer can release");
        require(job.completed, "Not marked complete");
        require(!job.paid, "Already paid");

        job.paid = true;
        payable(job.worker).transfer(job.amount);
        emit FundsReleased(jobId, job.worker, job.amount);
    }
}
