import { useState } from 'react'


import './App.css'
import Child from './components/Child'
import Form from './components/Form'
import TodoApp from './components/TodoApp'
import NewTodo from './components/NewTodo'
import ComplatedTodoApp from './components/ComplatedTodoApp'
import ComplatedTodoForm from './components/ComplatedTodoForm'




   const initialTodos = [
  { title: "Learn React", completed: false },
  { title: "Build a Todo App", completed: false },
  { title: "Master JavaScript", completed: true },
]; 


const Cotodos = [
  {
    id: 1,
    title: "Learn React",
    completed: false,
  },
  {
    id: 2,
    title: "Build a Todo App",
    completed: true,
  },
  {
    id: 3,
    title: "Master JavaScript",
    completed: false,
  },
];


function App() {

  const [userInfo, setUserInfo]=useState([])
  const [coTodos, SetCoTodos]=useState(Cotodos)

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


        <div>
          <h1>COMPLATED TODO APP</h1>
          <ComplatedTodoApp  todosData={coTodos} />
          <ComplatedTodoForm />
        </div>
      </div>
    </>
  )
}

export default App
