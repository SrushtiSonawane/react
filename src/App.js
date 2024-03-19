import React from "react";
import './App.css';

import Header from "./Header";
import Student from "./Student";
import Counter from "./Counter";

import AlphabetList from "./AlphabetList";
import StudentTable from "./Studentdata";


//import Car from "./Car";
function app(){
  return(
    <div>
      <Header />
      <Student/>
      <Counter/>
      <StudentTable />
      <AlphabetList />
      
    </div>
  );

}
export default app;






/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/











