import React from "react";

const Task = ({text, task, setToDo, toDo }) => {
    
    const deleteTask = () => {
        setToDo(toDo.filter((el) => el.id !== task.id ))
        // console.log(task)
 }

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



    return(
        <div className="task">
            <li className={`${task.completed ? "completed" : " "}`}>
                {text}

            </li>
            
            <button onClick={completeTask}>V</button>
            <button onClick={deleteTask}>X</button>
        
        </div>
    );

}

export default Task;