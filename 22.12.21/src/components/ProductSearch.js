import { useLocation } from "react-router-dom"
import Product from "./Products"
import Search from "./Search"

const ProductSearch = () =>
{
  const location = useLocation()
  const urlParams = new URLSearchParams(location.search)
  const search = urlParams.get("q")

  return <>
    <Search></Search>
    <Product urlParams={search}> </Product>
  </>
}
export default ProductSearch