import React from "react";
// import Task from "./Task.js"


const AddToList = ({setInputText, inputText, toDo, setToDo, setFilter}) => {
  const inputTextObserver = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value)
  };
  const submitObserver = (e) => {
    e.preventDefault();
    setToDo([
        ...toDo, 
        {text: inputText, completed: false, id: Math.random() * 1000 }
      ]
    )
    // {console.log(Task.index, "task")}
       setInputText('')
  }
  const filterObserver = (e) => {
    setFilter(e.target.value)

  }


 
  return (
   
      <form> 
        <input  type="text" value={inputText}  onChange={inputTextObserver} placeholder="Adicione uma tarefa"></input>
        <button type="submit" onClick={submitObserver}>Adicionar tarefa</button>

        <select onChange={filterObserver}>
          <option value="all">Todas as tarefas</option>
          <option value="completed">Tarefas completas </option>
          <option value="uncomplete">Tarefas pendentes</option>




        </select>
      </form>


  );
}

export default AddToList;
