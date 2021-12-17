import './App.css';
import Navbar from './components/Navbar';
import FormCard from './form/FormCard';

function App() {
  const addGroceryItem = () => {
    console.log("app.js")
  }
  return (
    <div>
      <Navbar />
      <FormCard onAddGroceryItem={addGroceryItem}></FormCard>
    </div>
  );
}

export default App;
