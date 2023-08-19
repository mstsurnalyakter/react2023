import React, { useState } from 'react'

const Counting = () => {
    const [count, setCount] = useState(0);

   
  return (
    <section>
        <button onClick={() => setCount(count + 1)}>You pressed me {count} time</button>
    </section>
  )
}

export default Counting