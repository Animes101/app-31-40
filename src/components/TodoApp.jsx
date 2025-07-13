import React from 'react'

const TodoApp = (props) => {

    const {todoData}=props;

  return (
    <div>
        <h1>Todo app</h1>
        {todoData.map((item,index)=>{
            return(
                <div key={index}>
                    <h1>{item.title}</h1>
                    <h2>{item.completed ? 'yes': 'no'}</h2>
                </div>

            )
        })}
    </div>
  )
}

export default TodoApp