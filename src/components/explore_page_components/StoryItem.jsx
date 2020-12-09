import React from "react";

function StoryItem(props){
    return(
        <div className="story-item-container">
            <img className="story-item" src={props.source} alt="story-not-found" />
        </div>
    );
}

export default StoryItem;