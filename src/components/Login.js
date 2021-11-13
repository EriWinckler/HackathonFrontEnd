import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const baseURL = "http://localhost:8080/";

function Login() {
  const [emailPart1, setEmailPart1] = useState("");
  const [emailPart2, setEmailPart2] = useState("");
  const [password, setPassword] = useState("");

  const setEmail = () => {
    return emailPart1 + emailPart2;
  };

  const login = () => {
    const firstName = emailPart1;
    const lastName = emailPart2;
    const email = setEmail();
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <section id="login">
        <img
          src="https://i.imgur.com/6iC52wB.png"
          alt="Hackathon"
          className="loginLogo"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="loginContainer">
            <h1>Sign in</h1>
            <form>
              <h5>Department</h5>
              <select {...register("department")}>
                <option value="frontend">Front End</option>
                <option value="backend">Back End</option>
              </select>
              <br />
              <h5>E-mail</h5>
              <input
                value={emailPart1}
                onChange={(event) => setEmailPart1(event.target.value)}
                type="text"
                placeholder="First Name"
                {...register("emailFirstName", { required: true })}
              />
              .
              <input
                value={emailPart2}
                onChange={(event) => setEmailPart2(event.target.value)}
                type="text"
                placeholder="Last Name"
                {...register("emailLastName", { required: true })}
              />
              @company.com
              <h5>Password</h5>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                {...register("password", { required: true })}
              />
              <button
                onClick={login}
                type="submit"
                className="loginSignInButton"
              >
                Sign In
              </button>
            </form>

            <p>
              By signing-in you agree to Hackathons's Conditions of Use & Sale.
              Please see our Privacy Notice.
            </p>

            <button className="loginRegisterButton">Create Account</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
