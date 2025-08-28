import React, { useState } from 'react';

function PostJob() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Posting job: ${title} for ${amount} ETH`);
    // TODO: call smart contract function here
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount in ETH"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostJob;
