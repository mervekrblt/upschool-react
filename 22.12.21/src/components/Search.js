import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Search = () => {
  let navigate = useNavigate();

  const [q, setQ] = useState("")

  const formHandler = (event) => {
    event.preventDefault()
    setQ(event.target.search.value)
    //console.log(q)
    navigate(`/product-search/?q=${event.target.search.value}`)
  }
return <>
  <form onSubmit={formHandler}>
    <label htmlFor="search" className="my-5">3 5 Ürün İçinde Arama Yapın</label>
    < input type = "text"
    className = "form-control w-50 mx-auto"
    name = "search"
    id = "search"
    defaultValue={q}
    />
    <button className="btn btn-danger my-5 mx-2" type="reset">Reset</button>
    <button className="btn btn-primary my-5" type="submit">Search</button>
  </form>
</>
}
export default Search