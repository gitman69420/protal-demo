import React from "react";
import StoriesBar from "./explore_page_components/StoriesBar";
import ExplorePanelContent from "./explore_page_components/ExplorePanelContent";
import Header from "./Header";

function ExplorePage(){
    return(
        <div>
            <Header />
            <div className="main-content">
                <StoriesBar />
                <ExplorePanelContent />
            </div>
        </div>
    );
}

export default ExplorePage;