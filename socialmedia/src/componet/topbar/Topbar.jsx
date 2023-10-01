import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import "./topbar.css"
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ChatIcon from '@mui/icons-material/Chat';
import Person2Icon from '@mui/icons-material/Person2';
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Bons App</span>
      </div>

      <div className="topbarCenter">
        <div className="Searchbar">
          <FaSearch className="searchIcons" />
          <input
            type="text"
            placeholder="search here"
            className="SearchInput"
          />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconsItem">
            <Person2Icon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconsItem">
            <ChatIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconsItem">
            <CircleNotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarimg" />
      </div>
    </div>
  );
}
