import React from 'react'
import TodoCard from './TodoCard'

export default function Todo({todos,setTodo}) {
  return (
    <div className='Todo'>
        <h2>Todo List</h2>
        {todos.map(element =>
        <div>
            <TodoCard name ={element.title} setTodo={setTodo} status={element.status} />
        </div> 
        )}
        <input type="text" name="" id="" />
    </div>
  )
}
