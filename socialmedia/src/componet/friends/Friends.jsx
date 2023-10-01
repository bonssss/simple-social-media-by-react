import React from 'react'
import "./friends.css"

export default function Friends({user}) {
  return (
    <div>
          <li className="leftsidefriendlist">
            <img src={user.profilePicture} alt="" className="friendimg" />
            <span className="friendname">{user.username}</span>
          </li>
    </div>
  )
}
