import React, { useState, useEffect } from "react";
import './App.css';
import AddToList from './components/AddToList';
import ListOfTasks from "./components/ListOfTasks.js"

function App() {
  const [inputText, setInputText] = useState ("");

  const [toDo, setToDo] = useState ([]);
  
  const [filter, setFilter] = useState ("all");
  
  const [filteredTasks, setFilteredTasks] = useState ([]);


  const filterObserver = (task) => {
    switch (filter)  {
      case 'completed':
        setFilteredTasks(toDo.filter(task => task.completed === true ))
        break;
      case 'uncomplete':
        setFilteredTasks(toDo.filter(task => task.completed === false ))
        break;
      default: 
        setFilteredTasks(toDo);
        break;
    }
  } 

  useEffect(()=> {
    filterObserver();}, [toDo, filter])



  return (
    <div className="App">
      <header> Lista de tarefas  </header>
      <div className="container">
        <AddToList 
        toDo={toDo} 
        inputText={inputText}
        setToDo={setToDo} 
        setInputText={setInputText}
        setFilter={setFilter}
      />

      <ListOfTasks 
      setToDo={setToDo} 
      toDo={toDo}
      filteredTasks={filteredTasks}
      />
      </div>
      


    </div>
  );
}

export default App;
