import React from 'react'
import TodoCard from './TodoCard'

const ComplatedTodoApp = (props) => {

    const {todosData,deletTodo}=props


  return (
    <div>
        {todosData.map((items)=> <TodoCard  deletTodo={deletTodo} todo={items} key={items.id} />)}


    </div>
  )
}

export default ComplatedTodoApp