import React from "react";
import Button from "../../component/atoms/button/Custombutton"
import "./Login.scss";

const Login = () => {
  return (
    <>
      <div class="login-page">
        <div class="form">
          <div class="title"> 
          Family Health Care
          <hr class="line" />
          <h4>Login</h4>
           </div>
          <form class="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <div>
              <div class="message">
                <a href="#">Save UN & PW in your device</a>
              </div>
              <div class="message">
                <a href="#">Forgot password</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
