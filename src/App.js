
import './App.css';
import {  useState } from 'react';
import { Button } from '@mui/material';

function App() {
  
  const [todo,settodo]=useState()
  const [alltodos,setalltodos]=useState([])

  const createList=()=>{
    setalltodos([...alltodos,todo])
    settodo("")

  }
  const clear = ()=>{
    setalltodos([])
  }
  const clearOne= ()=>{
    alltodos.pop()
  }
  
  
  return (
    <div className="App">
      <input onChange={(e)=>{settodo(e.target.value)}} type="text" placeholder="Search" /><br/><br/>
      <Button onClick={createList} variant="contained">+</Button>
      <Button onClick={clear} variant="contained" color="success">
  Clear All
</Button>
      
      {alltodos.map((todo)=>{
        return <div>
          <h1>{todo}</h1>
          
          <Button onClick={clearOne} variant="contained" color="success">x</Button>
            
           
          
          </div>
      })}
    </div>
  );
}

export default App;
