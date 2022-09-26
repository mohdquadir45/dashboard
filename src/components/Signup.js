import React from "react";
import { useState } from "react";
import App from "../App";
const Signup = ({ setIsLoading, isLoading }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (valid()) {
      /* alert(" The form is successfully submitted"); */
      setName("");
      setEmail("");
      setPassword("");
      setIsLoading(true)
    }
  };
  function ValidateEmail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }

  function CheckPassword(p) {
    if (
      p.length >= 7 &&
      p.length <= 14 &&
      /[a-z]/.test(p) &&
      /[A-Z]/.test(p) &&
      /[0-9]/.test(p) &&
      /[^A-Za-z0-9]/.test(p)
    ) {
      return true;
    } else {
      return false;
    }
  }

  const valid = () => {
    setNameError("");
    setEmailError("");
    setPasswordError("");
    let check = true;
    if (name === "") {
      setNameError("please enter the name");
      check = false;
    }
    if (email === "" || !ValidateEmail(email)) {
      setEmailError("Invalid Email");
      check = false;
    }
    if (password === "" || !CheckPassword(password)) {
      setPasswordError("invalid password");
      check = false;
    }

    return check;
  };
  return (
    <div className="mt-52 drop-shadow-md hover:drop-shadow-xl ">
     
                
                  <div className="flex flex-col justify-center items-center">
                   <h1 className="text-xl mt-8">LOGIN TO YOUR ACCOUNT</h1>

                   <div className="mt-8">
                  <label class="block text-gray-100 text-sm font-bold mb-2" for="username">
                   Username
                   </label>
                    <input
                      type="text"
                      class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <p style={{ color: "red", fontSize: "15px" }}>
                      {nameError}
                    </p>

                  </div>

                  <div className="mt-4">
                  <label class="block text-gray-100 text-sm font-bold mb-2" for="password">
                    Email
                   </label>
                    <input
                      type="Email"
                      className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p style={{ color: "red", fontSize: "15px" }}>
                      {emailError}
                    </p>
                  </div>
                  <div className="mt-4">
                  <label class="block text-gray-100 text-sm font-bold mb-2" for="password">
                    Password
                   </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <p style={{ color: "red", fontSize: "15px" }}>
                      {passwordError}
                    </p>
                  </div>

                  <div>
                    <button className="mt-8 mb-4 bg-blue-500 hover:bg-blue-700 w-96 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadowoutline" type="button" 
                      onClick={submitForm}>
                      Login
                    </button>
                  </div>

                  </div>
              
              
              
                  
           
    </div>
  );
};

export default Signup;
