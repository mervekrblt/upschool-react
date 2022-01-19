import { useEffect, useState } from "react"
import { Placeholder } from "react-bootstrap"
import axios from "axios"

const Products = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(true)
  const url = "https://fakestoreapi.com/products"

  useEffect(() => {
    // fetch(url)
    // .then(res => res.json())
    // .then(data => {
    //   setProducts(data)
    //   setLoading(false)
    //   console.log(data)
    // })
    // .catch(err => console.log(err))
    const BASE_AXIOS = axios.create({ baseURL: "https://fakestoreapi.com"})
    BASE_AXIOS.get(url).then(data => {console.log(data.data)
    setProducts(data.data)
    setLoading(false)
    })
  }, [])
  if(isLoading) {
    return <>
    <>
  <Placeholder as="p" animation="glow">
    <Placeholder xs={12} />
  </Placeholder>
  <Placeholder as="p" animation="wave">
    <Placeholder xs={12} />
  </Placeholder>
</></>
  }
  return <>
  <ul>
    {products.map(item => <li key={item.id}>{item.title}</li>)}
  </ul>
  
  </>
  }
  export default Products