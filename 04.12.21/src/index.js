import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {[...Array(10)].map((item, index )=> {
      return (<div>
        <h3>This is {index + 1} item</h3>
        <App customProp="merve" key={index}/>
      </div>)
    })}
  </React.StrictMode>,
  document.getElementById('root')
);

