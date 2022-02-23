import React from 'react'
import Todo from './Todo'

function List(props) {

  const displayTasks = props.tasks.map((element, index) => {
    return <Todo task={element} key={index} />
  })
  return (
    <div>

    </div>
  )
}

export default List