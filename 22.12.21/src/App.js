import './App.css';
import Nav from './components/base/Nav';
import Footer from './components/base/Footer';
import routes from './routes.js';
import { Routes, Route } from "react-router-dom";

function App() {
  //console.log(routes)
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        {
        routes.map((item, index) => < Route key={index} path={item.path} element={< item.element />}/>)
        }
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
