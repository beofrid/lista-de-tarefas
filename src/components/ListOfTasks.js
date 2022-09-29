import React from "react";
import Task from "./Task.js"

const ListOfTasks = () => {
    return(
        <div className="task-container">
            <ul className="list">                
                <Task/>

            </ul>



        </div>
    );

}

export default ListOfTasks;