import React, { useState } from 'react'

const usersInfo = {
    name:"Mst Surnaly Akter",
    title:"Blue Nana",
    city:"Dhaka"
}

const Form3 = () => {

    const [users, setUsers] = useState(usersInfo);
    const {name, title, city} = users;

    const handleChange = e =>{
        const filedName = e.target.name;

        if(filedName === "name"){
            setUsers({name:e.target.value, title, city});
        }

        if(filedName === "title"){
            setUsers({name, title:e.target.value, city});
        }
 
        if(filedName === "city"){
            setUsers({name, title, city:e.target.value});
        }
    }

  return (
    <main>
    <form>
        <section>
            <label htmlFor="name">Name: </label>
            <input 
            type="text" 
            name="name" 
            id="name" 
            value={name}
            onChange={handleChange}
            />
        </section>

        <section>
            <label htmlFor="title">Title: </label>
            <input 
            type="text" 
            name="title" 
            id="title" 
            value={title}
            onChange={handleChange}
            />
        </section>

        <section>
            <label htmlFor="city">City: </label>
            <input 
            type="text" 
            name="city" 
            id="city" 
            value={city}
            onChange={handleChange}
            />
        </section>
    </form>
    <p>{title} {name} (located in  {city})</p>
    </main>
  )
}

export default Form3