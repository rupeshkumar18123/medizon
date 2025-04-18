import { useRef } from "react";
// import "./Login.css";
import "./Signup.css"
import { useNavigate, Link } from "react-router-dom";
// import videoSrc from './12345.mp4';


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
      let result = await fetch("https://medizon-backend.vercel.app/api/register", {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Signup sucessfully"+{result});
      navigate("/");
      const data = await result.json();
      if (data.msg === "success") {
        const loginButton = document.querySelector("#LoginButton");
        if (loginButton) {
            loginButton.textContent = name; // Assuming the response contains the user's name
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
    <>
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