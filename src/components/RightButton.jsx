import React from "react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function RightButton(){
    return(
        <div className="button-container">
        <button className="button-right">
            <ChevronRightIcon />
        </button>
        </div>  
    );
}

export default RightButton;