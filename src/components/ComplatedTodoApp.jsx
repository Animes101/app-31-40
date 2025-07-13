import React from 'react'
import TodoCard from './TodoCard'

const ComplatedTodoApp = (props) => {

    const {todosData}=props


  return (
    <div>
        {todosData.map((items)=> <TodoCard todo={items} key={items.id} />)}


    </div>
  )
}

export default ComplatedTodoApp