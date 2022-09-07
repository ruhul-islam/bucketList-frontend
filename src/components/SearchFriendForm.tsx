import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchFriendForm.css";

const SearchFriendForm = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    navigate(`/users/${search}`);
  };
  return (
    <form className="SearchFriendForm" onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>Search for Friends</button>
    </form>
  );
};

export default SearchFriendForm;
