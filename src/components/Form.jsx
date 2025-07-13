import React from 'react'

import  './form.css'
import { useState } from 'react'

const Form = (props) => {

    const [user, setUser]=useState({name:'', email:'',number:'',password:''})
    const {name,email,number,password}=user

    // const [name, setName]=useState('')
    // const [email, setEmail]=useState('')
    // const [number, setNumber]=useState('')
    // const [password, setPassword]=useState('')
  

    // const handleNameChange=(e)=>{

    //     setName(e.target.value)

    // }

    // const handleEmailChange=(e)=>{

    //     setEmail(e.target.value)

    // }

    // const handleNumberChange=(e)=>{

    //     setNumber(e.target.value)

    // }

    // const handlePasswordChange=(e)=>{

    //     setPassword(e.target.value)

    // }

    const handleSubmit=(e)=>{

        e.preventDefault();

        const userInfo={
            name:name,
            email:email,
            number:number,
            password:password,
        }

        props.onFromData(userInfo)

          setUser( {name:'', email:'',number:'',password:''})
        

    }

    

    const handleChange=(e)=>{

        const finldName=e.target.name;

        if(finldName==='name'){
           setUser( {name:e.target.value, email,number,password})
        }else if(finldName === 'email'){

            setUser( {name, email:e.target.value,number,password})

        }else if(finldName === 'number'){
            setUser( {name, email,number:e.target.value,password})
        }else if(finldName === 'number'){

            setUser({name, email,number,password:e.target.value})
        }
       

    }
  return (
    <div className='form'>

        {/* <form action="">
            <input onChange={handleNameChange} type="text" name="name" placeholder='name' id="name" />
            <input onChange={handleEmailChange} type="email" name="email" placeholder='email' id="email" />
            <input onChange={handleNumberChange} type="number" name="number"  placeholder='numbe' id="number" />
            <input onChange={handlePasswordChange} type="password" name="password" id="password" />
            <input onClick={handleSubmit} type="submit" value="Login" />
        </form> */} 

        <div>

            <form action="">
            <input value={name} onChange={handleChange} type="text" name="" placeholder='name' id="name" />
            <input value={email} onChange={handleChange} type="email" name="" placeholder='email' id="email" />
            <input value={number} onChange={handleChange} type="number" name=""  placeholder='numbe' id="number" />
            <input value={password} onChange={handleChange} type="password" name="" id="password" />
            <input  onClick={handleSubmit} type="submit" value="Login" />
        </form>

        </div>
    </div>

  )
}

export default Form