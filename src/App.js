import React from "react";
import './App.css';
import Promises from "./components/Promises";
import AsyncAwait from "./components/AsyncAwait";

const App = () => {
  return (
    <div style={{
      display: 'flex', flexDirection: 'row'
      
    }}>
      <Promises/>
      <AsyncAwait />
    </div>
  )
}
export default App;







