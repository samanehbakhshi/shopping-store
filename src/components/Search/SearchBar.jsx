import css from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {GrClose} from "react-icons/gr";
function SearchBar(props) {
  const navigate = useNavigate();
  const [openSearchResult, setOpenSearchResult] = useState("false");

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchedTerm.trim().length > 0) {
      const query = event.target.query.value;
      navigate(`search/${query}`);
    } else {
    }
  };

  const [searchedTerm, setSearchedTerm] = useState("");

  const searchInputHandler = (event) => {
    setSearchedTerm(event.target.value);
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSearch} className={css['search__box']}>
        <div className={css['input_box']}>
          <input
            type="text"
            value={searchedTerm}
            onChange={(event) => searchInputHandler(event)}
            name="query"
            placeholder="Search Here..."
          ></input>
        </div>
        <div className={css.buttons}>
          <button type="submit">
            <BsSearch />
          </button>
          <a link="#" onClick={(event) => props.handleSearchBox(event, false)}>
            <GrClose/>
          </a>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
