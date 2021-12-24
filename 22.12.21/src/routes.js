
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import ProductSearch from "./components/ProductSearch"
import Search from "./components/Search"

const routes = [
  { title: "Home", path: "/", element: Home, isNav: false },
  { title: "About", path: "about", element: About, isNav: true },
  { title: "Products", path: "products", element: Products, isNav: true },
  { title: "Search", path: "search", element: Search, isNav: true },
  { title: "Product Search", path: "product-search", element: ProductSearch, isNav: false }
]

export default routes