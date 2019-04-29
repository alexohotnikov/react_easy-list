import React from 'react';


export default (props) => {
  const addItem = (e) => {
    e.preventDefault()
    props.addMethod(e.target.querySelector('input').value)
  }
  return(
    <form onSubmit= {(e) => addItem(e)}>
      <input className = 'input-todo' maxLength="15"/>
    </form>
  )
}