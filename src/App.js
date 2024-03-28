import React from "react";
import './App.css';


import IfStatement from "./components/IfStatement";
import AsyncAwait from "./components/AsyncAwait";
import { Promises } from "./components/Promises";
import { LogicalOperator } from "./components/LogicalOperator";
import Button from "./components/Button";
import  {KeysandList} from "./components/KeysandList";
import Event from "./components/Event";
import Form from "./components/Form";
 



const App = () => {
  const cars = ['Rolls Royce', 'kia', 'jaguar'];
  return (
    <div>
      <Form />
      <Event />
      <KeysandList />
      <Button />
      <LogicalOperator cars={cars}/>
      <IfStatement />,
      <Promises />
      <AsyncAwait />
    </div>
  )
}
export default App;







