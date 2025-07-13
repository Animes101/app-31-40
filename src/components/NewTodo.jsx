import React, { useState } from 'react';

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: '', completed: false });
   const { title, completed } = todo;

  const handleTodo = (e) => {
    const field = e.target.name;

    console.log(field)

    if(field === 'title'){
        setTodo({title:e.target.value, completed});
    }else if(field === 'completed'){
        setTodo({title, completed:e.target.checked});
    }

  };


  const handleNewTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      completed,
    };
    props.onNewTodo(newTodo)
  };

  return (
    <div>
      <h1>NewTodo</h1>

      <form onSubmit={handleNewTodo}>
        <input
          onChange={handleTodo}
          value={title}
          type="text"
          name="title"
          id="title"
          placeholder="Todo title"
        />

        <label>
          Completed
          <input
            onChange={handleTodo}
            checked={completed}
            type="checkbox"
            name="completed"
          />
        </label>

        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
