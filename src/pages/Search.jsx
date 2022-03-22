import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Search({ hidebuttons }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="searchIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Google or type a URL"
        />
        <MicIcon />
      </div>

      {!hidebuttons && (
        <div className="search-buttons">
          <Button onClick={search} type="submit" variant="outline">
            Google Search
          </Button>
          <Button type="submit" variant="outline">
            I am feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
