import React, { Component } from 'react';
import { render } from 'react-dom';

import TodoList from './components/TodoList.jsx';
import InputField from './components/InputField';
import TaskInfo from './components/TaskInfo'
import {Button} from '@material-ui/core'

import './style.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      todos: []
    }
    if (localStorage.getItem('todos')) {
      this.state.todos = JSON.parse(localStorage.getItem('todos'))._stated
    }
  }

  changeSelectStatus(index = -1) {
    if( index != -1) {
      this.setState((state) => {
        return({
          todos: state.todos.map((item, idx) => {
            if ( idx === index) {
              return({
                ...item,
                state: !item.state,
              })
            } else {
              return item
            }
          })
        })
      }, () => this.updateLocale())
    }
  }

  updateLocale() {
    console.log('update', this.state)
    localStorage.setItem('todos', JSON.stringify({ _stated: this.state.todos }))
  }
  addTodo(text="") {
    if (text.length === 0) return;
    const { todos } = this.state
    const _stated =  [...todos, { id: todos.length ,state: false, text }]
    this.setState({ todos: _stated })
    localStorage.setItem('todos', JSON.stringify({ _stated }))
  }

  removeItemsAll() {
    this.setState({ todos: [] }) 
    localStorage.removeItem('todos')
  }

  render() {
    const { todos } = this.state
    return(
      <div className = "app-container">
        <p className = "title"> План на сегодня: </p>
        <InputField addMethod = {(e) => this.addTodo(e)}/>
        <TodoList 
          todos = {todos}
          changeSelectStatus = { (index) => this.changeSelectStatus(index) }
          />

      <TaskInfo todos = {todos}/>
      <Button 
        onClick = {() => this.removeItemsAll()}
        variant = "contained"
        color = "primary"
      > Удалить все! </Button>
      </div>
    )
  };
};

render(<App/>, document.querySelector('#root'));