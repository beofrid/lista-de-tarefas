import React from "react";

// componente de cada tarefa disposta na inferface


const Task = ({text, task, setToDo, toDo }) => {

// ação de usuário para deletar uma tarefa
    const deleteTask = () => {
        setToDo(toDo.filter((el) => el.id !== task.id ))
 }

 // ação de usuário para marcar uma tarefa como concluida

    const completeTask = () => {
        setToDo(toDo.map((item) => {
            if(item.id === task.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }
        ))
    }


//retorno dos elementos do componente

    return(
        <div className="task">
            <li className={`${task.completed ? "completed" : " "}`}>
                {text}
            
            </li>
            <button className={`buttonTask  ${task.completed ? "completed" : " "}`} onClick={completeTask}>V</button>
            <button className={`buttonTask  ${task.completed ? "completed" : " "}`} onClick={deleteTask}>X</button>
           
        
        </div>
    );

}

export default Task;