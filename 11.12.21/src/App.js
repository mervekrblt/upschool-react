import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App()
{
  const todo = [
    { id: 4, title: "Learn React", isDone: true },
    { id: 3, title: "Learn Javascript", isDone: false },
    { id: 2, title: "Learn CSS", isDone: false },
    { id: 1, title: "Learn how to learn", isDone: false },
  ]

  const [todos, setTodos] = useState(todo)
  console.log(todos)

  function addTodo(e)
  {
    e.preventDefault()
    //console.log(e.target.todo.value)
    const newTodo = { id: todos.length + 1, title: e.target.todo.value, isDone: false }
    if (!!e.target.todo.value)
    {
      setTodos(item => [newTodo, ...item])
    }
    e.target.todo.value = ""
  }

  const changeColor = (data, i) =>
  {
    const updateTodo = todos.find(todo => todo.id === i)
    updateTodo.isDone = data
    setTodos(todos.map(todo => todo.id === i ? { ...todo, isDone: data } : todo))
  }

  return (
    <div>
      <form className="row justify-content-center mt-5" onSubmit={addTodo}>
        <div className="col-auto">
          <input type="text" name='todo' className="form-control" id="todo" placeholder="Give me a todo" />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Add</button>
        </div>
      </form>

      {todos.map(item =>
      {
        return (
          <div key={item.id} className="text-center">
            <TodoItem item={item} changeColor={changeColor} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
