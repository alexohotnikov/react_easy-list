import React from 'react';


export default ({ todos }) => {

  const filter = (type="not") => {
    switch (type) {
      case 'done':
        return todos.filter((value) => {
          return value.state === true
        }).length
      case 'continue':
        return todos.filter((value) => {
          return value.state !== true
        }).length
      default:
        return todos.length
    }
  }

  return(
    <div className = "info-block">
      <p className = 'count-element_all'>Всего задач поставленно: {filter()}</p>
      <p className = 'count-element_done'>Выполнено: {filter('done')}</p>
      <p className = 'count-element_continue'>Ожидаются: {filter('continue')}</p>
    </div>
  )
}