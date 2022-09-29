import React from "react";

const Task = ({text}) => {
    




    return(
        <div className="task">
            <li>
                {text}
            </li>
            <input type="checkbox"></input>
            <button>X</button>
        
        </div>
    );

}

export default Task;