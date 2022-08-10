import React from 'react'

export default function TodoCard(props) {
  return (
    <div className={props.status?"green":"red"}>
        {props.name}
        <input type="checkbox" name="" id="" checked={props.status} onChange={(e)=>{props.setTodo(e)}} />

    </div>
  )
}
