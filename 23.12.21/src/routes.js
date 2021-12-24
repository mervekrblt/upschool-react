import Home from './components/Home'
import Details from './components/Details'

const routes = [
  { title: "Home", path: "/", element: Home },
  { title: "Search", path: "search/:id/details", element: Details },
]

export default routes