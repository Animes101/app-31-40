import React from 'react'

const TodoCard = (props) => {

    const {title,complated}=props.todo
  return (
    <div>
        <h1>{title}</h1>
        <p>{complated}</p>


    </div>
  )
}

export default TodoCard