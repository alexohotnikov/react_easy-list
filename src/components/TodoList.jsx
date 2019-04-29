import React from 'react';
import './styles/todoStyle.css';

export default (props) => {
  const { todos, changeSelectStatus } = props;
  return(
   <div className = 'task-wrap'>
    { todos.map(({ text, state }, idx) => 
      <p key = {idx} data-checked = {state} onClick = {() => {
        changeSelectStatus(idx)
      }}> 
        <input type='checkbox' className = "checkbox" checked = {state}/>
        {text}
      </p> 
    )}

   </div>
  )
}
