import React from 'react'
import TodoCard from './TodoCard'

export default function Todo(props) {
  return (
    <div className='Todo'>
        <h2>Todo List</h2>
        {props.todos.map(element => 
            <TodoCard name ={element.title} status={element.status} />
        )}
    </div>
  )
}
