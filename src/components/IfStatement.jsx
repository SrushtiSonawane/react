import React from 'react';

const GreetingMessage = () => {
  const currentTime = new Date().getHours();
  let greeting;

  if (currentTime < 12) {
    greeting = 'Good morning!';
  } else if (currentTime < 18) {
    greeting = 'Good afternoon!';
  } else {
    greeting = 'Good evening!';
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <p>Welcome. Hope you have a great day!</p>
    </div>
  );
};

export default GreetingMessage;
