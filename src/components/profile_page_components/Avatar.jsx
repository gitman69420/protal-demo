import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import RestoreIcon from "@material-ui/icons/Restore";

function Avatar() {
  return (
    <div className="avatar-container">
      <div className="image-container">
        <img
          className="avatar-image"
          src="https://image.shutterstock.com/image-photo/head-shot-portrait-smiling-middle-260nw-1339318991.jpg"
          alt="profile-img"
        />
      </div>
      <div className="profile-text">
        <h1>FirstName LastName</h1>
        <p>Talent/Occupation</p>
        <button className="follow-button">Follow</button>
        <div className="profile-stats">
          <p>
            <b>100</b> followers
          </p>
          <p>
            <b>100</b> posts
          </p>
          <p>
            <b>100</b> buzzes
          </p>
        </div>
      </div>
      <div className="profile-icons-container">
        <div className="center-wrapper">
          <div className="profile-icons">
            <PersonIcon
              style={{
                color: "#cceb05",
                fontSize: "large",
                height: "2.25rem",
                width: "2.25rem",
              }}
            />
          </div>

          <div className="profile-icons">
            <CalendarTodayIcon
              style={{
                color: "#cceb05",
                fontSize: "large",
                height: "2.25rem",
                width: "2.25rem",
              }}
            />
          </div>
          <div className="profile-icons">
            <BusinessCenterIcon
              style={{
                color: "#cceb05",
                fontSize: "large",
                height: "2.25rem",
                width: "2.25rem",
              }}
            />
          </div>

          <div className="profile-icons">
            <RestoreIcon
              style={{
                color: "#cceb05",
                fontSize: "large",
                height: "2.25rem",
                width: "2.25rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
