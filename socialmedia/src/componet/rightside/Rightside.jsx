import React from "react";
import "./right.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightside({ Profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdaycotainer">
          <img src="assets/gift.png" alt="" className="rightimg" />
          <span className="righttext">
            <b>adem</b> and other 3 persons birthday
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="ads" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="friendslist">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = ()=>{
    return(
      <>
      <h4 className="rightsidetitle">User profile</h4>
      <div className="rightsideinfo">
        <div className="rightsideinfoitem">
          <span className="rightsidekey">City:</span>
          <span className="rightsidevalue">Ethiopia</span>
        </div>
        <div className="rightsideinfoitem">
          <span className="rightsidekey">From:</span>
          <span className="rightsidevalue">Ethiopia</span>
        </div>
        <div className="rightsideinfoitem">
          <span className="rightsidekey">Martial status:</span>
          <span className="rightsidevalue">Single</span>
        </div>
      </div>

      </>
    )

  }
  return (
    <div className="Rightside">
      <div className="rightwrapper">
    {Profile ? <ProfileRightbar />: <HomeRightBar />}
      </div>
    </div>
  );
}
