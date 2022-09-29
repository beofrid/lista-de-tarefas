import React from "react";
import Task from "./Task.js"

const ListOfTasks = ({toDo}) => {
    console.log(toDo)
    return(
        <div className="task-container">
            <ul className="list">     
                {toDo.map(task => (
                    <Task key={task.id} text={task.text}/>
                ))}           
                

            </ul>



        </div>
    );

}

export default ListOfTasks;