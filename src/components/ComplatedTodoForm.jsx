import React from 'react'
import { useState } from 'react'

const ComplatedTodoForm = () => {
    const [newTodo, setNewTodo]=useState({title:'',complated:false})

    const {title,complated}=newTodo;
    const handleTodoFild=(e)=>{
      

        setNewTodo({...newTodo,[e.target.name]:e.target.value})

        

    }

    const handleNewTodo=(e)=>{
        e.preventDefault();

        console.log(title, complated)

    }
  return (
    <div>
        <form  onSubmit={handleNewTodo} action="">
            <input onChange={handleTodoFild} value={title} type="text" name="title" placeholder='Title' id="title" />
            <input onChange={handleTodoFild} value={complated} type="checkbox" name="" id="" />
            <input type="submit" value="New Todo" />
        </form>
    </div>
  )
}

export default ComplatedTodoForm