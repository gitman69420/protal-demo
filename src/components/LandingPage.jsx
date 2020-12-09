import React, { useState } from "react";
import LoginForm from "./landing_page_components/LoginForm";
import RegisterForm from "./landing_page_components/RegisterForm";

function LandingPage() {
  const [form, swapForm] = useState(false);

    const registerButton = () => {
        swapForm(true);
    }

    const loginButton = () => {
        swapForm(false);
    }


  return (
    <div style={{ height: "100%, width: 100%" }}>
      <div className="form-align">
        <div className="landing-logo">
          <p>
            <b>PRO</b>ducing <b>TAL</b>ents
          </p>
        </div>
        <div className="landing-tagline">
          <p>Join the new talent community</p>
        </div>
        <div className="form-container">
          <button
            style={{ float: "left", margin: "10px", paddingLeft: "30px",paddingRight: "30px" }}
            className={form? "log-reg-button-active":"log-reg-button-inactive"}
            onClick = {registerButton}
          >
            Login
          </button>
          <button
            style={{ float: "right", margin: "10px", paddingLeft: "30px",paddingRight: "30px" }}
            className={form? "log-reg-button-inactive": "log-reg-button-active"}
            onClick = {loginButton}
          >
            SignUp
          </button>
          <div className="form-inputs-container">
            {form? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
