import React from 'react';
import ReactDOM from 'react-dom/client';
export function LogicalOperator(props){
    const cars = props.cars;
    return(
        <>
        <h1>Garage</h1>
        {cars.length > 0&&
        <h2>
            You have {cars.length} cars in your garage.
            {cars.map(car => (
  <div key={car}>
    {car}
  </div>
))}
            </h2>
            
            }
        </>
    );
}

