import { useState } from "react"

const Form = props =>
{
  const {itemHandler} = props
  const [name, setName] = useState("")
  const [piece, setPiece] = useState(0)
  const [price, setPrice] = useState(0)

  const getName = (e) => {
    setName(e.target.value)
  }
  const getPiece = (e) =>
  {
    setPiece(e.target.value)
  }
  const getPrice = (e) =>
  {
    setPrice(e.target.value)
  }
  const groceryData = () => {
    const item = {
      name,
      piece,
      price
    }
    itemHandler(item)
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Name</label>
          <input type="text" onChange={getName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </div>

      <div className="col-md-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Piece</label>
          <input type="number" onChange={getPiece} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </div>

      <div className="col-md-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Price</label>
          <input type="number" onChange={getPrice} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </div>
      <div className="row mb-2">
        <button className="btn btn-success col-sm-3
        mx-auto" onClick={groceryData}>Add Item</button>
      </div>
      
    </div>
  )
}

export default Form