import React from 'react'
import "./online.css"

export default function Online({user}) {
  return (
    <div>
     <li className="frienditem">
            <div className="profileimage">
            <img src={user.profilePicture} alt="" className="friendsprofileimg" />
            <span className="rightbaronline"></span>
            </div>
            <span className="rigtbarusername">{user.username}</span>
          </li>

    </div>
  )
}
