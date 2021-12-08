import { useState } from 'react/cjs/react.development';
import './App.css'
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App()
{
  const [card, setCard] = useState(1)
  function addCard()
  {
    setCard(card + 1)
  }


  return (
    <div className="App">
      <Navbar></Navbar>
      <button className="btn btn-primary mb-5" onClick={addCard}>Add Card</button>

      <div className="container">
        <div className="row">

          {[...Array(card)].map((item, index) =>
          {
            return (
              <div className="col-md-3">
                <Card key={index} />
              </div>
            )
          })}

        </div>
      </div>

      < Footer show={false}/>
    </div>
  );
}

export default App;