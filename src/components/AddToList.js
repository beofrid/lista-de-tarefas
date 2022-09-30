import React from "react";



// componente de formulário com input e seletor de status, onde coleta os dados e comandos do usuário


const AddToList = ({setInputText, inputText, toDo, setToDo, setFilter}) => {
  
  // função que observa o evento de entrada
  const inputTextObserver = (e) => {
    setInputText(e.target.value)
  };

  // função que observa o evento de submit e esvazia o input

  const submitObserver = (e) => {
    e.preventDefault();
    setToDo([
        ...toDo, 
        {text: inputText, completed: false, id: Math.random() * 1000 }
      ]
    )
       setInputText('')
  }

  // função que ativa o evento de filtro
  const filterObserver = (e) => {
    setFilter(e.target.value)

  }


 //elementos do componente
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
