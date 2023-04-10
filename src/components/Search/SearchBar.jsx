import css from "../Header/Header.module.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchBar(props) {
  const navigate = useNavigate(

  )
  const [openSearchResult, setOpenSearchResult] = useState("false");

  const handleSearch = (event) => {
      event.preventDefault();
      console.log(event.target.value);
      if (searchedTerm.trim().length > 0) {
        // setOpenSearchResult(true);
        const query = event.target.query.value ;
        navigate('.search/${query}');
      }else{
        console.log('please enter a search term');
      }
    
  };

  const [searchedTerm,setSearchedTerm]= useState('')
  const closeSearch = (event) => {
    event.preventDefault();
    setOpenSearchBox(false);
  };
  
  const searchInputHandler = (event) => {
    setSearchedTerm(event.target.value)
  }

  return (
    <div className={css.container}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchedTerm}
          onChange={(event) => searchInputHandler(event)}
        ></input>
      {/* <p>search result</p> */}
      <div className={css.buttons}>
        <button type="submit">
          <BsSearch />
        </button>
        <a link="#" onClick={(event) => props.handleSearch(event,false)}>
          XXX
        </a>
      </div>
      </form>
    </div>
  );
}

export default SearchBar;
