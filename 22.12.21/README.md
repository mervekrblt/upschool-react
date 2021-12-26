# Lesson 6 & 7 - 21.12.2021-22.12.2021


[DEMO	:rocket:](https://22-12-21.vercel.app/)

## Contents

- What is react router dom?
- BrowserRouter, Routes, Route, Link
- Create routes.js and define routes object in this file
- How to create dynamic routes?
- Use useNavigate(), useLocation()
- Get params from url using new URLSearchParams() and get method

## React Router Dom

- Install react-router-dom 

```js

npm install react-router-dom

```

- Create routes

```jsx

// routes.js

import Home from "./components/Home"
import About from "./components/About"

const routes = [
  { title: "Home", path: "/", element: Home, isNav: false },
  { title: "About", path: "about", element: About, isNav: true }...
]

export default routes

//App.js

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

//Nav.js

import routes from '../../routes'
import {Link} from 'react-router-dom'

const Nav = () =>
{
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
          <Link className='navbar-brand' to="/">Home</Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {routes.filter(item => item.isNav).map((item, index) =>
              <li key={index} className="nav-item">
                <Link className="nav-link active" aria-current="page" to={item.path}>{item.title}</Link>
              </li>
            )}
          </ul>
      </div>
    </nav>
  </>
}

export default Nav

```

## Dynamic route and Get params

```jsx
// Search.js

import { useNavigate } from "react-router-dom"
navigate(`/product-search/?q=${event.target.search.value}`)

// ProductSearch.js

import { useLocation } from "react-router-dom"

const location = useLocation()
const urlParams = new URLSearchParams(location.search)
const search = urlParams.get("q")

```

### Notes

- Use form `onSubmit` event to send data, dont forget to use `event.preventDefault()`
- Button element has also `type="reset` attribute
- input element has `defaultValue` attribute. Use this instead of `value`, because `value` att. needs `onChange()` event
