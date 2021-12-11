import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import UserCard from './components/UserCard';

function App()
{
  const userData = [
    { id: 1, name: "Merve" },
    { id: 2, name: "Melis" },
    { id: 3, name: "Olcay" },
    { id: 4, name: "Bektaş" }
  ]
  const [word, setWord] = useState({
    title: ""
  })

  function inputHandler(e) {
    console.log(e.target.value)
    setWord({...word, title: e.target.value})
  }
  return (
    <div className="App">
      <Counter />

      <input onChange={inputHandler} type="text" className="form-control w-50 mx-auto my-5" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>

      {userData.filter(user => user.name.includes(word.title)).map(user =>
      {
        return (
          <div key={user.id} className="col">
            <UserCard user={user} />
          </div>
        )
      }
      )}
    </div>
  );
}

export default App;
