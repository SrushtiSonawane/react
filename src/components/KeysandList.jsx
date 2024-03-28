import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <li>I have a { props.brand }</li>;
}

export function KeysandList() {
  const cars = [
    {id: 1, brand: 'Rolls Royce'},
    {id: 2, brand: 'kia'},
    {id: 3, brand: 'jaguar'}
  ];
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

