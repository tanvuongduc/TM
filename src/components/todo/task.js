import React from 'react'
const Task = ( props ) => {
    let options = Object.entries(props.priority).map(([key, value]) => <option value={value} key={key}>{key}</option>);
    return (
      <div>
        <input type="text" placeholder="task name"></input>
        <select>
            {options}
        </select>
        <button onClick = { () => { props.delete(props.index); } } > Add new </button>
      </div>
    )
}

export default Task;