import React from "react";
import "./profile.css";

import Topbar from "../../componet/topbar/topbar";
import Leftside from "../../componet/leftside/Leftside";
import Rightside from "../../componet/rightside/Rightside";
import Feed from "../../componet/feed/feed";

export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Leftside />
        <div className="profileright">
          <div className="profiletighttop"> 
          <div className="profilecover">
            <img src="assets/post/3.jpeg" alt="" className="profilecoverimg" />
            <img src="assets/person/7.jpeg" alt="" className="profilecoveruser" />
          </div>
          <div className="proinfo">
            <h3 className="profileinfo"> Adam  Adem</h3>
            <span className="profiledesc"> Lorem, ipsum dolor sittempore lr veritatis es?</span>
          </div>
          
          </div>
          <div className="profiletightbottom">
            <Feed />

            <Rightside Profile />
          </div>
        </div>
      </div>
    </div>
  );
}
