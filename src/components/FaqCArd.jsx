import React, { useState } from 'react'

const FaqCArd = ({id,question,answer}) => {

    const [toggle, setToggle]=useState(false)

  return (
    <div>
        <div>
            <h1>{question}</h1>
        <button onClick={()=> setToggle(!toggle)}>{toggle ? '-' : '+'}</button>
        </div>

        {toggle ? <p>{answer}</p>: ''}
    </div>
  )
}

export default FaqCArd