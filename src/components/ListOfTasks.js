import React from "react";
import Task from "./Task.js"

const ListOfTasks = ({toDo, setToDo, filteredTasks}) => {
    // console.log(toDo)
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



        </div>
    );

}

export default ListOfTasks;