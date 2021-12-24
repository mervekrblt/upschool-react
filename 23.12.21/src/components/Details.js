import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
const Details = (props) =>
{
  const location = useLocation()

  //get film's id from url
  const id = location.pathname.split("/")[2]

  //fetch film based on id
  const [film, setFilm] = useState({})
  useEffect(() =>
  {
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then(response => response.json())
      .then(film => setFilm(film))
  }, [id])
  console.log(film)
  return <>
    <div className="card bg-dark text-white">
      <img src={film.movie_banner} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title text-uppercase fw-bold">{film.title}</h5>
        <p className="card-text w-50">{film.description}</p>
      </div>
    </div>
  </>
}
export default Details