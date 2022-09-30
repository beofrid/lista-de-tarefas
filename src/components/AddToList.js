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
        <div className="form">
        <input className="inputTask" type="text" value={inputText}  onChange={inputTextObserver} placeholder="Adicione uma tarefa"></input>
        <button className="submitTask" type="submit" onClick={submitObserver}>+</button>

        <select onChange={filterObserver} className="status">
          <option value="all">Todas as tarefas</option>
          <option value="completed">Tarefas completas </option>
          <option value="uncomplete">Tarefas pendentes</option>




        </select>
        </div>
      </form>


  );
}

export default AddToList;
