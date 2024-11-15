// RequestForm.js
import React, { useState } from 'react';
import axios from 'axios';

function RequestForm({ onRequestAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requiredMembers, setRequiredMembers] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await axios.post('http://localhost:5000/profile/request', {
        title,
        description,
        requiredMembers,
        location,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      onRequestAdded();
      setTitle('');
      setDescription('');
      setRequiredMembers('');
      setLocation('');
    } catch (error) {
      console.error('Failed to add request:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" placeholder="Required Members" value={requiredMembers} onChange={(e) => setRequiredMembers(e.target.value)} required />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <button type="submit">Add Request</button>
    </form>
  );
}

export default RequestForm;
