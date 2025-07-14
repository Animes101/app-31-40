import React from 'react'
import { useState } from 'react'

const ComplatedTodoForm = (props) => {

    const {onTodoData}=props;

    const [newTodo, setNewTodo]=useState({title:'',complated:false})

    const {title,complated}=newTodo;
    const handleTodoFild=(e)=>{

        const fildName=e.target.name;

        if(fildName === 'title'){
            setNewTodo({title:e.target.value, complated})

        }else if(fildName === 'complated'){
            setNewTodo({title,complated:e.target.checked})
        }

        

    }

    const handleNewTodo=(e)=>{
        e.preventDefault();

        onTodoData(newTodo)

    }
  return (
    <div>
        <form  onSubmit={handleNewTodo} action="">
            <input onChange={handleTodoFild} value={title} type="text" name="title" placeholder='Title' id="title" />
            <input onChange={handleTodoFild} value={complated} type="checkbox" name="complated" id="" />
            <input type="submit" value="New Todo" />
        </form>
    </div>
  )
}

export default ComplatedTodoForm