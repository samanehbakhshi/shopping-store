import { useParams } from "react-router-dom";

function SearchResult() {
  const {query} = useParams();
  return ( <>
  <div>Search Result for "{query}"</div> 
 
  </>
  );
}

export default SearchResult;