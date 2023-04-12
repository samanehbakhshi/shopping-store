import { useParams } from "react-router-dom";
import TitleBar from "../components/TitleBar/TitleBar";

function SearchResult() {
  const {query} = useParams();
  return ( <>
  <TitleBar title='Search'/>
  <div>Search Result for "{query}"</div> 
 
  </>
  );
}

export default SearchResult;