import React from "react";
import ProfilePane from "./profile_page_components/ProfilePane";
import ContentData from "./profile_page_components/ContentData.jsx";
import Header from "./Header";

function Content() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <ProfilePane />
        <div className="cover-image">
          <img
            src="https://pickyourtrail.com/blog/wp-content/uploads/2020/05/SIngapore-Skyline-1-scaled.jpeg"
            alt="cover-image"
          />
        </div>
        <ContentData />
      </div>
    </div>
  );
}

export default Content;
