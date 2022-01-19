import { Link } from "react-router-dom"
const Nav = () => {
  return <>
  <ul>
    <li><Link to="/">Ana Sayfa</Link></li>
    <li><Link to="/products">Ürünler</Link></li>
    <li><Link to="/query-products">q-Ürünler</Link></li>
  </ul>
  </>
  }
  export default Nav