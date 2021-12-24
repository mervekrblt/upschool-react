import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import routes from "./routes"

function App() {
  return (
    <div className="">
      <Nav/>
      <Routes>
        {routes.map(route => <Route path={route.path} key={route.title} element={<route.element/>}></Route> )}
      </Routes>
    </div>
  );
}

export default App;
