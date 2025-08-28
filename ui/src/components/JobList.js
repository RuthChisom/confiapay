import React from 'react';

function JobList() {
  // later this will fetch from contract
  const jobs = [
    { id: 1, title: 'Design a Logo', amount: '0.5 ETH' },
    { id: 2, title: 'Build a Website', amount: '2 ETH' },
  ];

  return (
    <div>
      <h2>Job List</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title} — {job.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
