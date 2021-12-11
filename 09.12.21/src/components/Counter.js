import { useState } from "react"

function Counter () {
  // const [count, setCount] = React.useState(0) import React from 'react'
  const [count, setCount] = useState(0)

  function countHandler(e) {
    // console.log(e.target.name)
    let nameOfButton = e.target.name
    if (nameOfButton === "add") {
      return setCount(count + 1)
    }else if( nameOfButton === "zero") {
      return setCount(0)
    }else {
      return setCount(count - 1)
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" style={{ color: "red" }}>Summation with one function</h5>
              <p className="card-text">{count}</p>
              <button name="add" className="btn btn-success m-2" onClick={countHandler}>Add</button>
              <button 
              name="zero" 
              className="btn btn-warning m-2" 
              onClick={countHandler}
              >
                Zero
              </button>
              <button 
              name="sum" 
              className="btn btn-danger m-2" 
              onClick={countHandler}
              disabled={count <= 0 ? true : false}
              >
                Sum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter