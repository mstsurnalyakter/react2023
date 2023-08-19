import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("Taylor");
    const [age, setAge] = useState(42);
  return (
    <div>
        <input 
        type="text" 
        value={name} 
        onChange={e => setName(e.target.value)}
        />
        <br /><br />

        <button onClick={() => setAge(age => age + 1)}>Increment age</button>
      <p>Hello, {name}. You are {age}.</p>

    </div>
  )
}

export default Form