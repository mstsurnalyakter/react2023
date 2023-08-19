import React, { useState } from 'react'

const Checkbox = () => {

    const [liked, setLiked] = useState(true);

  return (
    <search>
        <input
             type="checkbox" 
              checked = {liked}
             onChange={e => setLiked(e.target.checked)}
              />
        <label>  I liked this</label>
            
             
       
        <p>You {liked ? "liked":"did not like"} this.</p>
    </search>
  )
}

export default Checkbox;