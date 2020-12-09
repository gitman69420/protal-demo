import React from "react";
import InputBox from "./InputBox";

function LoginForm(){
    return(
        <div>
            <form>
                <InputBox type="text" bgt="Email-ID" title="email"/>
                <InputBox type="password" bgt="Password" title="password"/>

                <button class="log-reg-button">Next</button>
            </form>
        </div>
    );
}

export default LoginForm;