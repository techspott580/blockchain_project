import React from "react";
import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    mobile: "",
    password: "",
  });
  const [warning, setWarning] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { mobile, password } = value;
    console.log(mobile+" "+password)
    try {
      const response = await fetch("http://localhost:8080/searchMember", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile, password }),
      });
  
      const data = await response.json();  
      if (response.status === 200 && data.success) {
        const { id, Token } = data;
        const decodedToken = JSON.parse(atob(Token.split(".")[1]));
        const userRole = decodedToken.role;
        localStorage.setItem("token", Token);
        localStorage.setItem("role", userRole);
        localStorage.setItem("id", id);
        if (userRole === "admin") {
          navigate("/app");
          console.log("add admin page here");
        } else if (userRole === "member") {
          const userDataJson = JSON.stringify(data.data)
          // navigate("/user");
          console.log("add userpage here")
          // navigate(`/user/${userDataJson}`); // pass data as parameter
        } else {
          console.error("Invalid user role:", userRole);
          setWarning("Login failed. Invalid credentials.")
        }
      } else {
        // Handle various error cases
        if (response.status === 401) {
          setWarning("Token is missing. Please try again.")
        } else {
          setWarning(data.message || "An error occurred while logging in.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setWarning("An error occurred while logging in.");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Mobile"
          onChange={(e) => setValue({ ...value, mobile: e.target.value })}
          required
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setValue({ ...value, password: e.target.value })}
          required
        ></input>
        <button type="submit">Login</button>
        <Link to={"/signup"}>
          <button type="submit">SignUp</button>
        </Link>

        {/* <a href="/signup"><button>SignUp</button></a> */}
      </form>
      {warning ? (
          <h4 style={{ color: "red", textAlign: "left", marginTop: "1rem" }}>
            {warning}
          </h4>):null
        }
    </div>
  );
};

export default Login;
