import products from '../products'
import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom"

const Product = (props) =>
{
  const { urlParams } = props
  const url = useLocation()
  //console.log(url.pathname)

  let allProducts;

  if (url.pathname === "/products")
  {
    allProducts = products.filter(item => item.title.includes(""))
  } else
  {
    allProducts = products.filter(item => item.title.includes(urlParams))
  }

  return <>
    {allProducts.length === 0 && <Link to="/search" className='btn btn-warning'>Try Again</Link>}
    <div className="container">
      <div className="row">
        {
          allProducts.map((item, index) => (
            <div className="col-sm-3 mb-2" key={item.id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={`https://picsum.photos/id/${item.id}/300/200`}
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>

  </>
}
export default Product