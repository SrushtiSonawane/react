import React from 'react';

const Button = ({ isPrimary }) => {
  return (
    <button
      style={{
        backgroundColor: isPrimary ? 'blue' : 'red',
        color: isPrimary ? 'white' : 'black',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {isPrimary ? 'Primary Button' : 'Secondary Button'}
    </button>
  );
};

export default Button;

