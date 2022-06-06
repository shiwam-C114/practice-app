import React from 'react'

export default function TodoCard(props) {
  return (
    <div className={props.status?"green":"red"}>{props.name}</div>
  )
}
