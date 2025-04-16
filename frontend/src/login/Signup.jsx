import { useRef } from "react";
// import "./Login.css";
import "./Signup.css"
import { useNavigate, Link } from "react-router-dom";
import videoSrc from './12345.mp4';


function Signup() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (name || email || password) {
      let result = await fetch("http://localhost:3000/login", {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Signup sucessfully");
      navigate("/");
    } else {
      alert("plese fill all the input box");
    }
  };

  return (
    <>
    <video autoPlay muted loop className=" vid">
        <source src={videoSrc} type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
      </video>
      <div className="Login">
        <Link to="/">
         
        </Link>

        <div className="LoginContainer box">
          <h1>Sign Up</h1>
          <form>
            <h3>Name</h3>
            <input
              type="text"
              placeholder="Your Name"
              ref={nameRef}
              required
            ></input>
            <h3>Email</h3>
            <input
              type="email"
              placeholder="Your Mail Id"
              ref={emailRef}
              required
            ></input>
            <h3>Password</h3>
            <input
              type="password"
              placeholder="Your Password"
              ref={passwordRef}
              required
            ></input>
            <button className="LoginButton" onClick={handleSubmit}>
              Submit
            </button>
          </form>
          <p>
            By Continuing, you agree to Medizon's Condition of Use and Privacy
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;