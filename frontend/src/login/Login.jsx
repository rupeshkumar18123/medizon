


import { useRef } from "react";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './login.css'; // Assuming you have CSS file for styling
import { Link,useNavigate } from 'react-router-dom';

function Login() {

 
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

   
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email || password) {
      let result = await fetch("https://medizon-backend.vercel.app/api/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("login sucessfully"+{result});
      navigate("/");
      console.log(result);
      const data = await result.json();
      console.log(data);
      if (data.msg === "successful_login") {
        const loginButton = document.querySelector("#LoginButton");
        if (loginButton) {
          loginButton.textContent = data.data || "user"; // Assuming the response contains the user's name
          loginButton.style.border = "none";
          loginButton.style.background = "none";
          loginButton.style.cursor = "default";
          loginButton.removeEventListener("click", handleSubmit);
        }
      }

    } else {
      alert("plese fill all the input box");
    }
  };



  return (
    <div className="login-container">

      <div className="vid">
          <lottie-player
            src="https://lottie.host/cd6f307b-3465-4241-98a2-5cf1b06e4d12/0On4nB4CeC.json"
            background="#FFFFFF"
            speed={1}
            style={{ height: "100vh" }}
            loop=""
            autoPlay=""
            direction={1}
            mode="normal"
          />
        </div>
      <div className="card1 box">
        <h2>Login</h2>
        <div className="input-container">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input  type="text"
              placeholder="Your email"
              ref={emailRef}
              required />
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <input type="password"
              placeholder="Your Password"
              ref={passwordRef}
              required />
        </div>
        <div className='l1'>
        
        <button className="login-button" onClick={handleSubmit}>Login</button>
        <Link to={'/signup'} className="login-button t10">
          sign up
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

