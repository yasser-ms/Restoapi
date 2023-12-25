import { Explore } from "../styles/style";
import { useState } from "react";
import { GrFormSearch } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
function Search() {
  const [search, setsearch] = useState("");
  const navigate = useNavigate() 
  const SubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/Search/${search}`)
  };
  return (
    <Explore onSubmit={SubmitHandler}>
      <input
        type="text"
        placeholder="Type your favorite recipe"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <button>
        Search
      </button>
    </Explore>
  );
}

export default Search;
