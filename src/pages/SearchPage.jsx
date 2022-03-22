import React from "react";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage-header">
        <Link to="/">
          <img
            className="searchPage-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          />
        </Link>
        <div className="searchPage-headerBody">
          <Search hidebuttons />
          <div className="searchPage-options">
            <div className="searchPage-optionLeft">
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">Maps</Link>
              </div>
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="searchPage-optionRight">
              <div className="searchPage-option">
                <Link to="/all">Settings</Link>
              </div>
              <div className="searchPage-option">
                <Link to="/all">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPage-results">
        <p className="searchPage-resultCount">
          About 200 results shows in 0.87 sec for hello
        </p>
        <div className="searchPage-result">
          <a href="" target="_blank">
            <img
              className="searchPahe-resultImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt=""
            />
            <p>www.link.com</p>
          </a>
          <a className="searchPage-resultTitle" href="" target="_blank">
            <h2>Title</h2>
          </a>
          <p className="searchPage-resultDescription">Descripion</p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
