import { useQuery } from "react-query";
import { fetchProducts } from "../api";

const QueryProducts = () => {
  const {isLoading,isSuccess, data, isError, ...query} = useQuery("products", fetchProducts, {retry: false})
  console.log(query);
  if(isLoading) {
    return <>
    Loading
    </>
  }
  if(isError) {
    return <>
    Error
    </>
  }
  return <>
  <ul>
    {data?.data.map(item => <li key={item.id}>{item.title}</li>)}
  </ul></>;
};
export default QueryProducts;
