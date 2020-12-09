import React from "react";
import RightButton from "../RightButton";
import ExploreImage1 from "./ExploreImage1.jsx";
import ExploreImage2 from "./ExploreImage2.jsx";
import ExploreImage3 from "./ExploreImage3.jsx";
import ExploreImage4 from "./ExploreImage4.jsx";

function ExplorePanelCategory(props) {
  return (
    <div className="explore-panel">
      <h1 className="explore-category-title">{props.title}</h1>
      <div className="explore-category-div">

        <ExploreImage1 source={props.links[0].url}/>

        <div style={{ width: "226px" }}>
          <ExploreImage2 source={props.links[1].url}/>
          <ExploreImage3 source={props.links[2].url}/>
        </div>

        <ExploreImage4 source={props.links[3].url}/>

        <ExploreImage1 source={props.links[0].url}/>

        <div style={{ width: "226px" }}>
          <ExploreImage2 source={props.links[1].url}/>
          <ExploreImage3 source={props.links[2].url}/>
        </div>

        <ExploreImage4 source={props.links[3].url}/>

        <ExploreImage1 source={props.links[0].url}/>

        <div style={{ width: "226px" }}>
          <ExploreImage2 source={props.links[1].url}/>
          <ExploreImage3 source={props.links[2].url}/>
        </div>

        <ExploreImage4 source={props.links[3].url}/>

        {/* <RightButton /> */}
        
      </div>
    </div>
  );
}

export default ExplorePanelCategory;
