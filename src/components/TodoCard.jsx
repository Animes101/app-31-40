import React from 'react'

const TodoCard = (props) => {

    const {title,completed,id}=props.todo


    const handleDelet=(id)=>{

      props.deletTodo(id)
    }
  return (
    <div key={id}>
        <h1>{title}</h1>
        <p>{completed}</p>
        <button onClick={()=>handleDelet(id)}>Delet</button>

    </div>
  )
}

export default TodoCard