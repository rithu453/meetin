import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [rollNo, setRollNo] = useState('');
  const [isRollNoValid, setIsRollNoValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateRollNo = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/validate-rollno', { rollNo });
      
      if (response.data.isValid) {
        setIsRollNoValid(true);
        setErrorMessage('');
      } else {
        setIsRollNoValid(false);
        setErrorMessage(response.data.message || 'Roll number not found. Please register.');
      }
    } catch (error) {
      console.error('Error validating roll number:', error);
      setIsRollNoValid(false);
      setErrorMessage('Failed to validate roll number. Please try again later.');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering user with:', { rollNo, username, password });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="rollNo">Roll Number:</label>
          <input
            type="text"
            id="rollNo"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
          <button type="button" onClick={validateRollNo}>
            Check Roll Number
          </button>
        </div>
        
        {isRollNoValid === false && <p className="error">{errorMessage}</p>}
        {isRollNoValid && <p className="success">Roll number is valid!</p>}

        {isRollNoValid && (
          <div>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Register</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;
