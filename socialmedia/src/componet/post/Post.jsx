import React, { useState } from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";

export default function Post({ Post }) {
  const [like,setlike] =useState(Post.like)
  const [isliked,setisliked] = useState(false)

  const clickHandler = () =>{
    setlike(isliked ? like-1 : like+1)
    setisliked(!isliked) 
  }
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            <img src={Users.filter((u) => u.id === Post.userId)[0].profilePicture}
 alt="" className="postimg" />
            <span className="postname">
              {Users.filter((u) => u.id === Post.userId)[0].username}
            </span>
            <span className="postdate"> {Post.date}</span>
          </div>
          <div className="posttopright">
            <MoreVertIcon />
          </div>
        </div>

        <div className="postcenter">
          <span className="posttext">{Post?.desc}</span>
          <img src={Post.photo} alt="" className="postcenterimg" />
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
            <img src="assets/like.png" alt="" className="like" onClick={clickHandler} />
            <img src="assets/heart.png" alt="" className="like" onClick={clickHandler} />
            <span className="postlikes">{like}</span>
          </div>
          <div className="postbottomright">
            <span className="postcomments">{Post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
