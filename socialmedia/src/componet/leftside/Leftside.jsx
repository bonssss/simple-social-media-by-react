import React from "react";
import "./leftside.css";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FeedIcon from "@mui/icons-material/Feed";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import WorkIcon from "@mui/icons-material/Work";

import VideoFileIcon from "@mui/icons-material/VideoFile";
import Friends from "../friends/Friends";
import { Users } from "../../dummyData";

export default function Leftside() {
  return (
    <div className="Leftside">
      <div className="leftsidewrapper">
        <ul className="leftsidelist">
          <li className="leftsideitem">
            <FeedIcon className="sidebaricon" />
            <span className="sidebarlistitem">Feeds</span>
          </li>
          <li className="leftsideitem">
            <ChatIcon className="sidebaricon" />
            <span className="sidebarlistitem">Chats</span>
          </li>
          <li className="leftsideitem">
            <VideoFileIcon className="sidebaricon" />

            <span className="sidebarlistitem">videos</span>
          </li>
          <li className="leftsideitem">
            <GroupsIcon className="sidebaricon" />

            <span className="sidebarlistitem">Groups</span>
          </li>
          <li className="leftsideitem">
            <BookmarkIcon className="sidebaricon" />

            <span className="sidebarlistitem">BookMarks</span>
          </li>
          <li className="leftsideitem">
            <QuestionMarkIcon className="sidebaricon" />

            <span className="sidebarlistitem">Questions</span>
          </li>
          <li className="leftsideitem">
            <WorkIcon className="sidebaricon" />

            <span className="sidebarlistitem">Jobs</span>
          </li>
          <li className="leftsideitem">
            <AccountBoxIcon className="sidebaricon" />

            <span className="sidebarlistitem">User</span>
          </li>
        </ul>
        <button className="leftsidebutton">showmore</button>
        <hr className="liftsideline" />
        <ul className="leftsidefriend">
          {Users.map(u=>(<Friends  key={u.id} user={u}/>))}
        
         
         
        </ul>
      </div>
    </div>
  );
}
