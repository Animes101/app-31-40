import { useState } from 'react'


import './App.css'
import Child from './components/Child'
import Form from './components/Form'
import TodoApp from './components/TodoApp'
import NewTodo from './components/NewTodo'




   const initialTodos = [
  { title: "Learn React", completed: false },
  { title: "Build a Todo App", completed: false },
  { title: "Master JavaScript", completed: true },
]; 


function App() {

  const [userInfo, setUserInfo]=useState([])

  const [todos ,setTodos]=useState(initialTodos)

  const loadFormData=(data)=>{

    setUserInfo([...userInfo,data]);

    console.log(userInfo)

  }

  const handleNewTodo=(neData)=>{

    setTodos([...todos, neData])

    console.log(neData)


  }



  return (
    <>
      <div>
        <h1>Login</h1>
        {/* <Child  onFromData={loadFormData} /> */}


        <div>
          <NewTodo onNewTodo={handleNewTodo} />
          <TodoApp todoData={todos} />
        </div>
      </div>
    </>
  )
}

export default App
