import React, { useState } from 'react';

const FormExample = () => {
  // Define state variables to store form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Event handler to update form data as user types
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send data to server
    console.log('Form submitted with data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          name="username" 
          value={formData.username} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
