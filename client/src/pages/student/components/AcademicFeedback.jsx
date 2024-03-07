import React from 'react'
import { useState } from 'react';
const AcademicFeedback = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className='bg-white w-screen h-screen'>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default AcademicFeedback
