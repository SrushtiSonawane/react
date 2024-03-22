import React from 'react';
import Car from './Car';

function Car1() {
  return (
    <div>
      <h1>My Cars</h1>
      <Car brand="Ford" model="Mustang" />
      <Car brand="Tesla" model="Model S" />
    </div>
  );
}

export default Car1;
