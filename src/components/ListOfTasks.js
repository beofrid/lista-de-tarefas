import React from "react";
import Task from "./Task.js"


// componente que engloba a lista de tarefas que será disposta na interface,


const ListOfTasks = ({toDo, setToDo, filteredTasks}) => {
    return(
        <div className="task-container">
            <ul className="list">     
                {filteredTasks.map(task => (
                    <Task 
                    setToDo={setToDo} 
                    task={task}
                    toDo={toDo} 
                    key={task.id} 
                    text={task.text}/>
                ))}           
                

            </ul>


            <div className="counter">

        </div>
        </div>
    );

}

export default ListOfTasks;