import React, { useState } from 'react'

const userInfo = {
    fname:"Mst Surnaly",
    lname:"Akter",
    email:"surnalyms@gmail.com"

}


const Form2 = () => {

  

    const [users, setUsers] = useState(userInfo);
    const {fname, lname, email} = users;

    const handleChange = e =>{
        let filedName = e.target.name;
        if(filedName === "fname"){
            setUsers({fname:e.target.value, lname,  email})
        }

        if(filedName === "lname"){
            setUsers({fname, lname:e.target.value, email})
        }
        if(filedName === "email"){
            setUsers({fname, lname, email:e.target.value});
        }
    }
 
  return (
    <form>
        <section>
        <label htmlFor="fname">First name</label>
            <input type="text" name="fname" id="fname" onChange={handleChange} value={fname} />
        </section>

        <section>
        <label htmlFor="lname">First name</label>
            <input type="text" name="lname" id="lname" onChange={handleChange} value={lname} />
        </section>

        <section>
        <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" onChange={handleChange} value={email} />
        </section>

        <p>{fname} {lname} ({email})</p>

     
    </form>
  )
}

export default Form2