import React from "react";

function InputBox(props){
    return(
    <>
        <input class="landing-form-input" key={props.title} type={props.type} placeholder={props.bgt}></input>
    </>
    );
}

export default InputBox;