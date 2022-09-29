import React, { useState } from "react";
import './App.css';
import AddToList from './components/AddToList';


import ListOfTasks from "./components/ListOfTasks.js"

function App() {
  const [inputText, setInputText] = useState ("");

  const [toDo, setToDo] = useState ([]);

  return (
    <div className="App">
      <header> Lista de tarefas  </header>
      <AddToList 
        toDo={toDo} 
        inputText={inputText}
        setToDo={setToDo} 
        setInputText={setInputText}
      />
      <div>{inputText}</div>

      <ListOfTasks/>


    </div>
  );
}

export default App;
