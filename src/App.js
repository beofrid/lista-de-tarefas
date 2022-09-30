import React, { useState, useEffect } from "react";
import './App.css';
import AddToList from './components/AddToList';
import ListOfTasks from "./components/ListOfTasks.js"

function App() {
  //definição das constantes que funcionam com alteração de estado da aplicação

  //ações relacionadas à entrada de dados no input da aplicação
  const [inputText, setInputText] = useState ("");

  //ações relaconadas ao conjunto de tarefas
  const [toDo, setToDo] = useState ([]);
  
  //ações relacionadas ao mecanismo de filtro de satus da tarefa
  const [filter, setFilter] = useState ("all");
  
  // ações relacionadas às tarefas filtradas
  const [filteredTasks, setFilteredTasks] = useState ([]);


// Buscar tarefas armazenadas no local storage, acabou resultando em erro, mantive ele para futuros ajustes :')
  // useEffect(() =>{   

  //   getLocal ()
  // }, []);


  
// Executar o filtro e salvar no local storage cada vez que uma tarefa for adicionada ou o seletor de status sofrer alteração
  useEffect(()=> {
//função que faz a filtragem das tarefas completa ou não
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
    } ;
    filterObserver();

// tentativa de salvar as tarefas no local storage, note que o objeto chega ser armazenado
// CONTUDO no recarregar da página se perde a informação local storage
//não tive tempo o suficiente para descobrir onde estou erranndo
  const localSave = () => {
    localStorage.setItem("toDo", JSON.stringify(toDo))
  }
   localSave ();

  }, [toDo, filter])

 
 
//display de componentes
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
