import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import routes from "./routes";

function App() {
  const [isDark, setDark] = useState(false);
  
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={
              route.path === "/" ? (
                <route.element isDark={isDark} setDark={setDark} />
              ) : (
                <route.element />
              )
            }
          ></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
