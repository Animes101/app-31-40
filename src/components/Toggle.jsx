import React, { useState } from 'react'
import { tuple } from 'yup';

const Toggle = () => {

    const [toggle, setToggle]=useState(true);


    const handleShow=()=>{

        setToggle(true);

    }

    const handleHiden=()=>{

        setToggle(false);
    }


  return (
    <div>
        <h1>Togle app</h1>

         {toggle ? <p style={{color:'red', background:'gray'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, nobis nulla reprehenderit ipsa saepe dolorum quo repudiandae eveniet facilis! At vitae consequatur dolorum impedit expedita accusantium? Quam illo dolores labore!

         </p>: ''}
         {toggle ?<button onClick={handleHiden}>hidden</button>:   <button onClick={handleShow}>Show</button>}


    </div>
  )
}

export default Toggle