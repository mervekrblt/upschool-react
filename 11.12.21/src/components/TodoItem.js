//import { useState } from "react"

function TodoItem (props) {
  const { item, changeColor } = props
  //const { changeColor } = props

  //const [data, setData] = useState(item.isDone)
  //console.log(props, item)
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <p onClick={() => changeColor(!item.isDone, item.id)} className={`border w-50 ${item.isDone && "bg-success"}`} >{item.title}</p>
        </div>
      </div>
    </div>
  )
}

export default TodoItem