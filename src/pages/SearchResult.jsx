import { useParams } from "react-router-dom";
import TitleBar from "../components/TitleBar/TitleBar";
import {useSelector} from 'react-redux'
import ProductCard from "../components/UI/ProductCard";

function SearchResult() {
  const {query} = useParams();
  const data = useSelector(state=> state.product.products)
  const matchItems = data.filter(item=> item.name.toLowerCase().includes(query))
  console.log(matchItems)
  console.log(data)
  return ( <>
  <TitleBar title='Search'/>
  <div>Search Result for "{query}"</div> 

 { matchItems.map(item=> <ProductCard item={item}/>)}
 
  </>
  );
}

export default SearchResult;