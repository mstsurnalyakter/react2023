import React, { useState } from 'react'

const FAQ = ({id, title, desc}) => {
    const [toggle, setToggle] = useState(false);
  return (
    <article className='faq'>

        <section>
        <h4>{title}</h4>
        <button onClick={e => setToggle(!toggle)}>{toggle ? "-":"+"}</button>
        </section>

       {toggle &&  <p className='para'>{desc}</p>}

    </article>
  )
}

export default FAQ