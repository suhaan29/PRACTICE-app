import Form from "./components/FORM/form";
import "./App.css"
import Display from "./components/DISPLAY/display";
import { useState } from "react";
const DUMMY = [
  'Need To Exercise',
  'Complete HomeWork'
]

function App() {

  const [list, setList] = useState(DUMMY);
 

  const getTask = (inputs) => {
      const newInput = inputs.input;
      console.log(newInput);
      setList((prevDate) => {
        return [newInput, ...prevDate];
      })
  }

  const deleteItemHandler = (index) => {
        setList((prev) => {
          const arr =  prev.splice(index, 1 );
          if(prev.length === 0)
          {
            return [];
          }
          return [prev];
        })
  }

  return (
    <div className="app">
      <Form getInputs = {getTask}/>
      <div className = "boxContainer">
       
      {list.length > 0 && list.map((item ,idx) => ( <Display key = {idx} task = {item} index = {idx} deleteItem = {deleteItemHandler} />))}
      
      </div>
    </div>
  );
}

export default App;
