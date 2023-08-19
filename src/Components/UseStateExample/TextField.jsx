import React, { useState } from 'react'

const TextField = () => {

    const [texts, setTexts] = useState("Mst Surnaly Akter");

  return (
    <section>
        <input type="text" name="text" id="text" value={texts} onChange={e => setTexts(e.target.value)}  />
        <p>You typed: {texts}</p>
        <button onClick={() => setTexts("Mst Surnaly Akter")}>Reset</button>
    </section>
  )
}

export default TextField