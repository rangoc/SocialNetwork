import React from 'react';
import Topbar from 'components/topbar/Topbar';
import Leftbar from 'components/leftbar/Leftbar';
import Feed from 'components/feed/Feed';
import Rightbar from 'components/rightbar/Rightbar';
import './profile.scss';
const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/post/3.jpeg"
                alt="cover"
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt="profile"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Dev Kappa</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;