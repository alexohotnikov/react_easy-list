import React from 'react';
import './styles/todoStyle.css';

export default (props) => {
  const { todos, changeSelectStatus } = props;
  return(
   <div className = 'task-wrap'>
    { todos.map(({ text, state }, idx) => 
      <p key = {idx} data-checked = {state}> 
        <input 
          type='checkbox' 
          className = "checkbox" 
          onClick = {() => {
            changeSelectStatus(idx)
          }}
          defaultChecked = {state}/>
        {text}
      </p> 
    )}

   </div>
  )
}
