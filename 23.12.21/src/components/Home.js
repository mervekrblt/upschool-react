import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () =>
{
  const [data, setData] = useState([])
  useEffect(() =>
  {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => response.json())
      .then(films => setData(films))
  }, [])

  return <>
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map(film => <div className="col" key={film.id}>
          <div className="card h-100">
            <Link to={`search/${film.id}/details`} className="">
              <img src={film.image} className="card-img-top" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title">{film.title}</h5>
              <Link to={`search/${film.id}/details`} className="btn btn-primary">Details</Link>
            </div>
          </div>
        </div>)}

      </div>
    </div>

  </>
}
export default Home