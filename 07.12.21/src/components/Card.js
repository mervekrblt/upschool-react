import { useState } from 'react'

function Card()
{
  const [value, setValue] = useState(10)
  const [title, setTitle] = useState({
    text: "Default Title",
    type: "Card"
  })

  function addValue()
  {
    setValue(value + 1)
  }
  function subValue()
  {
    setValue(value - 1)
  }
  function changeTitle(e)
  {
    setTitle({ ...title, text: e.target.value })
    console.log(e.target.value)
  }

  return (
    <div>
      <div className="card mb-5">
        <div className="card-body">
          <h5 className="card-title">{title.text}</h5>
          <input className="form-control" type="text" value={title.text} onChange={changeTitle} />
          <hr />
          <h6 className="card-subtitle mb-2 text-muted">{value}</h6>
          <p className="card-text"></p>
          <button className="btn btn-success" onClick={addValue}>+</button>
          <button className="btn btn-dark" onClick={subValue}>-</button>
        </div>
      </div>
    </div>

  )
}

export default Card