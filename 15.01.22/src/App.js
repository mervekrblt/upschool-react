import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./reduxStore/counter";
import { addTask, removeTask } from "./reduxStore/tasks";

function App() {
  //const state = useSelector(state => state)
  const counter = useSelector((state) => state.counter);
  const tasks = useSelector((state) => state.tasks);
  //console.log(state)
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    console.log(e.target.task.value);
    dispatch(addTask(e.target.task.value));
    e.target.task.value = ""
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <hr />
      <form onSubmit={formHandler}>
        <input type="text" name="task" />
        <button type="submit">Add Task</button>
      </form>
      <hr />
      <ul>
        {tasks.map((item) => (
          <li onClick={() => dispatch(removeTask(item.id))} key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
