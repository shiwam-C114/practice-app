import React, { useState } from 'react'

export default function Profile(props) {
    const [Age, setAge] = useState(+props.age)
    const [clicked, setClicked] = useState(false)
  return (
      <div className='Profile'>
        <img src={props.img} alt="profile pic" />
        <h2>Name: {props.name}</h2>
        <h3>Age: {Age}</h3>
        <button onClick={()=>{setAge(Age+1)}}>+</button> <button onClick={()=>{setAge(Age-1)}}>-</button>
        <br />
        <button onClick={()=>{setClicked(!clicked)}}>{clicked?"hide":"show"} more details</button>
        <h2>{clicked?`Loaction: ${props.location}`:""}</h2>
        <h2>{clicked?`Organisation: ${props.organisation}`:""}</h2>
        
      </div>
  )
}