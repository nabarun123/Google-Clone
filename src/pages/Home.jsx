import React from "react";
import "./Home.css";
import Search from "./Search";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-left">
          <p>About</p>
          <p>Store</p>
        </div>
        <div className="home-header-right">
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="header-body">
        <img
          src="https://www.apnavacancy.com/wp-content/uploads/2021/11/Google-Online-Work-From-Home.png"
          alt=""
        />
        <div className="input-container">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
