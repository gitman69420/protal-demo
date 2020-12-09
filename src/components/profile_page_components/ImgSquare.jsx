import React, { useState } from "react";

function ImgSquare(props) {

  return( 
    <img
      class="content-data-img"
      src={props.source}
      alt="missing-data"
      height="300px"
      width="300px"
    />
  );
}

export default ImgSquare;
