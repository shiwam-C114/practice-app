import React, { useState } from 'react'

export default function Profile(props) {
    const [Age, setAge] = useState(+props.age)
  return (
      <div className='Profile'>
        <div>Profile</div>
        <img src={props.img} alt="profile pic" />
        <h2>Name: {props.name}</h2>
        <h3>Age: {Age}</h3>
        <button onClick={()=>{setAge(Age+1)}}>+</button> <button onClick={()=>{setAge(Age-1)}}>-</button>
        <br />
        <button onClick={()=>{}}>show more detail</button>
        
      </div>
  )
}