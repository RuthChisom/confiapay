import React from 'react';

function MyJobs() {
  // later this will filter by connected wallet
  const myJobs = [
    { id: 1, title: 'Translate Document', status: 'Pending' },
    { id: 2, title: 'Create Mobile App', status: 'Completed' },
  ];

  return (
    <div>
      <h2>My Jobs</h2>
      <ul>
        {myJobs.map((job) => (
          <li key={job.id}>
            {job.title} — {job.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyJobs;
